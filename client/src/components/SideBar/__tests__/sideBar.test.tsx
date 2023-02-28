import { cleanup, render, screen } from "@testing-library/react";
import React from "react";
import renderer from "react-test-renderer";
import { sideBar } from "../../../testUtils/mockData/sideBarMockData";
import SideBar from "../SideBarComponent";

describe("SideBar component", () => {
  const SideBarComponent = <SideBar list={sideBar.list} />;

  afterEach(() => {
    cleanup();
  });

  it("SideBar Match Snapshot", () => {
    const tree = renderer.create(SideBarComponent).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("Should render SideBar component", () => {
    render(SideBarComponent);
    const sideBarElem = screen.getByTestId("sidebar");
    expect(sideBarElem).toBeInTheDocument();
  });

  it("Render the 1st menu as Kategorien", () => {
    render(SideBarComponent);
    const _MenuItems = document.querySelectorAll(".sideBar-item");
    expect(_MenuItems[0].innerHTML).toContain(sideBar.list[0].name);
  });

  it("Render the 2nd menu as Schlafzimmer", () => {
    render(SideBarComponent);
    const _MenuItems = document.querySelectorAll(".sideBar-item");
    expect(_MenuItems[1].innerHTML).toContain(sideBar.list[1].name);
  });
});
