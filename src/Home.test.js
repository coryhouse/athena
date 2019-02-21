import React from "react";
import Home from "./Home";
import { render, cleanup } from "react-testing-library";
import renderer from "react-test-renderer";
import "jest-dom/extend-expect";

it("renders page title when passed a title", () => {
  const tree = renderer.create(<Home title="test" />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders 'no title :(' when not passed a title", () => {
  const tree = renderer.create(<Home />).toJSON();
  expect(tree).toMatchSnapshot();
});

afterEach(cleanup);

it("should render an h1 with the title provided on props", () => {
  // arrange
  const { getByText, debug } = render(<Home title="Example title" />);

  // act
  // assert
  getByText("Example title");

  debug();
});

it("should pass", () => {
  expect(1).toEqual(1);
});
