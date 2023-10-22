import { Route, Routes } from "react-router-dom";
import InitialPage from "./components/InitialPage";
import AddonPage from "./pages/Addon";
import AddonPackPage from "./pages/AddonPack";

function App() {
    return (
        <Routes>
            <Route path="/" element={<InitialPage/>} />
            <Route path="/addon/:addon" element={<AddonPage/>} />
            <Route path="/addonpack/:addon" element={<AddonPackPage/>} />
        </Routes>
    )
}

export default App;