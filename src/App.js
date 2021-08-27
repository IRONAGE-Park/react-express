import React, { useEffect } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';

import { Main } from './pages';

import DialogContainer from './containers/assets/DialogContainer';

import { Paths } from './paths';

//portals
import DialogPortals from './DialogPortals';

import './App.scss';

const App = () => {
  const history = useHistory();
  useEffect(() => {
    // 같은 위치로 이동 발생하면 중복 제거.
    let currentLocation = null;
    history.block((location, action) => {
      const nextLocation = location.pathname + location.search;
      if (action === 'PUSH') {
        if (currentLocation === nextLocation) {
          return false;
        }
      }
      currentLocation = nextLocation;
    });

    const jssStyles = document.getElementById('jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  });

  return (
    <div className="App">
      <Switch>
        <Route path={Paths.index} component={Main} exact />
      </Switch>
      <DialogPortals children={<DialogContainer />} tagId="dialog" />
    </div>
  );
};

export default App;
