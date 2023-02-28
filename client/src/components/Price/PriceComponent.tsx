import React, { memo } from "react";
import type { FC } from "react";
import Typography from "@mui/material/Typography";
import { formatter } from "../../utils/formatter";

interface PriceProps {
  price: number;
}

const Price: FC<PriceProps> = memo((props: PriceProps) => {
  const { price } = props;

  return (
    <Typography gutterBottom variant="h5" component="div" data-testid="price">
      {formatter.format(price / 100)}
    </Typography>
  );
});

Price.displayName = "Price";
export default Price;
