const { render, screen } = require("@testing-library/react")
import Card from "../Card";
import mockData from "../mocks/cardMock";
import "@testing-library/jest-dom"

it("should render card component",()=>{
    render(<Card cardObj={mockData}/>)
    const resName=screen.getByText(/Domino's Pizz/);
   expect(resName).toBeInTheDocument();
})