import { Component } from 'react'
import { connect } from 'react-redux';
import EditAccount from './EditAccount';


class Account extends Component {
    genEdits = () => {
        document.getElementById('account').appendChild(<EditAccount user={this.props.user}/>);
    }

    render(){    
        return (
            <div id='account' className='account'>
                <button onClick={this.genEdits} >Edit Account</button>

            </div>
        );
    }
}
const mapStateToProps = (state) => ({
    user: state.user,
    videos: state.videos
})
export default connect(mapStateToProps, {})(Account);