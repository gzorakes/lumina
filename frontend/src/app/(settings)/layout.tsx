import SideNavigation from "@/components/side-nav";

export default function SettingsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className=" flex flex-col md:flex-row flex-1 py-8 max-w-7xl mx-auto w-full 2xl:border-x">
      <SideNavigation />
      <main className="flex-1">{children}</main>
    </div>
  );
}
