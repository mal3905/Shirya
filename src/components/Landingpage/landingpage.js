import React, { Component } from 'react'
import Navbar from '../Navbar/Navbar';
import './Landingpage.css';


export class landingpage extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <main className= 'landingpage'>
                <Navbar/>
                <main className='body'>
                <h1>
                BOHDI
                </h1>
                <h2>
                Hello from Landing page, a place to stay connected, orgqanized, and informed.
                </h2>
                <h3>
                    Information of what the App does 
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <i class="fas fa-swimmer"></i>
                </h3>
                </main>
                <img
					className="healthimg"
					src={require('../../assets/health.png')}
					alt={'Health'}
					width={'60px'}
				/>
            </main>
        )
    }
}

export default landingpage
