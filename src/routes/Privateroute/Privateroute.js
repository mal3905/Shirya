import React, { Component } from 'react'
import  {Route, Redirect} from 'react-router-dom'
import UserContext from '../../contexts/UserContext'
import ExerciseContext from '../../contexts/ExerciseContext'


export default function Privateroute ({component, ...props }) {
    const Component = component
   
        return (
            <Route
            {...props}
            render={componentProps => (
                <UserContext.Consumer>

                        {userContext =>
                            !!userContext.user.id
                                ?  <ExerciseContext.Consumer>{() => <Component {...componentProps} location={componentProps.location}/>}</ExerciseContext.Consumer>
                                : (
                                    <Redirect
                                        to={{
                                            pathname: '/',
                                            state: {from: componentProps.location},
                                        }}
                                    />
                                )
                        }

                </UserContext.Consumer>
            )}
        />
        )
}

