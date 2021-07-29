import { Route } from 'react-router-dom';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Friends from './components/Friends/Friends';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import Settings from './components/Settings/Settings';


const App = (props) => {
  return (
    <div className='app-wrapper'>
      <Header />
      <Nav />

      <div className="app-wrapper-content">
        <Route path="/dialogs"
          render={() => <Dialogs 
          state={props.state.dialogsPage} />} />
        <Route path="/profile"
          render={() => <Profile
            profilePage={props.state.profilePage}
            addPost={props.addPost}
            updateNewPostText={props.updateNewPostText} />} />


            
        <Route path="/friends"
          render={() => <Friends />} />
        <Route path="/settings"
          render={() => <Settings />} />
      </div>

    </div>
  );
}





export default App;
