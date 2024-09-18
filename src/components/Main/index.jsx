import { Routes, Route, useLocation } from "react-router";
import Home from "../../pages/Home";
import About from "../../pages/About";
import MissionPage from "../../pages/Mission";

const Main = () => {
    const location = useLocation();

    const isHome = location.pathname === "/";
    return (
        <main className={isHome ? "pt-24" : "pt-32"}>
        <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route path="/the-founder" element={<About />}/>
        <Route path="/elevate-your-business" element={<MissionPage />}/>
        </Routes>
        </main>
    )
}

export default Main;