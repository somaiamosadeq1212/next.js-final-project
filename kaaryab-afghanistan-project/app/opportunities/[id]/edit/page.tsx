// "use client";

// import OpportunityForm from "@/components/forms/OpportunityForm";

// export default function EditOpportunityPage() {
//   const defaultValues = {
//     title: "Frontend Developer",
//     organization: "Code To Inspire",
//     location: "Herat",
//     category: "IT",
//     type: "Full Time",
//     deadline: "2026-08-10",
//     description: "Sample Description",
//     applyUrl: "https://example.com",
//   };

//   function handleSubmit(data: any) {
//     console.log("Edit", data);
//   }

//   return (
//     <main className="mx-auto max-w-5xl px-6 py-14">
//       <h1 className="mb-8 text-4xl font-bold">
//         Edit Opportunity
//       </h1>

//       <OpportunityForm
//         defaultValues={defaultValues}
//         onSubmit={handleSubmit}
//       />
//     </main>
//   );
// }