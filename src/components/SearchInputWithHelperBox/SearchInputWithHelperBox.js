import React, {Component} from 'react';
import {connect} from 'react-redux';
import {findSearchedCities, closeSearchedCitiesBox, setDestinationFrom, setDestinationTo} from '../../actionCreators/searchActions';

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

    render() {
        let list = [];
        if (this.props.inputType === 'FROM') {
            list = this.props.railwayData.foundedCitiesListFrom
        } else if (this.props.inputType === 'TO') {
            list = this.props.railwayData.foundedCitiesListTo
        }
        return (
            <div>
                <label>
                    <p>{this.props.label}</p>
                    <input
                        type='text'
                        className="select-field-way-from"
                        value={this.state.value}
                        onChange={(event) => this.onChangeInputHandler(event)}
                    />
                </label>
                <ul>
                    {list.map((item) => {
                        return (
                            <li key={item.title}
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
    {findSearchedCities, closeSearchedCitiesBox, setDestinationFrom, setDestinationTo})(SearchInputWithHelperBox);