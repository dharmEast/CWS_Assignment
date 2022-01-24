import { useEffect, useState } from "react";

const Header = (props) => {
    let { logoutHandler, userName } = props;
    useEffect(() => {
        setProfileButtonClicked(false)
    }, [userName?.length])
    const [isProfileButtonClicked, setProfileButtonClicked] = useState(false)
    const btnHandler = () => {
        setProfileButtonClicked(!isProfileButtonClicked)
    }
    userName = userName || localStorage.userName;
    return (
        <div>
            <header className="App-header">
                {
                    (userName) && <div className="userName" onClick={btnHandler}>
                        User: {userName || 'Dharm.east'}

                        {
                            (isProfileButtonClicked) && <div className="Logout" onClick={logoutHandler}>
                                logout
                            </div>
                        }
                    </div>
                }
            </header>
        </div>
    )
}

export default Header;