import React from "react";
import { Breadcrumbs, Typography } from "@mui/material";
import { NavigateNext } from "@mui/icons-material";
import { Link } from "react-router-dom";

interface Props {
  breadcrumbs: Array<{ title: string; to?: string }>;
}

export const CustomBreadcrumbs = ({ breadcrumbs }: Props) => {
  const items = breadcrumbs.map((item) => {
    if (item.to !== undefined) {
      return (
        <Link
          to={item.to}
          style={{
            fontWeight: "bold",
            textDecoration: "none",
          }}
          color="#383838"
          key={item.title}
        >
          {item.title}
        </Link>
      );
    }
    return (
      <Typography fontWeight="bold" color="#383838" key={item.title}>
        {item.title}
      </Typography>
    );
  });

  return (
    <Breadcrumbs
      separator={<NavigateNext fontSize="small" />}
      aria-label="breadcrumb"
      sx={{ mb: "16px" }}
    >
      {items}
    </Breadcrumbs>
  );
};
