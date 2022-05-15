import React from 'react';
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';
import Home from './routes/making_home/home';
import Login from './components/login/login';
const AppRouter=({isLoggedIn,userInfo}) => {

    return(
        <Router>
            <nav>

            </nav>
            <Routes>
                <>{isLoggedIn ? 
                    (
                        <>
                            <Route path="/" element={<Home isLoggedIn={isLoggedIn} userInfo={userInfo}/>}/>
                        </>
                    )
                    :
                    (
                        <Route path="/" element={<Login />}/>
                    )
                }
                </>
            </Routes>
        </Router>
    )
};

export default AppRouter;