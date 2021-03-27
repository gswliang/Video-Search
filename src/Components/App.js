import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../api/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail'

class App extends React.Component {
    state = { videos: [], selectedVideo: null };

    //在App一開始的時候就先自動loadign一個主題，畫面才不會白白的

    componentDidMount() {
        this.getWords('taipei');
    }

    getWords = async words => {
        const result = await youtube.get('/search', {
            params: {
                q: words
            }
        });
        this.setState({
            videos: result.data.items,
            selectedVideo: result.data.items[0]
        });
    }

    onVideoSelect = video => {
        this.setState({ selectedVideo: video })
    }

    render() {
        return (<div className='ui container'>
            <SearchBar getValue={this.getWords} />
            <div className="ui grid">
                <div className='ui row'>
                    <div className="eleven wide column">
                        <VideoDetail video={this.state.selectedVideo} />
                    </div>
                    <div className="five wide column">
                        <VideoList
                            videoSelect={this.onVideoSelect}
                            videos={this.state.videos} />
                    </div>
                </div>
            </div>
        </div >)
    }
}

export default App;