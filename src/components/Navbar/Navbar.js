import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import UserContext from '../../contexts/UserContext'
import './Navbar.css'

export class Navbar extends Component {

    static contextType = UserContext

    handleLogoutClick = () => {
        this.context.processLogout()
    }

    render() {
        const links = [ 
        { to: '/home', name:'Home'},
        { to: '/fitness', name: 'Fitness'}, 
        { to: '/journal', name: 'Daily Journal '}, 
        { to: './tasks', name: 'My Tasks'}, 
        { to: '/prisonschedules', name: 'Prison Schedule'}, 
        {to: '/announcements', name: 'Announcments' }, 
        {to: './', name: ''}, 
        {to: './', name: ''}, 
        {to: './', name: ''}, 
        {to: './', name: ''}
        ]
 

        return (
            <nav className= {'navbar-component'}>     
             <div className='Header__logged-in'>
                <Link
                onClick={this.handleLogoutClick}
                to='/'>
                Logout
                </Link>

                <Link to={ '/Home'}>
                Home
                </Link>

                <Link to={ '/Dashboard'}>
                Dashboard
                </Link>


            </div>
                
            </nav>
        )
    }
}

export default Navbar
