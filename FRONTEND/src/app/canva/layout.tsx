export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <div className="flex min-h-screen" />
    </>
  );
}
