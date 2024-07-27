import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";

interface Props {
  params: {
    id: string;
    // even though the declare you give here is number, the actual type is string, so you have to give string type here.
  };
}

export async function GET(request: NextRequest, { params: { id } }: Props) {
  const user = await prisma.user.findUnique({
    where: { id: parseInt(id) },
  });

  if (!user) {
    // the second parameter is http status code
    return NextResponse.json({ error: "user not found" }, { status: 404 });
  }

  return NextResponse.json(user);
}

interface UpdateUserRequest {
  name: string;
}

export async function PUT(request: NextRequest, { params: { id } }: Props) {
  const updateUserRequest: UpdateUserRequest = await request.json();
  if (!updateUserRequest.name) {
    return NextResponse.json({ error: "name is required" }, { status: 400 });
  }

  const user = await prisma.user.findUnique({
    where: {
      id: parseInt(id),
    },
  });

  if (!user) {
    return NextResponse.json({ error: "User Not Found" }, { status: 404 });
  }

  const updatedUser = await prisma.user.update({
    where: { id: user.id },
    data: {
      // only update name
      name: updateUserRequest.name,
    },
  });

  return NextResponse.json(updatedUser);
}

export async function DELETE(request: NextRequest, { params: { id } }: Props) {
  const user = await prisma.user.findUnique({
    where: { id: parseInt(id) },
  });

  if (!user) {
    return NextResponse.json({ error: "User Not Found" }, { status: 404 });
  }

  await prisma.user.delete({
    where: { id: user.id },
  });

  return NextResponse.json({});
}
