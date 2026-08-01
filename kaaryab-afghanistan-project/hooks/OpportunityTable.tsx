"use client";

import { useEffect, useMemo, useState } from "react";

import { getOpportunities } from "@/lib/mockApi";
import { useDeleteOpportunity } from "./useDeleteOpportunity";
import { Opportunity } from "@/components/types/opportunity";

const PAGE_SIZE = 6;

export function useOpportunityTable() {
  const [jobs, setJobs] = useState<Opportunity[]>([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const [sortAsc, setSortAsc] = useState(true);

  const [currentPage, setCurrentPage] = useState(1);

  const [selectedId, setSelectedId] =
    useState<number | null>(null);

  const [dialogOpen, setDialogOpen] =
    useState(false);

  const [status, setStatus] =
  useState("All");

// dynamic filter
//   const categories = useMemo(() => {
//   return [
//     "All",
//     ...Array.from(
//       new Set(jobs.map((item) => item.category))
//     ),
//   ];
// }, [jobs]);

// const statuses = useMemo(() => {
//   return [
//     "All",
//     ...Array.from(
//       new Set(jobs.map((item) => item.status))
//     ),
//   ];
// }, [jobs]);

const categories = useMemo(() => {
  return [
    "All",
    ...Array.from(
      new Set(
        jobs
          .map((item) => item.category)
          .filter(
            (category): category is string =>
              !!category && category !== "All"
          )
      )
    ),
  ];
}, [jobs]);

const statuses = useMemo(() => {
  return [
    "All",
    ...Array.from(
      new Set(
        jobs
          .map((item) => item.status)
          .filter(
            (status): status is string =>
              !!status && status !== "All"
          )
      )
    ),
  ];
}, [jobs]);

  const {
    remove,
    loading: deleting,
  } = useDeleteOpportunity();

  async function loadData() {
    setLoading(true);

    const data = await getOpportunities();

    setJobs(data);

    setLoading(false);
  }

  useEffect(() => {
    loadData();
  }, []);

  const filtered = useMemo(() => {
    let data = [...jobs];

    if (search.trim()) {
  const query = search.toLowerCase();

  data = data.filter((item) =>

    item.title.toLowerCase().includes(query) ||

    item.organization.toLowerCase().includes(query) ||

    item.location.toLowerCase().includes(query) ||

    item.category.toLowerCase().includes(query)

  );
}

    if (status !== "All") {
  data = data.filter(
    (item) => item.status === status
  );
}

    if (category !== "All") {
      data = data.filter(
        (item) => item.category === category
      );
    }

    data.sort((a, b) =>
      sortAsc
        ? a.title.localeCompare(b.title)
        : b.title.localeCompare(a.title)
    );

    return data;
  }, [jobs, search, category,status, sortAsc]);

  // new section
  useEffect(() => {
  setCurrentPage(1);
}, [search, category, status]);

  const totalPages = Math.ceil(
    filtered.length / PAGE_SIZE
  );

  useEffect(() => {
  if (
    currentPage > totalPages &&
    totalPages > 0
  ) {
    setCurrentPage(totalPages);
  }
}, [currentPage, totalPages]);

  const paginated = useMemo(() => {
    const start = (currentPage - 1) * PAGE_SIZE;

    return filtered.slice(start, start + PAGE_SIZE);
  }, [filtered, currentPage]);

  function clearFilters() {
    setSearch("");
    setCategory("All");
    setStatus("All");
    setCurrentPage(1);
  }

  function toggleSort() {
    setSortAsc((prev) => !prev);
  }

  function openDelete(id: number) {
    setSelectedId(id);
    setDialogOpen(true);
  }

  async function confirmDelete() {
    if (selectedId === null) return;

    await remove(selectedId);

    setDialogOpen(false);

    loadData();
  }

  

  return {
    loading,

    deleting,

    status,
setStatus,

    jobs: paginated,

    total: filtered.length,

    categories,
statuses,

    currentPage,

    totalPages,

    search,

    setSearch,

    category,

    setCategory,

    clearFilters,

    toggleSort,

    setCurrentPage,

    dialogOpen,

    setDialogOpen,

    openDelete,

    confirmDelete,

    
  };
}