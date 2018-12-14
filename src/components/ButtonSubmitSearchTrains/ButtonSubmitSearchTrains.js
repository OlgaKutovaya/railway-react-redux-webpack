import React, {Component} from 'react';
import {getRailwayPathsList} from '../../modules/buttonSubmitSearchTrains/actions';
import {connect} from "react-redux";
import './btn-submit-search-trains.css';

class ButtonSubmitSearchTrains extends Component {
    btnSubmitHandler = (event) => {
        if (!this.props.destinationFrom.title || !this.props.destinationTo.title) {
            alert('Выберите город');
        } else if (this.props.destinationFrom.title === this.props.destinationTo.title) {
            alert('Указано неверное направление');
        } else if (!this.props.departureDate) {
            alert('Выберите дату');
        } else {
            this.props.getRailwayPathsList();
        }
    };

    render() {
        return (
            <input type="submit"
                   value='найти билеты'
                   className='btn-submit'
                   onClick={(event) => {
                       this.btnSubmitHandler(event)
                   }}
            />
        );
    }
}

const mapStateToProps = (state) => {
    return ({
        pathsList: state.railwayPathListData.railwayPathList,
        destinationFrom: state.railwayData.destinationFrom,
        destinationTo: state.railwayData.destinationTo,
        departureDate: state.departureTimeData.departureDate
    })
};

export default connect(mapStateToProps, {getRailwayPathsList})(ButtonSubmitSearchTrains);