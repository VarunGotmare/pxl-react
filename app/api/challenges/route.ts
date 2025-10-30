import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import Challenge from "@/models/Challenge";

export async function GET() {
  await connectToDatabase();
  const challenges = await Challenge.find();
  return NextResponse.json(challenges);
}

export async function POST(req: Request) {
  await connectToDatabase();
  const body = await req.json();
  const challenge = await Challenge.create(body);
  return NextResponse.json(challenge);
}
