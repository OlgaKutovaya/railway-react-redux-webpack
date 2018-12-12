import React, {Component} from 'react';
import {connect} from 'react-redux';
import {chooseDepartureDate, getRailwayPathsList} from '../../actionCreators/searchActions';
import './search-date.css'
import AvailableTrainsList from "../AvailableTrainsList/AvailableTrainsList";

class SearchDate extends Component {

    state = {
        departureDate: ''
    };

    handleChange = (event) => {
        this.setState({departureDate: event.target.value}, () => {
            this.props.chooseDepartureDate(this.state.departureDate);
        });
    };

    btnSubmitHandler = (event) => {
        this.props.getRailwayPathsList();
    };

    render() {
        console.log(this.props.pathsList);
        return (
            <div className='date-wrapper'>
                <label>
                    <p>Дата</p>
                    <input type="date"
                           value={this.state.departureDate}
                           onChange={(event => {
                               this.handleChange(event)
                           })}/>
                </label>
                <input type="submit"
                       value='найти билеты'
                       className='btn-submit'
                       onClick={(event) => {
                           this.btnSubmitHandler(event)
                       }}
                />
                <AvailableTrainsList/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return ({
        pathsList: state.railwayData.railwayPathList
    })
};

export default connect(mapStateToProps, {chooseDepartureDate, getRailwayPathsList})(SearchDate);