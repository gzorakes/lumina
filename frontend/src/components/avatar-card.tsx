import { Card } from "@/components/ui/card";
import { Camera } from "lucide-react";
import Image from "next/image";

export default function AvatarCard() {
  return (
    <Card className="max-w-3xl mb-6">
      <div className="flex items-center gap-6 px-6">
        <div className="relative">
          <div className="size-20 md:size-24 rounded-full bg-muted relative overflow-hidden">
            <Image src="/test.jpg" fill alt="profile image" />
          </div>
          <button
            type="button"
            aria-label="Change avatar"
            className="absolute bottom-0 right-0 size-7 grid place-items-center rounded-full bg-primary text-primary-foreground"
          >
            <Camera className="size-3.5" />
          </button>
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
