import { NextRequest, NextResponse } from "next/server";

interface Props {
  params: {
    id: number;
  };
}

export function GET(request: NextRequest, { params: { id } }: Props) {
  if (id > 10) {
    // the second parameter is http status code
    return NextResponse.json({ error: "user not found" }, { status: 404 });
  }

  return NextResponse.json({ id: 2, name: "Mosh" });
}

interface UpdateUserRequest {
  name: string;
}

export async function PUT(request: NextRequest, { params: { id } }: Props) {
  const updateUserRequest: UpdateUserRequest = await request.json();
  if (!updateUserRequest.name) {
    return NextResponse.json({ error: "name is required" }, { status: 400 });
  }

  if (id > 10) {
    return NextResponse.json({ error: "User Not Found" }, { status: 404 });
  }

  return NextResponse.json({ id: 1, name: updateUserRequest.name });
}


export function DELETE(request: NextRequest, { params: { id } }: Props) {
  if (id > 10) {
    return NextResponse.json({ error: "User Not Found" }, { status: 404 });
  }

  return NextResponse.json({});
}