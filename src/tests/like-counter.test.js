import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom'
import LikeCounter from "../components/like-counter";

describe('LikeCounter', () => {
    
    const increaseLike = jest.fn();
    const decreaseLike = jest.fn();
    const counts = [0, 1, 2, 10];
    it.each(counts)('display %s likes when expected', (count) => {
      render(<LikeCounter likeCounter={count}
         handleDecreaseLike={decreaseLike}
         handleIncreaseLike={increaseLike} />);
      expect(screen.getByText(count)).toBeInTheDocument();
    });


    it('displays "-" button when likes count is higher than 0', () => {
        const likesCount = 1;
        render(
          <LikeCounter
            likeCounter={likesCount}
            handleIncreaseLike={increaseLike}
            handleDecreaseLike={decreaseLike}
          />
        );
        expect(screen.getByText("-")).toBeInTheDocument();
      });
    
      it('displays only "+" button when likes count is 0', () => {
        const likesCount = 0;
        render(
          <LikeCounter
            likeCounter={likesCount}
            handleIncreaseLike={increaseLike}
            handleDecreaseLike={decreaseLike}
          />
        );
        expect(screen.getAllByRole("button")).toHaveLength(1);
        expect(screen.getByText("+")).toBeInTheDocument();
      });

    it('calls updateCounter prop when clicked', () => {
      const likeCount = 0;
  
      render(
        <LikeCounter
            likeCounter={likeCount}
            handleDecreaseLike={decreaseLike}
            handleIncreaseLike={increaseLike}
        />
      );
      fireEvent.click(screen.getByText("+"));
      expect(increaseLike).toHaveBeenCalledTimes(1);
    });
  
  });