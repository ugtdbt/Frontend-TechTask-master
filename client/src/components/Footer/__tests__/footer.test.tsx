import { cleanup, render, screen } from "@testing-library/react";
import React from "react";
import renderer from "react-test-renderer";
import { footer } from "../../../testUtils/mockData/footerMockData";
import Footer from "../FooterComponent";

describe("Footer component", () => {
  const FooterComponent = <Footer description={footer.description} />;

  afterEach(() => {
    cleanup();
  });

  it("Footer Match Snapshot", () => {
    const tree = renderer.create(FooterComponent).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("Should render Footer component", () => {
    render(FooterComponent);
    const footerElem = screen.getByTestId("footer");
    expect(footerElem).toBeInTheDocument();
  });

  it("Check Footer description", () => {
    render(FooterComponent);
    const footerDescription =
      screen.getByTestId("footer-description")?.innerHTML;
    expect(footerDescription).toContain(footer.description);
  });
});
