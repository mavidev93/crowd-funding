
import { JsxElement } from "typescript";
import Navbar from "./Navbar/Navbar";

interface DefaultLayoutPropType{
    children:JS
}

function DefaultLayout({children}){
    return (
        <>
        <header>
        <Navbar/>
        </header>
        <main>

        </main>
        <footer>

        </footer>
        </>
    )
}

export default DefaultLayout