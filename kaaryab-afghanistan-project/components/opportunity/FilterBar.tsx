"use client";

import { Briefcase, Layers3, MapPin, RotateCcw } from "lucide-react";
import { Card } from "@/components/ui/Card";
import Select from "@/components/ui/Select";
import Button from "@/components/ui/Button";

type FilterBarProps = {
  categories: string[];
  types: string[];
  locations: string[];

  selectedCategory: string;
  selectedType: string;
  selectedLocation: string;

  setSelectedCategory: (value: string) => void;
  setSelectedType: (value: string) => void;
  setSelectedLocation: (value: string) => void;
};

type SelectFieldProps = {
  id: string;
  label: string;
  icon: React.ReactNode;
  value: string;
  options: string[];
  onChange: (value: string) => void;
};

// Reusable select field used for Category, Job Type, and Location filters.
function SelectField({
  id,
  label,
  icon,
  value,
  options,
  onChange,
}: SelectFieldProps) {
  return (
    <div className="space-y-2 p-4">
      <label
        htmlFor={id}
        className="flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-300">
        {icon}
        {label}
      </label>

      <Select
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {options.map((option) => (
          <option
            key={option}
            value={option}
          >
            {option}
          </option>
        ))}
      </Select>
    </div>
  );
}

export default function FilterBar({
  categories,
  types,
  locations,

  selectedCategory,
  selectedType,
  selectedLocation,

  setSelectedCategory,
  setSelectedType,
  setSelectedLocation,
}: FilterBarProps) {

  // Reset all filters back to their default "All" state.
  const resetFilters = () => {
    setSelectedCategory("All");
    setSelectedType("All");
    setSelectedLocation("All");
  };

  const hasFilters =
    selectedCategory !== "All" ||
    selectedType !== "All" ||
    selectedLocation !== "All";

  return (
    <Card className="mt-8">
      {/* Header */}

      <div className="mb-6 flex items-center justify-between">
        <div className="p-4">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
            Filter Opportunities
          </h2>

          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            Narrow down opportunities using the filters below.
          </p>
        </div>

        {hasFilters && (
          <Button
            variant="outline"
            size="sm"
            onClick={resetFilters}
          >
            <RotateCcw className="mr-2 h-4 w-4" />
            Reset
          </Button>
        )}
      </div>

      {/* Filters */}

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">

        <SelectField
          id="category"
          label="Category"
          icon={<Layers3 className="h-4 w-4 text-blue-600" />}
          value={selectedCategory}
          options={categories}
          onChange={setSelectedCategory}
        />

        <SelectField
          id="job-type"
          label="Job Type"
          icon={<Briefcase className="h-4 w-4 text-blue-600" />}
          value={selectedType}
          options={types}
          onChange={setSelectedType}
        />

        <SelectField
          id="location"
          label="Location"
          icon={<MapPin className="h-4 w-4 text-blue-600" />}
          value={selectedLocation}
          options={locations}
          onChange={setSelectedLocation}
        />

      </div>
    </Card>
  );
}