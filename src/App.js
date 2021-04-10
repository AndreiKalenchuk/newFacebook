import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/pages/Profile/Profile";
import {BrowserRouter, Route} from 'react-router-dom';
import News from "./components/pages/News/News";
import Settings from "./components/pages/Settings/Settings";
import DialogsContainer from "./components/pages/Dialogs/DialogsContainer";
import UsersContainer from "./components/users/UsersContainer";

function App() {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route exact path='/profile' render={() => <Profile/>}/>
                    <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                    <Route exact path='/users' render={() => <UsersContainer/>}/>
                    <Route exact path='/news' render={() => <News/>}/>
                    <Route exact path='/settings' render={() => <Settings/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
