"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import {
  getOpportunity,
  getOpportunities,
  createOpportunity,
  updateOpportunity,
  deleteOpportunity,
} from "@/lib/mockApi";

import { Opportunity } from "@/components/types/opportunity";
// import { OpportunityFormValues } from "@/lib/validation/opportunity-schema";
import { appToast } from "@/lib/toast";

export function useOpportunity(id?: number) {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  const [opportunity, setOpportunity] =
    useState<Opportunity | null>(null);

  const [opportunities, setOpportunities] =
    useState<Opportunity[]>([]);

  const refresh = async () => {
    if (id) {
      await loadOpportunity();
    } else {
      await loadOpportunities();
    }
  };

  useEffect(() => {
    if (id) {
      loadOpportunity();
    } else {
      loadOpportunities();
    }
  }, [id]);

  async function loadOpportunity() {
    try {
      setLoading(true);
      setError("");

      const data = await getOpportunity(id!);

      if (data) {
        setOpportunity(data);
      }
    } catch {
      setError("Unable to load opportunity.");
    } finally {
      setLoading(false);
    }
  }

  async function loadOpportunities() {
    try {
      setLoading(true);
      setError("");

      const data = await getOpportunities();

      setOpportunities(data);
    } catch {
      setError("Unable to load opportunities.");
    } finally {
      setLoading(false);
    }
  }

  async function handleCreate(data: Omit<Opportunity, "id">) {
    const toastId = appToast.loading("Creating opportunity...");

    try {
      setLoading(true);

      await createOpportunity(data);

      appToast.dismiss(toastId);

      appToast.success("Opportunity created successfully.");

      await loadOpportunities();

      router.push("/dashboard/opportunities");

      return true;
    } catch {
      appToast.dismiss(toastId);

      appToast.error("Unable to create opportunity.");

      return false;
    } finally {
      setLoading(false);
    }
  }

  async function handleUpdate(data: Partial<Opportunity>) {
    const toastId = appToast.loading("Updating opportunity...");

    try {
      setLoading(true);

      const payload: Partial<Opportunity> = {
        ...data,
        requirements: data.requirements
          .split("\n")
          .map((item) => item.trim())
          .filter(Boolean),
      };

      await updateOpportunity(id!, payload);

      await loadOpportunity();

      appToast.dismiss(toastId);

      appToast.success("Opportunity updated successfully.");

      router.push("/dashboard/opportunities");

      return true;
    } catch {
      appToast.dismiss(toastId);

      appToast.error("Unable to update opportunity.");

      setError("Unable to update opportunity.");

      return false;
    } finally {
      setLoading(false);
    }
  }

  async function handleDelete(id: number) {
    const toastId = appToast.loading("Deleting opportunity...");

    try {
      setLoading(true);

      await deleteOpportunity(id);

      appToast.dismiss(toastId);

      appToast.success("Opportunity deleted.");

      await loadOpportunities();

      return true;
    } catch {
      appToast.dismiss(toastId);

      appToast.error("Unable to delete opportunity.");

      return false;
    } finally {
      setLoading(false);
    }
  }

  // async function refresh() {
  //   if (id) {
  //     await loadOpportunity();
  //   } else {
  //     await loadOpportunities();
  //   }
  // }

  return {
    loading,
    error,

    opportunity,
    opportunities,

    createOpportunity: handleCreate,
    updateOpportunity: handleUpdate,
    deleteOpportunity: handleDelete,

    refresh,
  };

}