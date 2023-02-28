import { cleanup, render, screen } from "@testing-library/react";
import React from "react";
import renderer from "react-test-renderer";
import { price } from "../../../testUtils/mockData/priceMockData";
import Price from "../PriceComponent";

describe("Price component", () => {
  const PriceComponent = <Price price={price.price} />;

  afterEach(() => {
    cleanup();
  });

  it("Price match Snapshot", () => {
    const tree = renderer.create(PriceComponent).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("Should render price component", () => {
    render(PriceComponent);
    const priceElem = screen.getByTestId("price");
    expect(priceElem).toBeInTheDocument();
  });

  it("Check price text", () => {
    render(PriceComponent);
    const priceElem = screen.getByTestId("price")?.innerHTML;
    expect(priceElem).toContain("25,00&nbsp;€");
  });
});
