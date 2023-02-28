import React from "react";
import { cleanup, render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import { article } from "../../../testUtils/mockData/articleMockData";
import Article from "../ArticleComponent";

describe("Article component", () => {
  const ArticleComponent = (
    <Article
      imageUrl={article.imageUrl}
      name={article.name}
      variantName={article.variantName}
      price={article.price}
    />
  );

  afterEach(() => {
    cleanup();
  });

  it("Article Match Snapshot", () => {
    const tree = renderer.create(ArticleComponent).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("Should render Article component", () => {
    render(ArticleComponent);
    const articleElem = screen.getByTestId("article");
    expect(articleElem).toBeInTheDocument();
  });

  it("Check Article Name", () => {
    render(ArticleComponent);
    const articleName = screen.getByTestId("article-name")?.innerHTML;
    expect(articleName).toContain(article.name);
  });

  it("Check Article variantName", () => {
    render(ArticleComponent);
    const articleVariantName = screen.getByTestId(
      "article-variantName"
    )?.innerHTML;
    expect(articleVariantName).toContain(article.variantName);
  });

  it("Check Article Image", () => {
    render(ArticleComponent);
    const articleImage = screen
      .getByTestId("article-image")
      .getAttribute("style");
    expect(articleImage).toContain(article.imageUrl);
  });
});
