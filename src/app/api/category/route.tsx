import { CategoryApiData } from "@/app/Apidata/CategoryApiData";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  return NextResponse.json(CategoryApiData);
}
