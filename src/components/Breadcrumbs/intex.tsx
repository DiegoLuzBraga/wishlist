import React from "react";
import { Breadcrumbs } from "@mui/material";
import { NavigateNext } from "@mui/icons-material";

interface Props {
  breadcrumbs: Array<string>;
}

export const CustomBreadcrumbs = ({ breadcrumbs }: Props) => {
  return (
    <Breadcrumbs
      separator={<NavigateNext fontSize="small" />}
      aria-label="breadcrumb"
    >
      {breadcrumbs}
    </Breadcrumbs>
  );
};
