const { act } = require("react-dom/test-utils")
import { fireEvent, render, screen } from "@testing-library/react"
import mockData from "../mocks/resMenuMock.json"
import RestaurantMenu from "../RestaurantMenu";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import "@testing-library/jest-dom"
import Header from '../Header';
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"


global.fetch=jest.fn(()=>Promise.resolve({
    json:()=>Promise.resolve(mockData)
}));


it("should load restaurant menu ",async()=>{
    await act(async()=>render(
        <BrowserRouter>
        <Provider store={appStore}>
            <Header/>
            <RestaurantMenu/>
        </Provider>
        </BrowserRouter>
    ));
    const addbtn=screen.getAllByText("ADD +");
    fireEvent.click(addbtn[0]);
    const cart=screen.getByText("Cart(1items)");
    console.log(cart);
    expect(cart).toBeInTheDocument();

});