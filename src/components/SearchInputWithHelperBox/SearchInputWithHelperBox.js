import React, {Component} from 'react';
import {connect} from 'react-redux';
import {findSearchedCities, closeSearchedCitiesBox, setDestinationFrom, setDestinationTo,
    setLinkClickDestination} from '../../actionCreators/searchActions';
import './search-input.css'

class SearchInputWithHelperBox extends Component {
    state = {
        value: '',
    };

    onChangeInputHandler = (event) => {
        this.setState({value: event.target.value}, () => {
            this.getSearchedCities(this.state.value);
        });
    };

    getSearchedCities = (input) => {
        if (this.state.value) {
            this.props.findSearchedCities(input, this.props.inputType);
        } else {
            this.props.closeSearchedCitiesBox();
        }
    };

    onFoundedCityClickHandler = (item) => {
        this.setState({
            value: item.title
        }, () => {
            if (this.props.inputType === 'FROM') {
                this.props.setDestinationFrom(item);
            } else if (this.props.inputType === 'TO') {
                this.props.setDestinationTo(item);
            }

            this.props.closeSearchedCitiesBox();
        })
    };

    cityLinkClickHandler = (event) => {
        console.log(event.target.innerHTML);
        if (event.target.tagName === 'SPAN') {
            if (this.props.inputType === 'FROM') {
                this.props.setLinkClickDestination(event.target.innerHTML, 'FROM');
            } else if (this.props.inputType === 'TO') {
                this.props.setLinkClickDestination(event.target.innerHTML, 'TO');
            }
        }
    };

    componentWillReceiveProps(nextProps) {
        if (nextProps.railwayData.destinationFrom.title !== this.state.value ) {
            if (this.props.inputType === 'FROM') {
            this.setState({value: nextProps.railwayData.destinationFrom.title});
            } else if (this.props.inputType === 'TO') {
                this.setState({value: nextProps.railwayData.destinationTo.title});
            }

        }
    }

    render() {
        let list = [];
        if (this.props.inputType === 'FROM') {
            list = this.props.railwayData.foundedCitiesListFrom
        } else if (this.props.inputType === 'TO') {
            list = this.props.railwayData.foundedCitiesListTo
        }
        return (
            <div className='search-input-box-wrapper'>
                <label>
                    <p className='destination-name'>{this.props.label}</p>
                    <input
                        type='text'
                        className="select-field-way-from"
                        value={this.state.value}
                        onChange={(event) => this.onChangeInputHandler(event)}
                    />
                </label>
                <div className="city-links"
                     onClick={(event) =>
                         this.cityLinkClickHandler(event)
                     }>
                    <span>Одесса</span>
                    <span>Киев</span>
                    <span>Львов</span>
                    <span>Харьков</span>
                    <span>Днепр</span>
                </div>
                <ul className='destination-list'>
                    {list.map((item) => {
                        return (
                            <li key={item.title}
                                className='destination-item'
                                onClick={(event) => this.onFoundedCityClickHandler(item)}>
                                {item.title}
                            </li>
                        )
                    })}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        railwayData: state.railwayData
    }
};

export default connect(mapStateToProps, {findSearchedCities, closeSearchedCitiesBox, setDestinationFrom,
    setDestinationTo, setLinkClickDestination})(SearchInputWithHelperBox);