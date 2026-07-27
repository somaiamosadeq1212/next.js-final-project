"use client";

import OpportunityToolbar from "./OpportunityToolbar";
import OpportunityDesktop from "./OpportunityDesktop";
import OpportunityMobile from "./OpportunityMobile";
import Pagination from "./Pagination";
import DeleteDialog from "./DeleteDialog";
import EmptyState from "./DashboardEmptyState";
import TableSkeleton from "./TableSkeleton";
import { useOpportunityTable } from "@/hooks/OpportunityTable";


export default function OpportunityTable() {
  const table = useOpportunityTable();

  if (table.loading) return <TableSkeleton />;

  if (!table.total) return <EmptyState />;

  return (
    <>
      <OpportunityToolbar
        search={table.search}
        setSearch={table.setSearch}
        category={table.category}
        setCategory={table.setCategory}
        categories={table.categories}
        status={table.status}
        setStatus={table.setStatus}
        statuses={table.statuses}
        total={table.total}
        clearFilters={table.clearFilters}
      />

      <OpportunityDesktop
        jobs={table.jobs}
        onDelete={table.openDelete}
        onSort={table.toggleSort}
      />

      <OpportunityMobile
        jobs={table.jobs}
        onDelete={table.openDelete}
      />

      <Pagination
        currentPage={table.currentPage}
        totalPages={table.totalPages}
        onPageChange={table.setCurrentPage}
      />

      <DeleteDialog
        open={table.dialogOpen}
        loading={table.deleting}
        onClose={() => table.setDialogOpen(false)}
        onConfirm={table.confirmDelete}
      />
    </>
  );
}