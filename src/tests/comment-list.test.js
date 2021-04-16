import React from 'react';
import { render } from "@testing-library/react";
import '@testing-library/jest-dom';
import '../components/comment-list';
import CommentList from '../components/comment-list';

//Adding Test information for user comments
const comments = [
    {
        body: "Test comment body 1",
        username: "Test comment username 1",
        uuid: `Test id 123`,
      },
      {
        body: "Test comment body 2",
        username: "Test comment username 2",
        uuid: "Test id 124",
      },
      {
        body: "Test comment body 3",
        username: "Test comment username 3",
        uuid: "Test id 125",
      }
    ];

describe("comment list", () => {
    it("render expected number of comments", () => {
    const { getAllByTestId } = render(
    <CommentList comments={comments} />
);
  expect(getAllByTestId("comment")).toHaveLength(3);
});
}); 