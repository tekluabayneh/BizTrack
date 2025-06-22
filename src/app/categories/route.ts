export const dynamic = 'force-static'; // This will force the route to be static 

import { NextResponse } from 'next/server';
const category = [
    { id: 1, name: 'Electronics' },
    { id: 2, name: 'Books' },
    { id: 3, name: 'Clothing' },
    { id: 4, name: 'Home Appliances' },
    { id: 5, name: 'Toys' },
    { id: 6, name: 'Sports' },
]
export const GET = async () => {
    return NextResponse.json(category, { status: 200 });
}
