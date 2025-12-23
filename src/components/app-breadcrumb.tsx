"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { usePathname } from "next/navigation";

export default function AppBreadcrumb() {
  const pathname = usePathname().split("/").filter(Boolean);

  const capitalizeWords = (s: string) => {
    return s
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem className="hidden md:block">
          <BreadcrumbLink href="#">V UI</BreadcrumbLink>
        </BreadcrumbItem>
        {pathname.length > 1 && (
          <>
            <BreadcrumbSeparator className="hidden md:block" />
            <BreadcrumbItem>
              <BreadcrumbPage>
                {capitalizeWords(
                  pathname[pathname.length - 2].replace("-", " ")
                )}
              </BreadcrumbPage>
            </BreadcrumbItem>
          </>
        )}
        {pathname.length>0 && (
          <>
            <BreadcrumbSeparator className="hidden md:block" />
            <BreadcrumbItem>
              <BreadcrumbPage>
                {capitalizeWords(
                  pathname[pathname.length - 1].replace("-", " ")
                )}
              </BreadcrumbPage>
            </BreadcrumbItem>
          </>
        )}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
