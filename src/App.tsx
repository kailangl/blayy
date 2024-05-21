import { Route, Routes } from "react-router-dom";
import InitialPage from "./components/InitialPage";
import AboutPage from "./pages/About";
import AddonPage from "./pages/Addon";
import AddonPackPage from "./pages/AddonPack";
import LoginPage from "./pages/Login";
import UserPage from "./pages/User";
function App() {
    return (
        <main className="overflow-x-hidden">
            <Routes>
                <Route path="/" element={<InitialPage />} />
                <Route path="/addon/:addon" element={<AddonPage />} />
                <Route path="/addonpack/:addon" element={<AddonPackPage />} />
                <Route path="/users/:user1" element={<UserPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/login" element={<LoginPage />} />
                
            </Routes>
        </main>
    )
}

export default App;
