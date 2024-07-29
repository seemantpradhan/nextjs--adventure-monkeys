import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import AppHeader from "@/app/ui/AppHeader";
import AppFooter from "@/app/ui/AppFooter";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Adventure Monkeys",
  description: "Adventure Monkeys: Live the life for the monkey in you!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppRouterCacheProvider
          options={{ key: 'css' }}
        >
          <ThemeProvider theme={theme}>
            <AppHeader />
            {children}
            <AppFooter />
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
