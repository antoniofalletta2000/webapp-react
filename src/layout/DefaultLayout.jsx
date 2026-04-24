import { Outlet } from "react-router-dom";
import AppHeader from "../../components/AppHeader";
import AppFooter from "../../components/AppFooter";
import { useGlobalContext } from "../../Context/GlobalContext";
import AppLoader from "../../components/AppLoader";

export default function DefaultLayout(){

    const {isLoading} = useGlobalContext()
    return(
        <>
        <AppHeader></AppHeader>
        <main className="min-vh-100">
            {isLoading && <AppLoader/>}
            <Outlet/>
        </main>
        <AppFooter></AppFooter>
        </>
    )
}