import { NextRequest, NextResponse } from "next/server"
import Users from "../data"
import { headers, cookies } from "next/headers"
export const GET = async (request: NextRequest) => {
    const requestHeaders = request.headers

    console.log(requestHeaders.get("Authorization"))


    const headerList = await headers()
    console.log(headerList.get("Authorization"))

    const theme = request.cookies.get("theme")
    console.log(theme?.value)

    const cookieList = await cookies()
    cookieList.set("theme", "dark")


    console.log(cookieList.get("theme")?.value)

    const searchParams = request.nextUrl.searchParams;
    const name = searchParams.get('name')!
    console.log(name)
    const filteredUsers = Users.filter(user => user.name.toLowerCase().includes(name.toLowerCase()))

    return NextResponse.json({ message: 'user not found', result: filteredUsers }, { status: 200 });
}


