import React, { Component } from 'react'
import Navbar from '../Navbar/Navbar'

export class landingpage extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div>
                <Navbar/>
                Hello from Landing page, a place to stay connected, orgqanized, and informed.

            </div>
        )
    }
}

export default landingpage
