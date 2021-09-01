import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter, Route} from 'react-router-dom';
import News from "./components/pages/News/News";
import Settings from "./components/pages/Settings/Settings";
import DialogsContainer from "./components/pages/Dialogs/DialogsContainer";
import UsersContainer from "./components/users/UsersContainer";
import ProfileContainer from "./components/pages/Profile/ProfileContainer";
import UsContainer from "./components/users/UsContainer";
import HeaderContainer from "./components/Header/HeaderContainer";

import DropDown from "./components/pages/DropDown";

function App() {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route exact path='/profile/:userId?/' render={() => <ProfileContainer/>}/>
                    <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                    <Route path='/users' render={() => <UsersContainer/>}/>
                    <Route exact path='/us' render={() => <UsContainer/>}/>
                    <Route exact path='/news' render={() => <News/>}/>
                    <Route exact path='/settings' render={() => <Settings/>}/>
                    <Route exact path='/dropdown/:any?/' render={() => <DropDown/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
