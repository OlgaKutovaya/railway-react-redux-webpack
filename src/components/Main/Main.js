import React, {Component} from 'react';
import SearchInputWithHelperBox from "../SearchInputWithHelperBox/SearchInputWithHelperBox";
import './main.css';

class Main extends Component {
    render() {
        return (
            <main className='main-content'>
                <SearchInputWithHelperBox label='Откуда' inputType='FROM' />
                <SearchInputWithHelperBox label='Куда' inputType='TO'/>
            </main>
        );
    }
}

export default Main;