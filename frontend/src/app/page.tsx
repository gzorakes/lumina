import { Button, buttonVariants } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex items-center justify-center flex-1">
      <Link href="/account">
        <Button size="lg">
          Settings <ArrowRight />
        </Button>
      </Link>
    </div>
  );
}
