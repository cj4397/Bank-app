
import Header from "./header"


import { Outlet } from "react-router-dom";

import './styles/main_style.css'

function Main_body() {
    return (
        <>

            <div id="main">

                <Header></Header>
                <hr />
                <Outlet></Outlet>

            </div>


        </>
    )
}

export default Main_body