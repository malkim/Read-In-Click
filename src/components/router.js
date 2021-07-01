import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
//import NewUser from './newUser';
import HomePage from './login/homePage';
import Mishkal from './mishkal/mishkal';
import OneSyllable from './mishkal/onesyllable/oneSyllable';
import TwoSyllable from './mishkal/twoSyllable/twoSyllable';
import Consonant from './mishkal/consonant/consonant';
import SameVowel from './mishkal/twoSyllable/sameVowel';
import DifferentVowel from './mishkal/twoSyllable/differentVowel';
import Choose from './choose'
import SignUp from './login/signUp';
import SignIn from './login/signIn';


function Routing() {
    return (
        <div>
            <Router>
                <Switch>      
                    <Route path="/SameVowel">
                        <SameVowel />
                    </Route>
                    <Route path="/DifferentVowel">
                        <DifferentVowel />
                    </Route>
                    <Route path="/SameVowel">
                        <SameVowel />
                    </Route>
                    <Route path="/Consonant">
                        <Consonant />
                    </Route>
                    <Route path="/TwoSyllable">
                        <TwoSyllable />
                    </Route>
                    <Route path="/OneSyllable">
                        <OneSyllable />
                    </Route>
                    <Route path="/mishkal">
                        <Mishkal />
                    </Route>
                    <Route path="/choose">
                        <Choose />
                    </Route>
                    <Route path="/signIn">
                        <SignIn />
                    </Route>
                    <Route path="/signUp">
                        <SignUp />
                    </Route>
                    <Route path="/">
                        <HomePage />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}
export default Routing;