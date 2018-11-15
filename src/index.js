import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route} from 'react-router-dom';

// COMPPONENTS
import Home from './components/home';
import Artist from './components/artists';


const App = () => {
    return(
        <BrowserRouter>
        <div>
            <Route path="/artist/:artistid" component={Artist}></Route>
            <Route exact path="/" component={Home}></Route>
        </div>
        </BrowserRouter>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'));