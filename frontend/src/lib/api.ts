import type { ProfileFormValues } from "@/lib/profile-schema";

const API_URL = "http://localhost:3001";

export async function createProfile(data: ProfileFormValues) {
  const res = await fetch(`${API_URL}/profile`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error("Failed to create profile");
  }

  return res.json();
}
