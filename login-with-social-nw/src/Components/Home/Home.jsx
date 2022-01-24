import React from 'react';
import { signInWithGoogle, signInWithFb } from "../../Auth";

const Home = (props) => {
    let { userName,loginHandler,name,myEmail,imgSrc } = props
    userName = userName ? userName : localStorage.userName;
    name = name || localStorage.name;
    myEmail = myEmail || localStorage.userEmail;
    imgSrc = imgSrc || localStorage.imgSrc;

    const googleLoginHandler = ()=>{
        loginHandler(signInWithGoogle);
    };
    const faceBookLoginHandler = ()=>{
        loginHandler(signInWithFb)
    }
    return (
        <>
            {!userName && <div className="LoginButtonsClass">
                <div className='login-google-button'>
                    <button onClick={googleLoginHandler} className="login-with-google-btn" >
                        Sign In Wtih Google
                    </button>
                </div>
                <div className='login-fb-button' onClick={faceBookLoginHandler} >
                    <div className="login-facebook-icon">f</div>
                    <div className="login-facebook-text">Login with Facebook</div>
                </div>
            </div>
            }
            {userName && <div className="userInfo">
                <h1>User Information</h1>
                <div>
                    name: {name}
                </div>
                <div>
                    email: {myEmail}
                </div>
                <div>
                    <img src={imgSrc} />
                </div>
            </div>
            }
        </>
    )
}

export default Home;