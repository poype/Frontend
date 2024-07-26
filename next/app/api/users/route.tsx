import { NextRequest, NextResponse } from "next/server";

// in a given folder or URL segment, we can eigher have a route.tsx file or page.tsx file, but not both.

// GET handler
export function GET(request: NextRequest) {
  return NextResponse.json([
    { id: 1, name: "John" },
    { id: 2, name: "Mosh" },
  ]);
}

interface AddUserRequest {
  name: string;
}

export async function POST(request: NextRequest) {
  const addUserRequest: AddUserRequest = await request.json();

  if (!addUserRequest.name) {
    return NextResponse.json({ error: "name is required" }, { status: 400 });
  }
  // 201 indicate that an object was created
  return NextResponse.json(
    { name: addUserRequest.name, id: 101 },
    { status: 201 }
  );
}
