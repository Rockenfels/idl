import { Component } from 'react'
import { connect } from 'react-redux';
import PersonalVideos from '../Videos/PersonalVideos';
import EditAccount from './EditAccount';


class Account extends Component {
    genEdits = () => {
        document.getElementById('edit-form-container').appendChild(<EditAccount user={this.props.user}/>);
    }

    render(){    
        return (
            <div id='account' className='account'>
                <h2>Your Contributions:</h2>
                <PersonalVideos user={this.props.user} />
                <div id='edit-form-container'>
                    <button onClick={this.genEdits} >Edit Account</button>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => ({
    user: state.user,
    videos: state.videos
})
export default connect(mapStateToProps, {})(Account);