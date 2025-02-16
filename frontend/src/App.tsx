import {Router} from "./components/pages/Router";

function App() {
    console.log("REACT_APP_SOS_API_URL:", process.env.REACT_APP_SOS_API_URL);
    return <Router/>
}

export default App;
