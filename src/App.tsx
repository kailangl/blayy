import { Route, Routes } from "react-router-dom";
import InitialPage from "./components/InitialPage";
import AboutPage from "./pages/About";
import AddonPage from "./pages/Addon";
import WikiPage from "./pages/Wiki";
import AddonPackPage from "./pages/AddonPack";
function App() {
    return (
        <main className="overflow-x-hidden">
            <Routes>
                <Route path="/" element={<InitialPage />} />
                <Route path="/addon/:addon" element={<AddonPage />} />
                <Route path="/addonpack/:addon" element={<AddonPackPage />} />
                <Route path="/wiki/:wiki1" element={<WikiPage />} />
                <Route path="/about" element={<AboutPage />} />
                
            </Routes>
        </main>
    )
}

export default App;
