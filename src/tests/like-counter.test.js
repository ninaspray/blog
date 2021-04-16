import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom'
import LikeCounter from "../components/like-counter";

describe('LikeCounter', () => {
    it('calls updateCounter prop when clicked', () => {
      const updateCounter = jest.fn();
      const likeCounter = 0;
  
      render(<LikeCounter likeCounter={likeCounter} handleClick={updateCounter} />);
      fireEvent.click(screen.getByText("+"));
      expect(updateCounter).toHaveBeenCalledTimes(1);
    });
  
  });