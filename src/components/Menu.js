import Header from "./Header";
import DayMenu from "../containers/DayMenu";

import React, { Component } from 'react'

export default class Menu extends Component {
  render() {
    return <div className='row'>
      <Header/>
      <div className='pagewrap'>
         <DayMenu/>
      </div>
    </div>
  }
}
