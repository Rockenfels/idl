import { Component } from 'react';
import { connect } from 'react-redux';
import { sendEdit } from '../../Reducers/user'

class EditAccount extends Component {
    constructor(props){
        super(props)
        this.state = {
            email: this.props.user.email,
            password: ""
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const { sendEdit, user } = this.props;
        let userUpdates = {
            username: user.username,
            uid: user.uid,
            id: user.id,
            email: this.state.email, 
            password: this.state.password
        }       
        sendEdit(userUpdates);
        setTimeout(() => {
            if(this.props.user.accepted === true){
                window.alert('Edits successful');
                e.target.email.value = "";
                e.target.password.value = "";
            }
            else {
                window.alert('Invalid update, try again.')
            }
        }, 5000); 
    }

    render(){
        
        return(
            <form onSubmit={this.handleSubmit}>
                <label htmlFor='new-email'>New Email:</label>
                <input id='new-email' type="text" name="email" value={this.state.email} onChange={this.handleChange}/>
                <label htmlFor='new-password'>New Password:</label>
                <input id='new-password' type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
                <input type="submit" value="Update" />
            </form>
        );
    }
}

const mapStateToProps = (state) => ({
    user: state.user
})
export default connect(mapStateToProps, {sendEdit})(EditAccount);