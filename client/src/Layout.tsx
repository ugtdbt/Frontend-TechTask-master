import React, { memo, useEffect } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { Header, Footer, SideBar } from "./components";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { graphqlClient } from "./utils/graphqlClient";
import { useGetProductListsQuery } from "./gql/product.generated-query";
import { actionCreators } from "./state";
import { sections } from "./testUtils/mockData/headerMockData";
import type { State } from "./state";
import { Locale } from "./gql";

const Layout = memo(({ children }: any) => {
  useEffect(() => {
    requestCategories();
  }, []);
  useGetProductListsQuery(
    graphqlClient,
    {
      id: "156126",
      locale: Locale.DeDe,
    },
    {
      onSuccess: (data) => {
        setCategories(data?.categories);
      },
      onError: () => {
        errorCategories();
      },
    }
  );

  const dispatch = useDispatch();
  const { setCategories, requestCategories, errorCategories } =
    bindActionCreators(actionCreators, dispatch);

  const { data } = useSelector((state: State) => state.product);

  return (
    <>
      <Container maxWidth="lg">
        <Header title="Home24" sections={sections} />
        <main>
          <Grid container spacing={5} sx={{ mt: 0 }}>
            <SideBar
              list={data?.categories[0]?.childrenCategories?.list ?? []}
            />
            {children}
          </Grid>
        </main>
      </Container>
      <Footer description="Alle Preise sind in Euro (€) inkl. gesetzlicher Umsatzsteuer und Versandkosten." />
    </>
  );
});

Layout.displayName = "Layout";
export default Layout;
