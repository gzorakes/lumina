import AvatarCard from "@/components/avatar-card";
import ProfileForm from "@/components/profile-form";

export default function AccountPage() {
  return (
    <section className="px-6">
      <div className="mb-10">
        <h1 className="text-4xl font-bold">Profile Information</h1>
        <p className="text-muted-foreground">
          Manage your personal presence and account preferences across the
          Lumina ecosystem
        </p>
      </div>

      <AvatarCard />

      <ProfileForm />
    </section>
  );
}
