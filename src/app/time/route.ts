export const dynamic = 'force-static'; // This will force the route to be static

import { NextResponse } from "next/server";
export const GET = async () => {
    return NextResponse.json({ time: new Date().toISOString() }, { status: 200 });
}
