import React, { Component } from 'react'
import Dishes from './Dishes'

export default class Course extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {comment: this.props.dayComment}
    }
    handleClick() {
        this.forceUpdate();
    }
    handleChange(event) {
        this.setState({comment: event.target.value});
    }
    render() {
        return (
            <div className='course'>
                {this.props.food.map((courses_group, index) =>

                    <div className={'course__item ' + (courses_group.disabled ? 'disabled' : '')} key={index}>
                        <div className='course__name'>{courses_group.name}</div>
                        <Dishes courses={courses_group.courses}
                                parentGroup={`dish${this.props.dayIndex}_${index}`}
                                coursesGroup={index}
                        />
                    </div>
                )}
                <div className='course__item course__item--form'>
                    <textarea className='course__textarea' value={this.state.comment} onChange={this.handleChange}/>
                    <input type='button' name='default' id='default' value='Сбросить в дефолт!' onClick={this.handleClick} className='course__btn'/>
                </div>
            </div>
        )
    }
}
