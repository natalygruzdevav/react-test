import { connect } from 'react-redux';
import DayMenu from '../components/DayMenu';

const mapsStateToProps = (state) => {
    return {...state.daysData}
}

export default connect(mapsStateToProps)(DayMenu)