import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Layout from './Component/Layout/Layout.jsx'

import Services from "./pages/Services.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import ErrorPage from "./pages/ErrorPage.jsx"
import Orders from "./pages/Orders.jsx";

const router = createBrowserRouter([
  {path:'/',element:<Layout/>
    ,children:[
      { path: "/", element: <Home/> }, 
      {path: "/about", element: <About/>},
    {path: "/contact", element: <Contact/>},
    {path: "/services", element: <Services/>},
    {path: "/orders", element: <Orders/>}
    ],
    errorElement:<ErrorPage/>
  }


]);
function App() {

  return (
    <RouterProvider router={router}/>
  );
}

export default App
