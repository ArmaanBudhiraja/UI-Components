import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import ProviderElement from "@/lib/provider";
import { AppSidebar } from "@/components/app-sidebar";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import AppBreadcrumb from "@/components/app-breadcrumb";
import ThemeChanger from "@/components/theme-changer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: {
    default: "A-UI",
    template: "%s · A-UI",
  },
  description:
    "A-UI is a modern animated UI component library built with Tailwind CSS and Framer Motion.",

  icons: {
    icon: "/favicon-ui.ico",
  },

  openGraph: {
    title: "A-UI",
    description:
      "A-UI is a modern animated UI component library built with Tailwind CSS and Framer Motion.",
    siteName: "A-UI",
    type: "website",
    images: [
      {
        url: "/favicon-ui.ico",
        width: 256,
        height: 256,
        alt: "A-UI Logo",
      },
    ],
  },

  twitter: {
    card: "summary",
    title: "A-UI",
    description:
      "A-UI is a modern animated UI component library built with Tailwind CSS and Framer Motion.",
    images: ["/favicon.ico"],
  },

  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ProviderElement>
          <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
              <header className="flex h-16 shrink-0 items-center gap-2 border-b">
                <div className="flex items-center gap-2 px-3 w-full">
                  <SidebarTrigger />
                  <Separator orientation="vertical" className="mr-2 h-4" />
                  <AppBreadcrumb />
                  <ThemeChanger />
                </div>
              </header>
              {children}
            </SidebarInset>
          </SidebarProvider>
        </ProviderElement>
      </body>
    </html>
  );
}
