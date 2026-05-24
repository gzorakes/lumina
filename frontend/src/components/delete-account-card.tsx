import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function DeleteAccountCard() {
  return (
    <Card className="max-w-3xl border-destructive/30 bg-destructive/3">
      <div className="flex items-center justify-between gap-6 px-6">
        <div className="space-y-1">
          <h2 className="text-lg font-semibold text-red-700">Delete Account</h2>
          <p className="text-sm text-muted-foreground">
            Permanently remove your account and all associated data. This action
            cannot be undone.
          </p>
        </div>
        <Button className="px-6 bg-red-700 font-semibold hover:bg-red-600">
          Deactivate Account
        </Button>
      </div>
    </Card>
  );
}
