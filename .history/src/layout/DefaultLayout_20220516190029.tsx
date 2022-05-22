
import { JsxElement } from "typescript";
import Navbar from "./Navbar/Navbar";

interface DefaultLayoutPropType{
    children:React
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