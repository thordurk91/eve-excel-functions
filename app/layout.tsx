import "./globals.css";
import { Inter } from "next/font/google";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../lib/theme';
import CssBaseline from '@mui/material/CssBaseline';

import SocialIcons from "../app/social-icons";

export const metadata = {
  title: `Eve Excel Addin Resources`,
  description: `Detailed information about functions and helpful posts.`,
};

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

function Footer() {
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <div className="container mx-auto px-5">
        <div className="py-28 flex flex-col lg:flex-row justify-between">
          <h3 className="text-4xl lg:text-5xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            Built with Next.js.
          </h3>
          <div>
            <SocialIcons />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <section className="min-h-screen selection:bg-green-600">
              <main>{children}</main>
              <Footer />
            </section>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
