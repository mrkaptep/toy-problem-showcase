import React, {Component} from 'react';

class FilterString extends Component {
    constructor (){
        super();

        this.state = {
            names: ['James', 'Jessica', 'Ashley', 'Tom', 'Tami', 'Kim', 'Tyler', 'Blake', 'Brittany', 'Maddy'],
            userInput:'',
            filteredNames: []
        };
    }

    handleChange(val) {
        this.setState ({userInput: val});
    }

    filteredNames(userInput) {
        let names = this.state.names;
        let filteredNames = [];

        for( let i = 0; i < names.length; i++){
            if(names[i].includes(userInput) ){
            filteredNames.push(names[i]);
            }
        }
        this.setState({filteredNames: filteredNames});
    }

    render(){

        return (
            <div className='puzzleBox filterStringPB'>
                <h4>Filter String</h4>
                <span className ='puzzleText'>Names:{JSON.stringify(this.state.names, null, 10)}</span>
                <input className ='inputLine'
                onChange={(e) => this.handleChange(e.target.value)}/>
                <button className ='confirmationButton'
                onClick={ () => this.filteredNames(this.state.userInput)}>Filter
                </button>
                <span className ='resultBox filterStringRB'>Filtered Names:{JSON.stringify(this.state.filteredNames, null, 10)}</span>
            </div>
        )

    }
}

export default FilterString;