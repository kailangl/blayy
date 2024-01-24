import { Route, Routes } from "react-router-dom";
import InitialPage from "./components/InitialPage";
import AddonPage from "./pages/Addon";
import AddonPackPage from "./pages/AddonPack";
import AboutPage from "./pages/About";
function App() {
    return (
        <main className="overflow-x-hidden">
            <Routes>
                <Route path="/" element={<InitialPage />} />
                <Route path="/addon/:addon" element={<AddonPage />} />
                <Route path="/addonpack/:addon" element={<AddonPackPage />} />
                <Route path="/about-us" element={<AboutPage />} />
            </Routes>
        </main>
    )
}

export default App;
