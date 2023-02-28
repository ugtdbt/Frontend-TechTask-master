import React from "react";
import { cleanup, render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import { header } from "../../../testUtils/mockData/headerMockData";
import Header from "../HeaderComponent";
import { queryClient } from "../../../utils/react-query-client";
import { QueryClientProvider } from "@tanstack/react-query";

describe("Header component", () => {
  const HeaderComponent = (
    <QueryClientProvider client={queryClient}>
      <Header sections={header.sections} title={header.title} />
    </QueryClientProvider>
  );

  afterEach(() => {
    cleanup();
  });

  it("Header Match Snapshot", () => {
    const tree = renderer.create(HeaderComponent).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("Check Header title", () => {
    render(HeaderComponent);
    const headerTitle = screen.getByTestId("header-title")?.innerHTML;
    expect(headerTitle).toContain(header.title);
  });
});
