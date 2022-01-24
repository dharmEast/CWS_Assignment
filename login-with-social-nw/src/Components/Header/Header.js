import { useEffect, useState } from "react";

const Header = (props) => {
    let { logoutHandler,userName } = props;
    useEffect(()=>{
        setProfileButtonClicked(false)
    },[userName?.length])
    const [isProfileButtonClicked, setProfileButtonClicked] = useState(false)
    const btnHandler = () => {
        setProfileButtonClicked(!isProfileButtonClicked)
    }
    userName = userName || localStorage.userName;
    console.log(userName);
    return (
        <div>
            <header className="App-header">
                {
                    (userName) && <button className="userName" onClick={btnHandler}>
                        User: {userName || 'Dharm'}
                    </button>
                }
                {
                    (isProfileButtonClicked && userName ) && <button className="Logout" onClick={logoutHandler}>
                        logout
                    </button>
                }
            </header>
        </div>
    )
}

export default Header;