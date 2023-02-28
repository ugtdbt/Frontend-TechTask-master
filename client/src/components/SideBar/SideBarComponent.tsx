import React, { memo } from "react";
import type { FC } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

interface SideBarProps {
  list: ReadonlyArray<{
    name: string;
    urlPath: string;
  }>;
}

const SideBar: FC<SideBarProps> = memo((props: SideBarProps) => {
  const { list } = props;

  if (list.length === 0) {
    return <>Loading ....</>;
  }

  return (
    <Grid item xs={12} md={2} data-testid="sidebar">
      <Typography variant="h6" pl={3} gutterBottom sx={{ mt: 0 }}>
        Kategorien
      </Typography>
      {list.map((archive: any) => (
        <Link
          display="block"
          variant="body1"
          pl={3}
          pt={1}
          href={archive.urlPath}
          key={archive.name}
          className="sideBar-item"
        >
          {archive.name}
        </Link>
      ))}
    </Grid>
  );
});

SideBar.displayName = "SideBar";
export default SideBar;
