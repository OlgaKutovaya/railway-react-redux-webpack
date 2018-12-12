import React, {Component} from 'react';
import {connect} from 'react-redux';
import {chooseDepartureDate, getRailwayPathsList, chooseDepartureTime} from '../../actionCreators/searchActions';
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

    handleChangeTime = (event) => {
        this.setState({departureTime: event.target.value}, () => {
            console.log(this.state.departureTime);
            this.props.chooseDepartureTime(this.state.departureTime)
        });
    };

    btnSubmitHandler = (event) => {
        this.props.getRailwayPathsList();
    };

    render() {
        console.log(this.props.pathsList);
        return (
            <div className='date-wrapper'>
                <div className='date-time-wrapper'>
                    <label>
                        <p>Дата</p>
                        <input type="date"
                               value={this.state.departureDate}
                               onChange={(event => {
                                   this.handleChange(event)
                               })}/>
                    </label>
                    <label>
                        <p>Время отправления с</p>
                        <select className="select-time"
                                value={this.state.departureTime}
                                onChange={(event) => {
                                    this.handleChangeTime(event)
                                }}>
                            <option value="00:00">00:00</option>
                            <option value="01:00">01:00</option>
                            <option value="02:00">02:00</option>
                            <option value="03:00">03:00</option>
                            <option value="04:00">04:00</option>
                            <option value="05:00">05:00</option>
                            <option value="06:00">06:00</option>
                            <option value="07:00">07:00</option>
                            <option value="08:00">08:00</option>
                            <option value="09:00">09:00</option>
                            <option value="10:00">10:00</option>
                            <option value="11:00">11:00</option>
                            <option value="12:00">12:00</option>
                            <option value="13:00">13:00</option>
                            <option value="14:00">14:00</option>
                            <option value="15:00">15:00</option>
                            <option value="16:00">16:00</option>
                            <option value="17:00">17:00</option>
                            <option value="18:00">18:00</option>
                            <option value="19:00">19:00</option>
                            <option value="20:00">20:00</option>
                            <option value="21:00">21:00</option>
                            <option value="22:00">22:00</option>
                            <option value="23:00">23:00</option>
                        </select>
                    </label>
                </div>
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

export default connect(mapStateToProps, {chooseDepartureDate, getRailwayPathsList, chooseDepartureTime})(SearchDate);