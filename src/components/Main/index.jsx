import { Routes, Route } from "react-router";
import Home from "../../pages/Home";
import About from "../../pages/About";
import MissionPage from "../../pages/Mission";

const Main = () => {
    return (
        <>
        <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/founder" element={<About />}/>
        <Route path="/elevating-business" element={<MissionPage />}/>
        </Routes>
        </>
    )
}

export default Main;