import { useState } from "react";
import { createProfile } from "@/lib/api";
import type { ProfileFormValues } from "@/lib/profile-schema";

type SubmitStatus = "idle" | "success" | "error";

export function useProfileSubmit() {
  const [status, setStatus] = useState<SubmitStatus>("idle");

  const submit = async (data: ProfileFormValues) => {
    setStatus("idle");
    try {
      await createProfile(data);
      setStatus("success");
      return true;
    } catch {
      setStatus("error");
      return false;
    }
  };

  return { submit, status };
}
