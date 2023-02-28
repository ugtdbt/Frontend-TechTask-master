import React, { memo } from "react";
import type { FC } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

interface FooterProps {
  description: string;
}

const Footer: FC<FooterProps> = memo((props: FooterProps) => {
  const { description } = props;

  return (
    <Box
      component="footer"
      sx={{ bgcolor: "background.paper", py: 6 }}
      data-testid="footer"
    >
      <Container maxWidth="lg">
        <Typography
          variant="body2"
          color="text.secondary"
          align="center"
          data-testid="footer-description"
        >
          {description}
        </Typography>
      </Container>
    </Box>
  );
});

Footer.displayName = "Footer";
export default Footer;
