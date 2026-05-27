"use client";

import { Card } from "@/components/ui/card";
import { Camera } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";

export default function AvatarCard() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [preview, setPreview] = useState<string | null>(null);

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    setPreview(url);
  }

  return (
    <Card className="max-w-3xl mb-6">
      <div className="flex items-center gap-6 px-6">
        <div className="relative">
          <div className="size-20 md:size-24 rounded-full bg-muted relative overflow-hidden">
            <Image
              src={preview ?? "/test.jpg"}
              fill
              alt="profile image"
              sizes="96px"
              className="object-cover"
            />
          </div>
          <button
            type="button"
            aria-label="Change avatar"
            onClick={() => inputRef.current?.click()}
            className="absolute bottom-0 right-0 size-7 grid place-items-center rounded-full bg-primary text-primary-foreground"
          >
            <Camera className="size-3.5" />
          </button>

          <input
            type="file"
            accept="image/*"
            className="hidden"
            ref={inputRef}
            onChange={handleFileChange}
          />
        </div>

        <div className="space-y-1">
          <h2 className="text-lg font-semibold">Your Avatar</h2>
          <p className="text-sm text-muted-foreground">
            Recommended: JPG or PNG, at least 400×400px. Max 1MB.
          </p>
        </div>
      </div>
    </Card>
  );
}
