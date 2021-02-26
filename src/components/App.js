import React from 'react';
import {  Router, Route, Switch } from 'react-router-dom';
 import PageNotFound from './common/PageNotFound';
 import HomePage from './HomePage'
import PostListContainer from './About';
import HeaderNavContainer from './template/HeaderNavContainer'; 
import PostCollection from './post/PostCollection'
import history from './history'



const App = () => {
    return (
        <div >
            <Router history={history}>
                <div>

                    <HeaderNavContainer />

                    <Switch>
                        <Route exact path="/" component={HomePage} />
                        <Route path="/About" component={PostListContainer} />
                        <Route path="/postCollection" component={ () => <PostCollection/>} />
                        <Route component={PageNotFound} />
                    </Switch>

                </div>

            </Router>
        </div>
    );
};


export default App;