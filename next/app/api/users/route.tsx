import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";

// in a given folder or URL segment, we can eigher have a route.tsx file or page.tsx file, but not both.

// GET handler
export async function GET(request: NextRequest) {
  const users = await prisma.user.findMany();
  return NextResponse.json(users);
}

interface AddUserRequest {
  name: string;
  email: string;
}

export async function POST(request: NextRequest) {
  const addUserRequest: AddUserRequest = await request.json();

  if (!addUserRequest.name || !addUserRequest.email) {
    return NextResponse.json(
      { error: "name and email is required" },
      { status: 400 }
    );
  }

  const cnt = await prisma.user.count({
    where: { email: addUserRequest.email },
  });

  if (cnt > 0) {
    return NextResponse.json(
      { error: "User already exists" },
      { status: 400 }
    );
  }

  // save user
  const user = await prisma.user.create({
    data: {
      name: addUserRequest.name,
      email: addUserRequest.email,
    },
  });

  // 201 indicate that an object was created
  return NextResponse.json(user, { status: 201 });
}
