import React, { Component } from 'react'
import Moment from 'react-moment';
import Course from '../components/Course'
import 'moment/locale/ru';

export default class DayMenu extends Component {
    render() {
        return <div className='menu'>
          { !this.props.eat ? null : this.props.days.map((day, index) =>
            <div className='menu__day' key={index}>
              <div className='menu__title'>
                <Moment locale='ru' format="dddd, DD MMMM">
                  {day.date}
                </Moment>
              </div>
                <Course dayComment={day.comment}
                        food={day.courses_group}
                        dayIndex={index}
                />
            </div>
          )}
        </div>
    }
}
