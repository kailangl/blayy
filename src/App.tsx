import { Route, Routes } from "react-router-dom";
import InitialPage from "./components/InitialPage";
import AddonPage from "./pages/Addon";

function App() {
    return (
        <Routes>
            <Route path="/" element={<InitialPage/>} />
            <Route path="/:addon" element={<AddonPage/>} />
        </Routes>
    )
}

export default App;