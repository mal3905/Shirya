import React, {Component} from 'react'
import TokenService from '../services/token-services'


const UserContext = React.createContext({
    user: {},
    error: null,
    exerciseList:() => {},
    setExerciseList:() => {},
    setError: () => {},
    clearError: () => {},
    setUser: () => {},
    processLogin: () => {},
    processLogout: () => {},
    toggleExpanded: () => {}
});

export default UserContext

export class UserProvider extends Component {
    constructor(props) {
        super(props)
        const state = { user: {}, exerciseList: [], error: null };

        const jwtPayload = TokenService.parseAuthToken();

        if(jwtPayload)
            state.user = {
                id: jwtPayload.user_id,
                name: jwtPayload.name,
                username: jwtPayload.sub
            }

            this.state = state
    }

    setError = error => {
        console.log( error )
        this.setState( { error} )

    }

    setExerciseList = exerciseList => {
        exerciseList.map( exerciseList => {
            return {
                ...exerciseList
            }
        });
        this.setState({ exerciseList })
    };

    clearError = () => {
        this.setState({ error: null })
    };

    setUser = user => {
        this.setState( { user })
    }

    processLogin = authToken => {
        TokenService.saveAuthToken(authToken)

        const jwtPayload = TokenService.parseAuthToken();
        this.setUser({
            id: jwtPayload.user_id,
            name: jwtPayload.name,
            username: jwtPayload.sub
        })
    };

    processLogout = () => {
        TokenService.clearAuthToken();
        this.setUser({})
    }

    render() {
        const value = {
            user: this.state.user,
            error: this.state.error,
            exerciseList: this.exerciseList,
            setError: this.setError,
            clearAuthToken: this.clearError,
            setUser: this.setUser,
            processLogin: this.processLogin,
            processLogout: this.processLogout,
        }

        return (
            <UserContext.Provider value = {value}>
                {this.props.children}
            </UserContext.Provider>
        )
    }
}