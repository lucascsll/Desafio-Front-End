import React from "react";
import {Switch , Route} from "react-router-dom"

import Home from "../pages/Home";
import Members from "../pages/Members";
import MemberDetails from "../pages/MemberDetails";

const Routes: React.FC = () => (
    <Switch >
        <Route exact path="/"  component={Home}/>
        <Route path="/members"  component={Members}/>
        <Route path="/:login"  component={MemberDetails}/>
    </Switch >
)
export default Routes


