import React, {Component} from 'react';
import {connect} from 'react-redux';
import {chooseDepartureDate, getRailwayPathsList, chooseDepartureTime} from '../../actionCreators/searchActions';
import './search-date.css'
import AvailableTrainsList from "../AvailableTrainsList/AvailableTrainsList";
import ButtonSubmitSearchTrains from "../ButtonSubmitSearchTrains/ButtonSubmitSearchTrains";

class SearchDate extends Component {

    state = {
        departureDate: ''
    };

    handleChange = (event) => {
        this.setState({departureDate: event.target.value}, () => {
            this.props.chooseDepartureDate(this.state.departureDate);
        });
    };

    handleChangeTime = (event) => {
        this.setState({departureTime: event.target.value}, () => {
            this.props.chooseDepartureTime(this.state.departureTime)
        });
    };

    render() {
        const renderTimeOptions = () => {
            const section = [];
            for (let i = 0; i < 24; i++) {
                let temp = i;
                if (String(temp).length === 1) {
                    temp = '0' + String(i);
                }
                section.push(
                    <option key={temp} value={`${temp}:00`}>{`${temp}:00`}</option>
                )
            }
            return section;
        };

        return (
            <div className='date-wrapper'>
                <div className='date-time-wrapper'>
                    <label>
                        <p>Дата</p>
                        <input type="date"
                               value={this.state.departureDate}
                               onChange={(event => {
                                   this.handleChange(event)
                               })}
                        />
                    </label>
                    <label>
                        <p>Время отравления с</p>
                        <select className="select-time"
                                value={this.state.departureTime}
                                onChange={(event) => {
                                    this.handleChangeTime(event)
                                }}
                        >
                            {renderTimeOptions()}
                        </select>
                    </label>
                </div>
                <ButtonSubmitSearchTrains/>
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

export default connect(mapStateToProps,
    {
        chooseDepartureDate,
        getRailwayPathsList,
        chooseDepartureTime
    })(SearchDate);