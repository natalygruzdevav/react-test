import { connect } from 'react-redux';
import ChangeEating from '../components/ChangeEating';
import { CHANGE_EAT } from '../constants/Page';

const mapsStateToProps = (state) => {
    return {...state.daysData}
}

const mapsDispatchToProps = (dispatch) => {
    return {
        changeEat: () => {
            dispatch({
                type: CHANGE_EAT
            })
        },
    }
}

export default connect(mapsStateToProps, mapsDispatchToProps)(ChangeEating)