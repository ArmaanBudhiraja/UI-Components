import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Props {
  name: string;
  type: string;
  required: boolean;
  default: string;
  description: string;
}

interface BeautifulPropsTableProps {
  props: Props[];
  title?: string;
}

export default function BeautifulPropsTable({
  props,
  title = "Props",
}: BeautifulPropsTableProps) {
  return (
    <div className="space-y-6 w-full">
      <h2 className="text-3xl font-bold tracking-tight">{title}</h2>
      <ScrollArea className="rounded-md border">
        <Table>
          <TableHeader className="hidden md:table-header-group">
            <TableRow className="bg-muted/50">
              <TableHead className="w-[150px]">Name</TableHead>
              <TableHead className="w-[100px] text-center">Type</TableHead>
              <TableHead className="w-[100px] text-center">Required</TableHead>
              <TableHead className="w-[100px] text-center">Default</TableHead>
              <TableHead className="text-right">Description</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {props.map((prop) => (
              <React.Fragment key={prop.name}>
                {/* Mobile view */}
                <TableRow className="md:hidden hover:bg-muted/50 transition-colors">
                  <TableCell className="block pb-2">
                    <div className="font-medium text-lg mb-1">{prop.name}</div>
                    <div className="space-y-1">
                      <div>
                        <span className="font-medium mr-2">Type:</span>
                        <Badge variant="outline">{prop.type}</Badge>
                      </div>
                      <div>
                        <span className="font-medium mr-2">Required:</span>
                        {prop.required ? (
                          <Badge variant="destructive">Yes</Badge>
                        ) : (
                          <Badge variant="secondary">No</Badge>
                        )}
                      </div>
                      <div>
                        <span className="font-medium mr-2">Default:</span>
                        {prop.default ? prop.default : "-"}
                      </div>
                      <div>
                        <span className="font-medium mr-2">Description:</span>
                        {prop.description}
                      </div>
                    </div>
                  </TableCell>
                </TableRow>

                {/* Desktop view */}
                <TableRow className="hidden md:table-row hover:bg-muted/50 transition-colors">
                  <TableCell className="font-medium">{prop.name}</TableCell>
                  <TableCell className="text-center">
                    <Badge variant="outline">{prop.type}</Badge>
                  </TableCell>
                  <TableCell className="text-center">
                    {prop.required ? (
                      <Badge variant="destructive">Yes</Badge>
                    ) : (
                      <Badge variant="secondary">No</Badge>
                    )}
                  </TableCell>
                  <TableCell className="text-center w-36">
                    {prop.default ? prop.default : "-"}
                  </TableCell>
                  <TableCell className="text-right">
                    {prop.description}
                  </TableCell>
                </TableRow>
              </React.Fragment>
            ))}
          </TableBody>
        </Table>
      </ScrollArea>
    </div>
  );
}
