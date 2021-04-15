import React from 'react';
import { render, screen} from "@testing-library/react";
import "@testing-library/react";
import Header from '../components/header';

describe("Header", => () {
    it ("contains the blog title", () => {
        render (<Header/>);
        expect(screen.getByText("Blog Demo")).toBeInTheDocument();
    }); 
});