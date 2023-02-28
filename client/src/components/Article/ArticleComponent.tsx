import React, { memo } from "react";
import type { FC } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ShareIcon from "@mui/icons-material/Share";
import CardHeader from "@mui/material/CardHeader";
import { Price } from "../Price";

interface ArticleProps {
  imageUrl: string;
  name: string;
  variantName: string;
  price: number;
}

const Article: FC<ArticleProps> = memo((props: ArticleProps) => {
  const { imageUrl, name, variantName, price } = props;
  return (
    <Card sx={{ maxWidth: 300, width: 280 }} data-testid="article">
      <CardHeader
        title={<span data-testid="article-name">{name}</span>}
        subheader={<span data-testid="article-variantName">{variantName}</span>}
        sx={{ minHeight: 160, alignItems: "start" }}
      />
      <CardMedia
        data-testid="article-image"
        sx={{ width: 200, height: 200, marginX: "auto" }}
        image={imageUrl}
        title={name}
      />
      <CardContent>
        <Price price={price} />
      </CardContent>
      <CardActions>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShoppingCartIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
});

Article.displayName = "Article";
export default Article;
