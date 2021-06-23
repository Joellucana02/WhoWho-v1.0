import "./index.css";
import FeedPage from "./components/FeedPage";
import LoginPage from "./components/LoginPage";
import MyInfoPage from "./components/MyInfoPage";
import SignupPage from "./components/SignupPage";
import UserInfoPage from "./components/UserInfoPage";
import WelcomePage from "./components/WelcomePage";
// import { router } from "json-server";


function App() {
    // extraer datos de la db
    
    const user = {
        id: "23",
        img: "https://randomuser.me/api/portraits/men/83.jpg",
        name: "John Smith",
        conections: "74",
        folowers: "9134",
        following: "67"
    }
    const mPag = new Boolean(true)
    return (
        <>
            {/* <WelcomePage/>
            <hr/>
            <SignupPage/>
            <hr/>
            <LoginPage/>
            <hr/>
            <FeedPage/>
            <hr/>
            <MyInfoPage/>
            <hr/> */}
            <UserInfoPage user={user} myPage={mPag}/>
            {/* <hr/> */}
        </>
    );
}

export default App;
