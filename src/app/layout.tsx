import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./globals.css";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Provider from "@/components/Provider";

const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-main p-5 bg-white">
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
