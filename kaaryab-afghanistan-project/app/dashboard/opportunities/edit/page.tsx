// "use client";

// import { useParams } from "next/navigation";

// import TableHeader from "@/components/dashboard/TableHeader";
// import OpportunityForm from "@/components/forms/OpportunityForm";

// import { useOpportunity } from "@/hooks/useOpportunity";
// import { OpportunitySchema } from "@/lib/validation/opportunity-schema";

// export default function EditOpportunityPage() {
//   const params = useParams();

//   const id = Number(params.id);

//   const {
//     opportunity,
//     loading,
//     error,
//     updateOpportunity,
//   } = useOpportunity(id);

//   if (loading) {
//     return (
//       <div className="space-y-4">
//         <TableHeader
//           title="Edit Opportunity"
//           description="Loading..."
//         />
//       </div>
//     );
//   }

//   if (error || !opportunity) {
//     return (
//       <div className="rounded-xl border border-red-300 bg-red-50 p-6 text-red-700">
//         Opportunity not found.
//       </div>
//     );
//   }

//   const defaultValues: OpportunitySchema = {
//     title: opportunity.title,
//     organization: opportunity.organization,
//     location: opportunity.location,
//     category: opportunity.category,
//     type: opportunity.type,
//     salary: opportunity.salary,
//     experience: opportunity.experience,
//     email: opportunity.email,
//     deadline: opportunity.deadline,
//     description: opportunity.description,
//     requirements: opportunity.requirements.join("\n"),
//     applyUrl: opportunity.applyUrl,
//   };

//   return (
//     <div className="space-y-8">
//       <TableHeader
//         title="Edit Opportunity"
//         description="Update opportunity information"
//       />

//       <OpportunityForm
//         defaultValues={defaultValues}
//         onSubmit={updateOpportunity}
//         loading={loading}
//         submitText="Update Opportunity"
//       />
//     </div>
//   );
// }