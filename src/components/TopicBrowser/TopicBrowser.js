import React, { Component } from 'react';
import EvenAndOdds from '../Topics/EvenAndOdd';
import FilterObjects from '../Topics/FilterObject';
import FilterString from '../Topics/FilterString';
import Palindrome from '../Topics/Palindrome';
import Sum from '../Topics/Sum';

class TopicBrowser extends Component {

    render(){

        return (
            <div>
                <EvenAndOdds/>
                <FilterObjects/>
                <FilterString/>
                <Palindrome/>
                <Sum/>
            </div>
        )


    }
}



export default TopicBrowser;