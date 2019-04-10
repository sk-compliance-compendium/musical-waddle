import React, { Component } from 'react';

class Loader extends Component{
    render() {
        return (
            <div className="ui active dimmer">
                <div className="ui large text loader">{this.props.message}</div>
            </div>
        );
    }
}

Loader.defaultProps = {
    message: 'Loading....'
};

export default Loader;