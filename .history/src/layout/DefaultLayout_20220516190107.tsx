
import { ReactNode } from "react";
import { JsxElement } from "typescript";
import Navbar from "./Navbar/Navbar";


function DefaultLayout({children}:ReactNode){
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