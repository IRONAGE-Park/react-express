import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Main } from './pages';
import DialogContainer from './containers/assets/DialogContainer';

import { Paths } from './paths';
import './App.scss';

const App = () => {
    return (
        <div className="App">
            <Switch>
                <Route path={Paths.index} component={Main} exact />
            </Switch>
            <DialogContainer />
        </div>
    );
};

export default App;
