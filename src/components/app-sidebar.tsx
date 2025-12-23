"use client";

import { GalleryVerticalEnd } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export interface SideBarItem {
  title: string;
  url: string;
  items: {
    title: string;
    url: string;
    parent: string;
    parentUrl: string;
  }[];
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const router = useRouter();

  const pathname = usePathname().split("/").filter(Boolean);

  const [selected, setSelected] = useState<string>(
    pathname[pathname.length - 1]
  );

  useEffect(() => setSelected(pathname[pathname.length - 1]), [pathname]);

  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <GalleryVerticalEnd className="size-4" />
                </div>
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="font-semibold">V UI</span>
                  <span className="">v1.0.0</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            {data.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild>
                  <a className={`font-medium`}>{item.title}</a>
                </SidebarMenuButton>
                {item.items?.length ? (
                  <SidebarMenuSub>
                    {item.items.map((item) => (
                      <SidebarMenuSubItem key={item.title}>
                        <SidebarMenuSubButton
                          onClick={() => {
                            if (item.title === "Gmail") {
                              window.open(
                                item.parentUrl,
                                "_blank",
                                "width=800,height=600,scrollbars=yes,resizable=yes"
                              );
                            } else if (item.parent == "Social Media")
                              window.open(`${item.parentUrl}`, "_blank");
                            else router.push(`/${item.parentUrl}/${item.url}`);
                          }}
                          className={`${
                            selected == item.url &&
                            "bg-primary hover:bg-primary"
                          } cursor-pointer`}
                        >
                          <p
                            className={`${
                              selected == item.url && "text-selected"
                            }`}
                          >
                            {item.title}
                          </p>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                ) : null}
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}

const data: SideBarItem[] = [
  {
    title: "Getting Started",
    url: "getting-started",
    items: [
      {
        title: "Introduction",
        url: "introduction",
        parent: "Getting Started",
        parentUrl: "getting-started",
      },
      {
        title: "Installation",
        url: "installation",
        parent: "Getting Started",
        parentUrl: "getting-started",
      },
    ],
  },
  {
    title: "Components",
    url: "components",
    items: [
      {
        title: "Code Snippet",
        url: "code-snippet",
        parent: "Components",
        parentUrl: "components",
      },
      {
        title: "Color Picker",
        url: "color-picker",
        parent: "Components",
        parentUrl: "components",
      },
      {
        title: "Combo-box",
        url: "combo-box",
        parent: "Components",
        parentUrl: "components",
      },
      {
        title: "Corousal",
        url: "corousal",
        parent: "Components",
        parentUrl: "components",
      },
      {
        title: "Dark Mode Button",
        url: "dark-mode-button",
        parent: "Components",
        parentUrl: "components",
      },
      {
        title: "Date Picker",
        url: "date-picker",
        parent: "Components",
        parentUrl: "components",
      },
      {
        title: "Drop Down Menu",
        url: "drop-down-menu",
        parent: "Components",
        parentUrl: "components",
      },
      {
        title: "Hover Lines",
        url: "hover-lines",
        parent: "Components",
        parentUrl: "components",
      },
      {
        title: "Input Tag Inner",
        url: "input-tag-inner",
        parent: "Components",
        parentUrl: "components",
      },
      {
        title: "Input Tag Outer",
        url: "input-tag-outer",
        parent: "Components",
        parentUrl: "components",
      },
      {
        title: "Loader",
        url: "loader",
        parent: "Components",
        parentUrl: "components",
      },
      {
        title: "Password Input",
        url: "password-input",
        parent: "Components",
        parentUrl: "components",
      },
      {
        title: "Progress Bar",
        url: "progress-bar",
        parent: "Components",
        parentUrl: "components",
      },
      {
        title: "Range Picker",
        url: "range-picker",
        parent: "Components",
        parentUrl: "components",
      },
      {
        title: "Terms and Conditions",
        url: "terms-and-conditions",
        parent: "Components",
        parentUrl: "components",
      },
      {
        title: "Toaster",
        url: "toaster",
        parent: "Components",
        parentUrl: "components",
      },
    ],
  },
  {
    title: "Connect With Me",
    url: "connect-with-me",
    items: [
      {
        title: "GitHub",
        url: "https://github.com/Vardaan-02",
        parent: "Social Media",
        parentUrl: "https://github.com/Vardaan-02",
      },
      {
        title: "Gmail",
        url: "https://mail.google.com/mail/?view=cm&fs=1&to=vardaanpahwa02@gmail.com",
        parent: "Social Media",
        parentUrl:
          "https://mail.google.com/mail/?view=cm&fs=1&to=vardaanpahwa02@gmail.com",
      },
      {
        title: "LinkedIn",
        url: "https://www.linkedin.com/in/vardaan-pahwa-6936a3319/",
        parent: "Social Media",
        parentUrl: "https://www.linkedin.com/in/vardaan-pahwa-6936a3319/",
      },
      {
        title: "Instagram",
        url: "https://www.instagram.com/vardaan_02",
        parent: "Social Media",
        parentUrl: "https://www.instagram.com/vardaan_02",
      },
    ],
  },
];
