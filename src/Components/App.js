import React, {Component} from 'react';
import FloatingPopulationList from './Floating_population/floatingPopulationList';
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
                        <Route exact path='/floatingPopulationList' element={<FloatingPopulationList/>}/>
                    </Routes>
                    <Footer/>
                </div>
        );
    }
}

export default App;
