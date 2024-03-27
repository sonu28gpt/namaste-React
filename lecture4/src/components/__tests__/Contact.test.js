const { render, screen } = require("@testing-library/react");
import Contact from "../Contact";
import "@testing-library/jest-dom"

describe("contact component",()=>{

    test("should load contact page",()=>{
        render(<Contact/>);
        const heading =screen.getByRole("heading");//quering
        // console.log(heading);
        expect(heading).toBeInTheDocument();//assertion
    });
    it("should load 2 input boxes",()=>{
        render(<Contact/>);
        const input=screen.getAllByRole("textbox");
        // console.log(input);
        expect(input.length).toBe(2);
    });
});