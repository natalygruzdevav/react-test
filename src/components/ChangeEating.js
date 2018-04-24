import React, { Component } from 'react'

export default class ChangeEating extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange() {
        this.props.changeEat();
    }
    render() {
        return <div className='trigger'>
            <input type='checkbox' name='change' id='change' onChange={this.handleChange} checked={this.props.eat} className='trigger__checkbox'/>
            <label htmlFor='change' className='trigger__label'/>
            <span className='trigger__change trigger__yes'>Ем</span>
            <span className='trigger__change trigger__not'>Не ем</span>
        </div>
    }
}
