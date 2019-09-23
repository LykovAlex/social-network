import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import Profile from './components/profile/Profile';
import Messages from './components/messages/Messages';
import News from './components/news/News';
import Music from './components/music/Music';
import Settings from './components/settings/Settings';
import {BrowserRouter, Route} from 'react-router-dom'

const App = (props) => {

  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <div className='contentWrapper'>
          <Sidebar state={props.state.sidebar} />
          <main className="main">
            <Route path='/profile' render={ () => <Profile state={props.state.profilePages} dispatch={props.dispatch}/> } />
            {/*<Route path='/messages' render={ () => <Messages state={props.state.messagesPages} dispatch={props.dispatch}/> }></Route>*/}
            {/* фишка exact в том, что он находит строгое совпадение и отрисует компонент только если урл строго соотвествует
              тоесть например если урл будет /messages/1 он уже в данном случае не отрисует компонент message */}
            <Route exact path='/messages' render={ () => <Messages state={props.state.messagesPages} dispatch={props.dispatch}/> } />
            <Route path='/news' render={ () => <News /> } />
            <Route path='/music' render={ () => <Music /> } />
            <Route path='/settings' render={ () => <Settings/> } />
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
}


export default App;
