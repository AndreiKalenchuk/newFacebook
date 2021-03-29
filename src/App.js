import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/pages/Profile/Profile";
import {BrowserRouter, Route} from 'react-router-dom';
import Music from "./components/pages/Music/Music";
import News from "./components/pages/News/News";
import Settings from "./components/pages/Settings/Settings";
import DialogsContainer from "./components/pages/Dialogs/DialogsContainer";

function App(props) {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route exact path='/profile' render={() => <Profile store={props.store}/>}/>
                    <Route path='/dialogs' render={() => <DialogsContainer store={props.store}/>}/>
                    <Route exact path='/music' render={() => <Music/>}/>
                    <Route exact path='/news' render={() => <News/>}/>
                    <Route exact path='/settings' render={() => <Settings/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
