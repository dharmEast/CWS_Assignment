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
    return (
        <div>
            <header className="App-header">
                {
                    (!userName) && <button className="userName" onClick={btnHandler}>
                        User: {userName || 'Dharm'}
                    </button>
                }
                {
                    (isProfileButtonClicked && !userName ) && <div className="Logout" onClick={logoutHandler}>
                        logout
                    </div>
                }
            </header>
        </div>
    )
}

export default Header;