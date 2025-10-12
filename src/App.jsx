import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Layout from './Component/Layout/Layout.jsx'

import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import ErrorPage from "./pages/ErrorPage.jsx"

const router = createBrowserRouter([
  {path:'/',element:<Layout/>
    ,children:[
      { path: "/", element: <Home/> }, 
      {path: "/about", element: <About/>},
    {path: "/contact", element: <Contact/>}
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
