import { useState } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom'
import { useIdleTimer } from 'react-idle-timer';
import './App.css';
import { signInWithGoogle, signInWithFb, signOutUser } from "./Auth";
import Header from "./Components/Header/Header.container";
import Home from "./Components/Home/Home.container";
import TableComponent from "./Components/TableComponent/TableComponent.container";
import JsonComponent from "./Components/JsonComponent/JsonComponent.container";
function App(props) {
  const { storeUserDetails, logOut } = props;
  const [isModelOpen, setModelOpen] = useState(false);
  const timeOut = 60000;
  const history = useHistory();
  const handleOnIdle = event => {
    console.log('user is idle', event)
    if (localStorage.userName) {
      setModelOpen(true);
      console.log('last active', getLastActiveTime());
      setTimeout(() => {
        const modalDom = document.getElementById('myModal');
        if (modalDom?.childElementCount) {
          setModelOpen(false);
          logoutHandler();
          history.push('/');
        }
      }, timeOut)
    }
  }


  const { getLastActiveTime } = useIdleTimer({
    timeout: timeOut,
    onIdle: handleOnIdle,
    debounce: 500
  })

  const loginHandler = (provider) => {
    provider().then((result) => {
      const userInfo = result?.user;
      const { displayName, email } = userInfo;
      const profileFoto = userInfo?.auth?.currentUser?.photoURL
      const userName = email.substring(0, email.indexOf('@'));
      storeUserDetails({
        displayName, userEmail: email, imgSrc: profileFoto, userName
      })
      localStorage.name = displayName;
      localStorage.userEmail = email;
      localStorage.imgSrc = profileFoto;
      localStorage.userName = userName;
      console.log(userInfo);
      console.log(displayName, profileFoto);
    })
      .catch(err => {
        console.log(err);
      })
  }

  const logoutHandler = () => {
    signOutUser().then((res) => {
      console.log('logged out succesfully ', res);
      localStorage.clear();
      logOut();
      history.push('/');
    })
      .catch(err => {
        console.log(err)
      })
  }
  const closeModal = () => {
    setModelOpen(false);
  }
  const homeProps = {
    loginHandler
  }
  return (
    <div className="App">
      <Header logoutHandler={logoutHandler} />
      <Switch>
        <Route path="/" exact >
          <Home {...homeProps} />
        </Route>
        <Route path="/table" component={TableComponent} />
        <Route path="/jsonValue" component={JsonComponent} />
      </Switch>
      {isModelOpen && localStorage.userName && <div id="myModal" className="modal">
        <div className="modal-content">
          <span class="close" onClick={closeModal}>&times;</span>
          <p>Do want to continue?</p>
          <button onClick={closeModal}>Continue</button>
        </div>
      </div>
      }
    </div>
  );
}

export default App;
