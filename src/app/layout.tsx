// this is the root layout component that will be used to wrap all the pages in the app. Need to have this.
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
