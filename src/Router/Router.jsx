
import Home from '../Component/Home/Home/Home';
import Login from '../Component/Page/Login/Login';
import Signup from '../Component/Page/Signup/Signup';
import Main from '../Main/Main';

import {
    createBrowserRouter,
} from "react-router-dom";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/signup",
                element: <Signup></Signup>
            }
        ]
    },
]);


export default router










