import React, {Component} from 'react';
import SearchInputWithHelperBox from "../SearchInputWithHelperBox/SearchInputWithHelperBox";
import './main.css';
import SearchDate from "../SearchDate/SearchDate";

class Main extends Component {
    render() {
        return (
            <React.Fragment>
                <main className='main-content'>
                    <SearchInputWithHelperBox label='ОТКУДА' inputType='FROM'
                    />
                    <div className='arrow'>&harr;</div>
                    <SearchInputWithHelperBox label='КУДА' inputType='TO'
                    />
                </main>
                <SearchDate/>
            </React.Fragment>
        );
    }
}

export default Main;