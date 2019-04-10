import React from 'react';

class SearchBar extends React.Component{

    state = {term: ''};

    onInputChange = (event) => {
        this.setState({term: event.target.value});
    };

    onFormSubmit = (event) => {
        event.preventDefault();
        
        this.props.onFormSubmit(this.state.term);
    };

    render(){
        return (
            <div className="search-bar ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <input 
                            className="prompt"
                            autoFocus
                            type="text" 
                            value={this.state.term}
                            onChange={this.onInputChange}
                            placeholder="Search for your favorite videos"
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;