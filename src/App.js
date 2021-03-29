import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/pages/Profile/Profile";
import Dialogs from "./components/pages/Dialogs/Dialogs";
import {BrowserRouter, Route} from 'react-router-dom';
import Music from "./components/pages/Music/Music";
import News from "./components/pages/News/News";
import Settings from "./components/pages/Settings/Settings";
import Home from "./components/Home/Home";

function App(props) {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                {/*<Home/>*/}
                <div className='app-wrapper-content'>
                    {/*<Route exact path='/' render={() => <Home/>}/>*/}
                    <Route exact path='/profile' render={() => <Profile store={props.store}/>}/>
                    <Route path='/dialogs' render={() => <Dialogs store={props.store}/>}/>
                    <Route exact path='/music' render={() => <Music/>}/>
                    <Route exact path='/news' render={() => <News/>}/>
                    <Route exact path='/settings' render={() => <Settings/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
