import React, { memo } from "react";
import Grid from "@mui/material/Grid";

/**
 * @description Search page container.
 */

// ToDo - Find search query and make search page.

const SearchPage: React.FC = memo(() => {
  return (
    <Grid
      item
      xs={12}
      md={9}
      sx={{
        "& .markdown": {
          py: 3,
        },
      }}
    >
      <div>Search Page</div>
    </Grid>
  );
});

SearchPage.displayName = "SearchPage";
export default SearchPage;
