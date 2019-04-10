import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import Loader from './Loader';

class App extends React.Component {

    state = {
        videos: [],
        selectedVideo: null
    };

    componentDidMount(){
        this.onTermSubmit('YouTube Rewind');
    }

    onTermSubmit = async term => {
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        });

        this.setState({
            videos: response.data.items,
            selectedVideo: response.data.items[0]
        });
    };

    onVideoSelect = (video) => {
        this.setState({selectedVideo: video});
    };

    renderContent() {
        if((this.state.videos.length) > 0){
            return(
                <div className="ui container">
                    <SearchBar onFormSubmit={this.onTermSubmit} />
                    <div className="ui grid">
                        <div className="ui row">
                            <div className="eleven wide column">
                                <VideoDetail video={this.state.selectedVideo} />
                            </div>
                            <div className="five wide column">
                                <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
        return <Loader message="Please wait while are getting ready to give you a lite YouTube Experience!"/>;
    };

    render() {
        return (
            <div className="border red">
                {this.renderContent()}
            </div>
        )
    }
}

export default App;