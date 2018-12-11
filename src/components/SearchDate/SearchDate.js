import React, {Component} from 'react';
import {connect} from 'react-redux';
import {chooseDepartureDate, getRailwayPathsList} from '../../actionCreators/searchActions';
import './search-date.css'

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
                {this.props.pathsList.map((item) => {
                    return (
                        <div key={item.num}>
                            <p> Откуда: {JSON.stringify(item.from.station)}</p>
                            <p> Дата отправления: {JSON.stringify(item.from.date)}</p>
                            <p> Время отправления: {JSON.stringify(item.from.time)}</p>
                            <p> Куда: {JSON.stringify(item.to.station)}</p>
                            <p> Дата прибытия: {JSON.stringify(item.to.date)}</p>
                            <p> Время прибытия: {JSON.stringify(item.to.time)}</p>
                            <hr/>
                        </div>
                    )
                })
                }
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