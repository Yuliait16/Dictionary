import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Home from './components/Home';
import Result from './components/Result';
import { store } from './store';

const App = () => {
    return (
        <div className="wraper">
            <div className="container">
                <Provider store={store}>
                    <Router>
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route exact path="/result" component={Result} />
                            <Redirect to="/redirect" />
                        </Switch>
                    </Router>
                </Provider>
            </div>
        </div>
    );
};

export default App;



{/* <Router>
    <div>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/result" component={Result} />
            <Redirect to="/redirect" />
        </Switch>
    </div>
</Router>  */}