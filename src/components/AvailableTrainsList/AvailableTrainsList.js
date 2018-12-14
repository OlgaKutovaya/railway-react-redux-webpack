import React, {Component} from 'react';
import {connect} from "react-redux";

class AvailableTrainsList extends Component {

    render() {
        return (
            <div>
                {this.props.pathsList.map((item) => {
                    return (
                        <div key={item.num}>
                            <p><b>Откуда: </b>{item.from.station}</p>
                            <p><b>Дата отправления: </b>{item.from.date}</p>
                            <p><b>Время отправления: </b>{item.from.time}</p>
                            <p><b>Куда: </b>{item.to.station}</p>
                            <p><b>Дата прибытия: </b>{item.to.date}</p>
                            <p><b>Время прибытия: </b>{item.to.time}</p>
                            <br/>
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
        pathsList: state.railwayPathListData.railwayPathList
    })
};

export default connect(mapStateToProps, {})(AvailableTrainsList);