
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import AddTodo from './Pages/add';
import View from './Pages/view';
export const history = createHistory();
//console.log('Router', history);


const Routes = () => (
    <Router history={history}>
        <div>
            <Route exact path="/" component={AddTodo} />
            <Route path="/View" component={View} />
       
        </div>
    </Router>
);
export default Routes;

