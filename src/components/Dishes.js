import React, { Component } from 'react'

export default class Dishes extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        let dishes = {};
        this.props.courses.forEach((dish, idx) => dishes[`dish_${idx}`] = dish.isDefault);
        this.state = {
            dishes: dishes
        };
    }

    handleChange(event) {
        let dishId = `dish_${event.target.dataset.idDish}`;
        let newState = {...this.state};
        newState.dishes[dishId] = !newState.dishes[dishId];
        this.setState(newState)
    }

    render() {
        return (
            <div className='dish'>
                {this.props.courses.map((dish, idx) =>
                    <div className='course__var' key={idx}>
                        <input type='radio'
                               id={`${this.props.parentGroup}_${idx}`}
                               name={this.props.parentGroup}
                               checked={this.state.dishes[`dish_${idx}`]}
                               className='course__input' onChange={this.handleChange}
                               data-id-dish={idx}
                        />
                        <label htmlFor={`${this.props.parentGroup}_${idx}`} className='course__label'>{dish.name}</label>
                    </div>
                )}
            </div>
        )
    }
}
