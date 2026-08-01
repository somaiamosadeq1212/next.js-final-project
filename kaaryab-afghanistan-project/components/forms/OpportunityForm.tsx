"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  opportunitySchema,
  type OpportunitySchema,
} from "@/lib/validation/opportunity-schema";

import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";

type Props = {
  defaultValues?: OpportunitySchema;
  onSubmit: (data: OpportunitySchema) => void;
  loading?: boolean;
  submitText?: string;
};

export default function OpportunityForm({
  defaultValues,
  onSubmit,
  loading = false,
  submitText = "Save Opportunity",
}: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<OpportunitySchema>({
    resolver: zodResolver(opportunitySchema),
    defaultValues,
  });

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="
        space-y-8
        rounded-3xl
        border
        border-border
        bg-card
        p-5
        sm:p-6
        lg:p-8
        shadow-sm
        dark:border-slate-800
        dark:bg-slate-900
      "
    >
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {/* Title */}
        <div>
          <label className="mb-2 block text-sm font-medium text-default">
            Opportunity Title
          </label>

          <Input
            placeholder="Frontend Developer"
            {...register("title")}
          />

          {errors.title && (
            <p className="mt-2 text-sm text-red-500">
              {errors.title.message}
            </p>
          )}
        </div>

        {/* Organization */}
        <div>
          <label className="mb-2 block text-sm font-medium text-default">
            Organization
          </label>

          <Input
            placeholder="Code To Inspire"
            {...register("organization")}
          />

          {errors.organization && (
            <p className="mt-2 text-sm text-red-500">
              {errors.organization.message}
            </p>
          )}
        </div>

        {/* Location */}
        <div>
          <label className="mb-2 block text-sm font-medium text-default">
            Location
          </label>

          <Input
            placeholder="Herat"
            {...register("location")}
          />

          {errors.location && (
            <p className="mt-2 text-sm text-red-500">
              {errors.location.message}
            </p>
          )}
        </div>

        {/* Category */}
        <div>
          <label className="mb-2 block text-sm font-medium text-default">
            Category
          </label>

          <Input
            placeholder="IT"
            {...register("category")}
          />

          {errors.category && (
            <p className="mt-2 text-sm text-red-500">
              {errors.category.message}
            </p>
          )}
        </div>

        {/* Type */}
        <div>
          <label className="mb-2 block text-sm font-medium text-default">
            Opportunity Type
          </label>

          <Input
            placeholder="Full Time"
            {...register("type")}
          />

          {errors.type && (
            <p className="mt-2 text-sm text-red-500">
              {errors.type.message}
            </p>
          )}
        </div>

        {/* Salary */}
        <div>
          <label className="mb-2 block text-sm font-medium text-default">
            Salary
          </label>

          <Input
            placeholder="$800 - $1200"
            {...register("salary")}
          />

          {errors.salary && (
            <p className="mt-2 text-sm text-red-500">
              {errors.salary.message}
            </p>
          )}
        </div>

        {/* Experience */}
        <div>
          <label className="mb-2 block text-sm font-medium text-default">
            Experience
          </label>

          <Input
            placeholder="2 years"
            {...register("experience")}
          />

          {errors.experience && (
            <p className="mt-2 text-sm text-red-500">
              {errors.experience.message}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="mb-2 block text-sm font-medium text-default">
            Contact Email
          </label>

          <Input
            type="email"
            placeholder="jobs@example.com"
            {...register("email")}
          />

          {errors.email && (
            <p className="mt-2 text-sm text-red-500">
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Deadline */}
        <div>
          <label className="mb-2 block text-sm font-medium text-default">
            Deadline
          </label>

          <Input
            type="date"
            {...register("deadline")}
          />

          {errors.deadline && (
            <p className="mt-2 text-sm text-red-500">
              {errors.deadline.message}
            </p>
          )}
        </div>
      </div>

      {/* Description */}
      <div>
        <label className="mb-2 block text-sm font-medium text-default">
          Description
        </label>

        <textarea
          rows={6}
          {...register("description")}
          className="
            w-full
            rounded-xl
            border
            border-border
            bg-background
            px-4
            py-3
            outline-none
            transition-theme
            resize-y
            focus:border-primary
            dark:border-slate-700
            dark:bg-slate-950
          "
        />

        {errors.description && (
          <p className="mt-2 text-sm text-red-500">
            {errors.description.message}
          </p>
        )}
      </div>

      {/* Requirements */}
      <div>
        <label className="mb-2 block text-sm font-medium text-default">
          Requirements
        </label>

        <textarea
          rows={5}
          placeholder="One requirement per line"
          {...register("requirements")}
          className="
            w-full
            rounded-xl
            border
            border-border
            bg-background
            px-4
            py-3
            outline-none
            transition
            focus:border-primary
            dark:border-slate-700
            dark:bg-slate-950
          "
        />

        {errors.requirements && (
          <p className="mt-2 text-sm text-red-500">
            {errors.requirements.message}
          </p>
        )}
      </div>

      {/* Apply URL */}
      <div>
        <label className="mb-2 block text-sm font-medium text-default">
          Apply URL
        </label>

        <Input
          placeholder="https://example.com/apply"
          {...register("applyUrl")}
        />

        {errors.applyUrl && (
          <p className="mt-2 text-sm text-red-500">
            {errors.applyUrl.message}
          </p>
        )}
      </div>

      <Button
        type="submit"
        disabled={loading}
        className="w-full md:w-auto"
      >
        {loading ? "Saving..." : submitText}
      </Button>
    </form>
  );
}