import React, { lazy, Suspense } from "react";
import  ReactDOM  from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from './components/About'
import Contact from './components/Contact'
import Error from './components/Error'
import {createBrowserRouter,Outlet,RouterProvider} from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
import useOnlineStatus from "./utils/useOnlineStatus";
import LoginPage from "./components/LoginPage";

const Grocery=lazy(()=>import('./components/Grocery'));


const AppLayout=()=>{

    const onlineStatus=useOnlineStatus();
    return (
        <div id="AppLayout">
            <Header/>
            { onlineStatus?<Outlet/>:<h1 className="font-black text-lg">it seems you are offline,please connect to internet</h1> }

        </div>
    )
}

const appRouter=createBrowserRouter([
    {
        path:'/',
        element:<AppLayout/>,
        children:[
            {
                path:'/',
                element:<Body/>
            },
            {
                path:'/about',
                element:<About/>
            },
            {
                path:'/contact',
                element:<Contact/>
            },
            {
                path:'/loginPage',
                element:<LoginPage/>
            },
            {
                path:'/grocery',
                element:
                    <Suspense fallback={<h1>Loading...</h1>}>

                       <Grocery/>
                    </Suspense>
            },
            {
                path:'/restaurants/:resId',
                element:<RestaurantMenu/>
            }
           

        ],
        errorElement:<Error/>
    }
    
   
])

const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter}/>);



