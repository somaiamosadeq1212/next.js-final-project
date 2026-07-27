"use client";

import { useState } from "react";
import { deleteOpportunity } from "@/lib/mockApi";

export function useDeleteOpportunity() {
  const [loading, setLoading] = useState(false);

  const remove = async (id: string) => {
    setLoading(true);

    try {
      await deleteOpportunity(id);

      return true;
    } finally {
      setLoading(false);
    }
  };

  return {
    remove,
    loading,
  };
}