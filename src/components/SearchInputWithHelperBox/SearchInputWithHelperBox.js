import React, {Component} from 'react';
import {connect} from 'react-redux';
import {debounce} from 'lodash';
import {
    findSearchedCities, closeSearchedCitiesBox, setDestinationFrom, setDestinationTo,
    setLinkClickDestination
} from '../../modules/searchInputWithHelperBox/actions';
import './search-input.css';

class SearchInputWithHelperBox extends Component {

    state = {
        value: '',
        citiesList: [
            'Одесса',
            'Киев',
            'Львов',
            'Харьков',
            'Днепр'
        ]
    };

    onChangeInputHandler = (event) => {
        this.setState({value: event.target.value});
        this.getSearchedCities(event.target.value);
    };

    getSearchedCities = debounce((input) => {
        if (this.state.value) {
            this.props.findSearchedCities(input, this.props.inputType);
        } else {
            this.props.closeSearchedCitiesBox();
        }
    }, 1000);

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
        if (event.target.tagName === 'SPAN') {
            const inputValue = event.target.innerHTML;
            if (this.props.inputType === 'FROM') {
                this.props.setLinkClickDestination(inputValue, 'FROM')
                    .then(() => {
                        this.setState({value: inputValue});
                    })
            } else if (this.props.inputType === 'TO') {
                this.props.setLinkClickDestination(inputValue, 'TO')
                    .then(() => {
                        this.setState({value: inputValue});
                    })
            }
        }
    };

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
                    {
                        this.state.citiesList.map((item) => {
                            return (
                                <span key={item}>{item}</span>
                            )
                        })
                    }
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

export default connect(mapStateToProps,
    {
        findSearchedCities,
        closeSearchedCitiesBox,
        setDestinationFrom,
        setDestinationTo,
        setLinkClickDestination
    })(SearchInputWithHelperBox);