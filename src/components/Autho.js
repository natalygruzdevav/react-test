import React, { Component } from 'react'
import Logo from '../img/obederLogoImg.svg'
import Name from '../img/obederLogoName.svg'

export default class Autho extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.props.loginForm(this.emailInput.value, this.passwordInput.value)
    }
    render() {
        return <div className='autho'>
            <a href='./' className='autho__logo'>
                <div className='autho__logo-img'>
                    <img src={Logo} alt='logo' className=''/>
                </div>
                <div className='autho__logo-name'>
                    <img src={Name} alt='logo' className=''/>
                </div>
            </a>
            <div className='autho__form'>
                <input className='autho__field' type='text' ref={(elem) => this.emailInput = elem} placeholder='Электропочта'/>
                <input className='autho__field' type='password' ref={(elem) => this.passwordInput = elem} placeholder='Кодовое слово'/>
                <input className='autho__submit' type='submit' value='Обедать!' onClick={this.handleClick}/>
                <div className='autho__text'>Крайне мелкий текст поясняющий магические особенности входа или регистрации</div>
            </div>
        </div>

    }
}