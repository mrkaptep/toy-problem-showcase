import React, {Component} from 'react';

class FilterObjects extends Component {
    constructor (){
        super();

        this.state = {
            employees: [
                {
                    name: 'Jimmy John',
                    title: 'CEO',
                    age: 44,
                },
                {
                    name: 'Juan Carlos',
                    age: 22,
                    title: 'Actor',
                },
                {
                    name: 'Peter Parker',
                    hairColor: 'brown',
                    age: 18,
                }
            ],
            userInput: '',
            filteredEmployees: [],
        }
    }

    handleChange(val) {
        this.setState({ userInput: val});
    }

    filterEmployees(prop){
        let employees = this.state.employees;
        let filteredEmployees = [];

        for( let i=0; i < employees.length; i++){
            if(employees[i].hasOwnProperty(prop)) {
                filteredEmployees.push(employees[i]);
            }
        }
        this.setState({ filteredEmployees: filteredEmployees});
    }
    render (){

        return (
            <div className='puzzleBox filterObjectPB'>
                <h4>Filter Objects</h4>
                <span className='puzzleText'>Original: {JSON.stringify(this.state.employees, null, 10) }</span>
                <input className='inputLine'
                type='text'
                onChange={(e) => this.handleChange(e.target.value) }/>
                <button className='confirmationButton'
                onClick={ () => this.filterEmployees(this.state.userInput)}> Filter
                </button>
                <span className='resultsBox filterObjectPB'> Filtered: {JSON.stringify(this.state.filteredEmployees, null, 10) }</span>
            </div>
        )

    }
}

export default FilterObjects;