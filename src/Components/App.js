import React, {Component} from 'react';
import ReactDebounce from './R094_reactDebounce';
import ReactThrottle from './R095_reactThrottle';
import {Routes, Route} from 'react-router-dom';

// css
import '../css/new.css';

// header
import HeaderAdmin from './Header/Header admin';

// footer
import Footer from './Footer/Footer';

// login
import LoginForm from './LoginForm';

class App extends Component {
    render() {
        return (
                <div className="App">
                    <HeaderAdmin/>
                    <Routes>
                        <Route exact path='/' element={<LoginForm/>}/>
                        <Route exact path='/Debounce' element={<ReactDebounce/>}/>
                        <Route exact path='/Throttle' element={<ReactThrottle/>}/>
                    </Routes>
                    <Footer/>
                </div>
        );
    }
}

export default App;
