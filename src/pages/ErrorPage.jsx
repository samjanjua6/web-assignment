import { NavLink, useRouteError } from "react-router-dom";

function ErrorPage(){

    const error = useRouteError();

    return(
        <div className="ErrorPage">
       <h2>This Page is not Available</h2>
        <p>{error.data}</p>
        <NavLink to={'/'}>Home</NavLink>

        </div>
 
        
    )
}

export default ErrorPage;