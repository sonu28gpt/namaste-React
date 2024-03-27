const { render,screen, fireEvent } = require("@testing-library/react")
import { Provider } from 'react-redux';
import Header from '../Header';
import appStore from '../../utils/appStore';
import { BrowserRouter } from 'react-router-dom';
import "@testing-library/jest-dom";

describe(" heading component",()=>{

    it("should render header component and have login button",()=>{
        render(
            <BrowserRouter>
                <Provider store={appStore}>

                    <Header/>
                </Provider>
            </BrowserRouter>
            
        );
        const loginInButton=screen.getByRole("button",{name:"log In"});
        expect(loginInButton).toBeInTheDocument();
    });
    it("should change login button to logOut when it is clicked",()=>{
        render(
            <BrowserRouter>
                <Provider store={appStore}>

                    <Header/>
                </Provider>
            </BrowserRouter>
            
        );
        const loginButton=screen.getByRole("button",{name:"log In"});
        
        fireEvent.click(loginButton);
        const logOutButton=screen.getByRole("button",{name:"log Out"});
        expect(logOutButton).toBeInTheDocument()
    });
    

});