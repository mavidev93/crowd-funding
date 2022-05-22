
import { JsxElement } from "typescript";
import Navbar from "./Navbar/Navbar";

function DefaultLayout({childeren}:JsxElement){
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