import { NextResponse } from "next/server";

const opportunities: any[] = [];

export async function GET() {
  return NextResponse.json(opportunities);
}

export async function POST(req: Request) {
  const body = await req.json();

  const opportunity = {
    id: Date.now(),
    ...body,
  };

  opportunities.push(opportunity);

  return NextResponse.json(opportunity);
}