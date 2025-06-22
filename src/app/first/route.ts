import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(
    { message: "this is just trying things out man " },
    { status: 200 }
  );
}
