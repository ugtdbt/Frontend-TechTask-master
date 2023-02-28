import React, { memo } from "react";
import Grid from "@mui/material/Grid";
import { useSelector } from "react-redux";
import type { State } from "../state";
import Article from "../components/Article/ArticleComponent";
import Typography from "@mui/material/Typography";

/**
 * @description Homepage container.
 */

const HomePage: React.FC = memo(() => {
  const { data } = useSelector((state: State) => state.product);

  if (data === null) {
    return <>Error loading Side Bar</>;
  }

  if (data.categories.length === 0) {
    return <>Loading ....</>;
  }

  return (
    <Grid item md={10}>
      <Grid container direction="column">
        <Typography variant="h6" pl={3} gutterBottom sx={{ mt: 0 }}>
          <strong>{data?.categories[0]?.articleCount}</strong> results for{" "}
          {data?.categories[0]?.name}
        </Typography>
        <Grid
          container
          rowSpacing={1}
          pl={2}
          pt={4}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          alignItems="stretch"
        >
          {data?.categories[0]?.categoryArticles?.articles?.map(
            (article: any, index: number) => (
              <Grid item key={index}>
                <Article
                  imageUrl={article.images[0].path}
                  name={article.name}
                  variantName={article.variantName}
                  price={article.prices.regular.value}
                />
              </Grid>
            )
          )}
        </Grid>
      </Grid>
    </Grid>
  );
});

HomePage.displayName = "HomePage";
export default HomePage;
