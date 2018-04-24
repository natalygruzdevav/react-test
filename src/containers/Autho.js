import { connect } from 'react-redux';
import Autho from '../components/Autho';
import { LOGIN_FORM } from '../constants/Page';

const mapsStateToProps = (state) => {
    return state
}

const mapsDispatchToProps = (dispatch) => {
    return {
        loginForm: (email, password) => {
            dispatch({
                type: LOGIN_FORM,
                payload: {email: email, password: password}
            })
        },
    }
}

export default connect(mapsStateToProps, mapsDispatchToProps)(Autho)