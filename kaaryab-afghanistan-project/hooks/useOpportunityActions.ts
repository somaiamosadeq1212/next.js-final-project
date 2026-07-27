"use client";

import { useState } from "react";
import { Opportunity } from "@/components/types/opportunity";
import * as api from "@/lib/mockApi";

export function useOpportunityActions(
  opportunities: Opportunity[],
  setOpportunities: React.Dispatch<React.SetStateAction<Opportunity[]>>
) {
  const [loading, setLoading] = useState(false);

  async function create(data: Opportunity) {
    setLoading(true);

    const optimistic = [...opportunities, data];

    setOpportunities(optimistic);

    try {
      await api.createOpportunity(data);
    } catch {
      setOpportunities(opportunities);
    }

    setLoading(false);
  }

  async function update(id: string, data: Opportunity) {
    setLoading(true);

    const previous = [...opportunities];

    setOpportunities((prev) =>
      prev.map((item) => (item.id === id ? data : item))
    );

    try {
      await api.updateOpportunity(id, data);
    } catch {
      setOpportunities(previous);
    }

    setLoading(false);
  }

  async function remove(id: string) {
    setLoading(true);

    const previous = [...opportunities];

    setOpportunities((prev) =>
      prev.filter((item) => item.id !== id)
    );

    try {
      await api.deleteOpportunity(id);
    } catch {
      setOpportunities(previous);
    }

    setLoading(false);
  }

  return {
    loading,
    create,
    update,
    remove,
  };
}