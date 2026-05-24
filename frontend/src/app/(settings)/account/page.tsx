import AvatarCard from "@/components/avatar-card";

export default function AccountPage() {
  return (
    <section className="px-6">
      <div className="pb-10">
        <h1 className="text-4xl font-bold">Profile Information</h1>
        <p className="text-muted-foreground">
          Manage your personal presence and account preferences across the
          Lumina ecosystem
        </p>
      </div>

      <AvatarCard />
    </section>
  );
}
