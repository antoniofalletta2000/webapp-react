import { Outlet } from "react-router-dom";
import AppHeader from "../../components/AppHeader";
import AppFooter from "../../components/AppFooter";

export default function DefaultLayout(){
    return(
        <>
        <AppHeader></AppHeader>
        <main>
            <Outlet/>
        </main>
        <AppFooter></AppFooter>
        </>
    )
}