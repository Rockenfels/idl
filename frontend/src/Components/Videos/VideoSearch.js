import { Component } from 'react';
import { Link } from 'react-router-dom';

class VideoSearch extends Component {
    constructor(props){
        super(props)
        this.state = {
            terms: '',
            result: undefined
        }
    }

    handleChange = (e) => {
        this.setState({
            terms: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let video = this.props.videos.videos.filter(video => video.title.includes(this.state.terms));
        if(video.length > 0){    
            this.setState(state => ({
                result: video
            }))
        }
    }

    renderResults = (result) => {
        return(
            <div className="list-group">
                <div className="list-group-item">
                <Link className="btn btn-outline-primary btn-block" to={`/videos/${result[0].uid}`}>{result[0].title}</Link>
                </div>
            </div>
        );
    }
    render(){
        return(
            <div className="card">
                <div className="card-body">
                    <form id='video-search' onSubmit={this.handleSubmit}>
                        <div className="form-group row">
                            <label className="col-sm-4 col-form-label" for='search-terms'>Search Terms</label>
                            <div class="col-sm-8">
                                <input className="form-control" id='search-terms' name="searchTerms" type="text" onChange={this.handleChange} />
                            </div>
                            <div class="col-sm-4">
                                <input className="form-control btn btn-primary" type='submit' name='submit' value='Search' />
                            </div>
                        </div>
                    </form>
                {
                    this.state.result !== undefined ? this.renderResults(this.state.result) : <h2 className="h2">No Results</h2>
                }
                </div>
            </div>
        )
    }
}
export default VideoSearch;