import React, { memo, useState } from "react";
import type { FC } from "react";
import Toolbar from "@mui/material/Toolbar";
import SearchIcon from "@mui/icons-material/Search";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Autocomplete from "@mui/material/Autocomplete";
import { useInfiniteSearchSuggestionsV2Query } from "../../gql/product.generated-query";
import { graphqlClient } from "../../utils/graphqlClient";

import {
  Search,
  SearchIconWrapper,
  StyledTextField,
} from "../../styles/header";
import { ArticleImageFormat, Locale, SearchBackend } from "../../gql";

interface HeaderProps {
  sections: ReadonlyArray<{
    title: string;
    url: string;
  }>;
  title: string;
}

// ToDo - Write handle navigation to homepage

const Header: FC<HeaderProps> = memo((props: HeaderProps) => {
  const { sections, title } = props;
  const [searchValues, setSearchValues] = useState<string[]>([]);
  const [query, setQuery] = useState<string>("");

  const handleSearch = (searchText: string): void => {
    if (searchText === null) return;
    setQuery(searchText);
    refetch().catch(() => {
      setSearchValues([]);
    });
  };

  const { refetch } = useInfiniteSearchSuggestionsV2Query(
    "prefix",
    graphqlClient,
    {
      prefix: query,
      locale: Locale.DeDe,
      backend: SearchBackend.ThirdParty,
      format: ArticleImageFormat.Webp,
    },
    {
      onSuccess: (data) => {
        let searchSuggestions: any[] = [];
        if (typeof data?.pages[0]?.suggestions !== "undefined") {
          if (data?.pages[0]?.suggestions !== null) {
            searchSuggestions = data?.pages[0]?.suggestions
              .filter((suggestion) => {
                return typeof suggestion?.name !== "undefined";
              })
              .map((value) =>
                typeof value?.name !== "undefined" ? value.name : ""
              );
          }
        }
        setSearchValues(searchSuggestions);
      },
      onError: () => {
        setSearchValues([]);
      },
    }
  );

  return (
    <React.Fragment>
      <Toolbar sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Grid container>
          <Grid item xs={12} md={2}>
            <Typography
              component="h2"
              variant="h5"
              color="inherit"
              align="left"
              noWrap
              sx={{ flex: 1 }}
              data-testid="header-title"
            >
              {title}
            </Typography>
          </Grid>
          <Grid item xs={12} md={8}>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <Autocomplete
                freeSolo
                disableClearable
                options={[...searchValues]}
                onInputChange={(event, newInputValue) => {
                  handleSearch(newInputValue);
                }}
                renderInput={(params) => (
                  <StyledTextField
                    {...params}
                    InputProps={{
                      ...params.InputProps,
                      type: "search",
                    }}
                  />
                )}
              />
            </Search>
          </Grid>
          <Grid item xs={12} md={2} pl={3} justifyContent="flex-end">
            <Grid container justifyContent="flex-end">
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShoppingCartIcon />
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        sx={{ justifyContent: "space-between", overflowX: "auto" }}
      >
        {sections.map((section) => (
          <Link
            color="inherit"
            noWrap
            key={section.title}
            variant="body2"
            href={section.url}
            sx={{ p: 1, flexShrink: 0 }}
          >
            {section.title}
          </Link>
        ))}
      </Toolbar>
    </React.Fragment>
  );
});

Header.displayName = "Header";
export default Header;
