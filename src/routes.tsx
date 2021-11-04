import * as React from 'react';
import {Route, Switch} from 'react-router-dom'
import Detalhes from './components/Detalhes';

import Home from './components/Home';
import Lista from './components/Lista';

function Routes(){
    return(
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/lista" exact component={Lista}  />
            <Route path="/Detalhes/:id" exact component={Detalhes}/>
        </Switch>
    )
}

export default Routes