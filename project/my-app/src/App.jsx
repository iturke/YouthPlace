import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingScreen from "./screens/LandingScreen";
import LogInScreen from "./screens/LogInScreen";
import SearchingScreen from "./screens/SearchingScreen";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingScreen />} />
                <Route path="/login" element={<LogInScreen />} />
                <Route path="/search" element={<SearchingScreen />}/>
            </Routes>
        </Router>
    );
}

export default App;

