import React from "react";
import {Switch,Route} from "react-router-dom";

import Employees from "./Employees";
import Details from "./Details";

export default(
    <Switch>
        <Route
            exact
            path="/"
            component={Employees}
        />
        <Route
            path="/details/:id"
            component={Details}
        />
    </Switch>
)