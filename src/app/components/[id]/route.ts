import { NextResponse } from "next/server"
import Users from "../../data"

export const GET = async (request: Request, { params }: { params: { id: string } }) => {
    const { id } = params;
    const user = Users.find(user => user.id === Number(id));
    if (user) {
        return NextResponse.json({ message: 'user found', result: user }, { status: 200 });
    }

    return NextResponse.json({ message: 'user not found', result: "" }, { status: 404 });
}

