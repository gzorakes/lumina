import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center flex-1 gap-4">
      <h1 className="text-2xl font-semibold">Home Page</h1>
      <Link href="/account">
        <Button size="lg">
          Settings <ArrowRight />
        </Button>
      </Link>
    </div>
  );
}
