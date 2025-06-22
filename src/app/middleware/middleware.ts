import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";


export const middleware = async (request: NextRequest) => {
    const url = new URL(request.url);

    const name = url.searchParams.get("name")

    // Check if the request is for the /api/route
    if (!name) {
        return NextResponse.json({ error: "Name is required" }, { status: 400 });
    }

    return NextResponse.next();
}
