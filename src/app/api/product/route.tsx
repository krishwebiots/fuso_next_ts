import { ProductApiData } from "@/app/Apidata/ProductApiData";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  return NextResponse.json(ProductApiData);
}
