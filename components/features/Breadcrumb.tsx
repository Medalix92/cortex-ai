"use client";

import { usePathname } from "next/navigation";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "../ui/breadcrumb";

const BreadcrumbHeader = () => {
  // TODO: make navigation possible only for existing pages
  // TODO: ellipsis for long paths
  const pathname = usePathname();
  const path =
    pathname === "/"
      ? ["Dashboard"]
      : pathname.split("/").filter((p) => p.length > 0);
  return (
    <div>
      <Breadcrumb>
        <BreadcrumbList>
          {path.map((item, index) => (
            <BreadcrumbItem key={`${index}-${item}`}>
              <BreadcrumbLink href={`${item}`} className="capitalize ">
                {item}
              </BreadcrumbLink>
              {index !== path.length - 1 ? <BreadcrumbSeparator /> : null}
            </BreadcrumbItem>
          ))}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
};

export default BreadcrumbHeader;
