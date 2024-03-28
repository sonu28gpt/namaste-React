const { render, screen, fireEvent } = require("@testing-library/react")
import { act } from "react-dom/test-utils";
import Body from "../Body"
import mockData from "../mocks/bodyMock.json";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"
global.fetch=jest.fn(()=>{
    return  Promise.resolve({
        json:()=>{
           return  Promise.resolve(mockData);
        }
    });
});

it("should render body component with card",async ()=>{
    await act(async()=> render(
        <BrowserRouter>

            <Body/>
        </BrowserRouter>
    ));
    const card=screen.getAllByTestId("card");
    expect(card.length).toBe(9);

});
it("should render body component with search button working",async ()=>{
    await act(async()=> render(
        <BrowserRouter>
            <Body/>
        </BrowserRouter>
    ));
    const searchInput=screen.getByTestId("searchInput");
    const searchbtn=screen.getByRole('button',{name:"search"});
    fireEvent.change(searchInput,{target:{value:"c"}});
    fireEvent.click(searchbtn);
    const cardAfterSearch=screen.getAllByTestId("card");
    expect(cardAfterSearch.length).toBe(5);

});