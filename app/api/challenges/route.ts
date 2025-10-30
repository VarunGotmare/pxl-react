import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import Challenge from "@/models/Challenge";

export async function GET() {
  await connectToDatabase();

  const count = await Challenge.countDocuments();
  const randomIndex = Math.floor(Math.random() * count);
  const challenge = await Challenge.findOne().skip(randomIndex);

  if (!challenge) {
    return NextResponse.json({ success: false, message: "No challenge found" });
  }

  // Return full challenge (including targetCode)
  return NextResponse.json({
    success: true,
    challenge: {
      _id: challenge._id,
      title: challenge.title,
      description: challenge.description,
      starterCode: challenge.starterCode,
      targetCode: challenge.targetCode, // ✅ send it securely
    },
  });
}
