import { jobs } from "@/app/data/jobs";
import { Opportunity } from "@/components/types/opportunity";

const STORAGE_KEY = "opportunities";

function readDB(): Opportunity[] {
  if (typeof window === "undefined") {
    return [...jobs];
  }

  const stored = localStorage.getItem(STORAGE_KEY);

  if (!stored) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(jobs));
    return [...jobs];
  }

  return JSON.parse(stored);
}

function writeDB(data: Opportunity[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

const delay = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

// let db: Opportunity[] = [...jobs];

function clone<T>(data: T): T {
  return structuredClone(data);
}

function validateOpportunity(values: Partial<Opportunity>) {
  if ("title" in values && !values.title?.trim()) {
    throw new Error("Title is required.");
  }

  if ("organization" in values && !values.organization?.trim()) {
    throw new Error("Organization is required.");
  }

  if ("location" in values && !values.location?.trim()) {
    throw new Error("Location is required.");
  }

  if ("category" in values && !values.category?.trim()) {
    throw new Error("Category is required.");
  }

  if ("type" in values && !values.type?.trim()) {
    throw new Error("Type is required.");
  }

  if ("deadline" in values && !values.deadline?.trim()) {
    throw new Error("Deadline is required.");
  }

  if ("description" in values && !values.description?.trim()) {
    throw new Error("Description is required.");
  }

  if ("applyUrl" in values && !values.applyUrl?.trim()) {
    throw new Error("Apply URL is required.");
  }
}

export async function getOpportunities(): Promise<Opportunity[]> {
  await delay(500);

  // return clone(db);
  return clone(readDB());
}

export async function getOpportunity(id: number) {
  await delay(300);

  const db = readDB();

  const opportunity = db.find((item) => item.id === id);

  if (!opportunity) {
    throw new Error("Opportunity not found.");
  }

  return clone(opportunity);
}

export async function createOpportunity(
  data: Omit<Opportunity, "id">
) {
  await delay(600);

  validateOpportunity(data);

  const newOpportunity: Opportunity = {
    ...data,
    id: Date.now(),
  };

  const db = readDB();

  db.unshift(newOpportunity);
  writeDB(db);

  return clone(newOpportunity);
}

export async function updateOpportunity(
  id: number,
  values: Partial<Opportunity>
) {
  await delay(600);

  validateOpportunity(values);

  const db = readDB();

  const index = db.findIndex((item) => item.id === id);

  if (index === -1) {
    throw new Error("Opportunity not found.");
  }

  db[index] = {
    ...db[index],
    ...values,
  };

  writeDB(db);

  return clone(db[index]);
}

export async function deleteOpportunity(
  id: number
) {
  await delay(500);

   const db = readDB();

  const exists = db.some((item) => item.id === id);

  if (!exists) {
    throw new Error("Opportunity not found.");
  }

  // db = db.filter((item) => item.id !== id);

const updated = db.filter((item) => item.id !== id);

writeDB(updated);

  return true;
}