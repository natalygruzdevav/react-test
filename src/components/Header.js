import React, { Component } from 'react'
import ChangeEating from '../containers/ChangeEating'
import Logo from '../img/obederLogo.svg'

export default class Header extends Component {

    render() {
        return <header className='header'>
            <a className='header__logo' href={'./'}>
                <img src={Logo} alt='logo' className='header__logo-img'/>
                <div className='header__logo-text'>obeder</div>
            </a>
            <ChangeEating/>
        </header>
    }
}
