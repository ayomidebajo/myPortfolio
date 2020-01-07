import React, { Component } from 'react'
import Navbar from '../navbar/Navbar'
import About from '../dashboard/About';
// import Portfolio from './Portfolio';

class Dashboard extends Component {
    render() {
        return (
            <div className="dashboard">
                <Navbar />
                <About />
                {/* <Portfolio /> */}

            </div>
        )
    }
}

export default Dashboard
