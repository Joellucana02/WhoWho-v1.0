import "./index.css";
import FeedPage from "./components/FeedPage";
import LoginPage from "./components/LoginPage";
import MyInfoPage from "./components/MyInfoPage";
import SignupPage from "./components/SignupPage";
import UserInfoPage from "./components/UserInfoPage";
import WelcomePage from "./components/WelcomePage";


function App() {
    return (
        <>
        <WelcomePage/>
        <hr/>
        <SignupPage/>
        <hr/>
        <LoginPage/>
        <hr/>
        <FeedPage/>
        <hr/>
        <MyInfoPage/>
        <hr/>
        <UserInfoPage/>
        <hr/>
        </>
    );
}

export default App;
