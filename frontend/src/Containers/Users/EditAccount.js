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
        const { sendEdit } = this.props;
        let updates = {
            uid: this.props.user.uid,
            email: this.state.email, 
            password: this.state.password
        }       
        sendEdit(updates);
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
export default connect(null, {sendEdit})(EditAccount);