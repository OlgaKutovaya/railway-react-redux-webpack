import React, {Component} from 'react';
import {getRailwayPathsList} from '../../actionCreators/searchActions';
import connect from "react-redux/es/connect/connect";
import './btn-submit-search-trains.css';

class ButtonSubmitSearchTrains extends Component {
    btnSubmitHandler = (event) => {
        if (!this.props.destinationFrom.title || !this.props.destinationTo.title) {
            alert('Выберите город');
        } else if (this.props.destinationFrom.title === this.props.destinationTo.title) {
            alert('Указано неверное направление');
            this.props.destinationFrom.title = '';
            this.props.destinationTo.title = '';
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
        pathsList: state.railwayData.railwayPathList,
        destinationFrom: state.railwayData.destinationFrom,
        destinationTo: state.railwayData.destinationTo,
        departureDate: state.railwayData.departureDate
    })
};

export default connect(mapStateToProps, {getRailwayPathsList})(ButtonSubmitSearchTrains);