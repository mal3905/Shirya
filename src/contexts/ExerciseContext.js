import React, { Component } from 'react'

const ExerciseContext = React.createContext({
    Exercisename: '',
    date: '',
    Equipmentname: '',
    Bodypart: '',
    rating:0,
    notes: '',
    setExercisename: () => {},
    setEquipmentname: ()=> {},
    setBodypart: () => {},
    setRating: () => {},
    setnotes: () => {}
}); 

export default ExerciseContext

export class ExerciseProvider extends Component {

    constructor(props) {
        super(props) 
            this.state = {
                Exercisename: '',
                date: new Date(),
                Equipmentname: '',
                Bodypart: '',
                rating: 0,
                notes: ''
            }
        }
        setDate = date_created => {this.setState({date_created})};
        setExercisename = name => {this.setState({ name })};
        setEquipmentname = equipmentname => {this.setState({equipmentname})};
        setBodypart = bodypart => {this.setState({bodypart})};
        setRating = rating => {this.setState({ rating})};
        setnotes = notes => {this.setState({notes})}

        resetAll = () => {
            this.setState = ({
                Exercisename: '',
                date: new Date(),
                Equipmentname: '',
                Bodypart: '',
                rating: 0,
                notes: ''
            })
        };

        checkValues() {
            let checks = [this.state.Exercisename, this.state.date_created,
            this.state.Equipmentname, this.state.bodypart, this.state.notes]
            if(checks.filter(x => x.trim().length === 0).length!== 0)  {
                return { bool: true};
            }
            return {bool: false, error: `${checks.filter(x => x.trim().length === 0).toString()} are empty, try again.`};

        }

        render() {
            let value = {
                Exercisename: this.state.Exercisename,
                date_created: this.state.date_created,
                equipmentname: this.state.equipmentname,
                bodypart: this.state.bodypart,
                rating: this.state.rating,
                notes: this.state.notes 
            };

            return (
                <ExerciseContext.Provider value = {value}>
                    {this.props.children}
                </ExerciseContext.Provider>
            )

    }
}