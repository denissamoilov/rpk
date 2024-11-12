import { getSession } from "@/server/jwt";

export async function GET() {
  const token = await getSession();

  if (!token) {
    return Response.json({ error: "No token found" }, { status: 404 });
  }

  return Response.json({ token });
}
