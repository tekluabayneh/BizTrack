import { NextResponse, NextRequest } from "next/server"

type commentType = {
    id: number,
    text: string

}

const comments: commentType[] = []
export async function GET(request: NextRequest) {
    const query = request.nextUrl.searchParams

    return NextResponse.json({ message: "this is working man from get rsquest" }, { status: 200 })
}

export async function POST(request: NextRequest) {
    const body = await request.json()
    const newComment: commentType = {
        id: body.length + 1,
        text: body.text
    }

    comments.push(newComment)
    return NextResponse.json({ message: 'success', newComment })
}


