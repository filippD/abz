import React from 'react';
import { connect } from 'react-redux';

import { POSITIONS } from '../../constants/constants';
import { addUser, setUsers } from '../../redux/users/users.actions';

import './register-page.styles.scss';

class RegisterPage extends React.Component {

	constructor() {
		super();
		this.state = {
			name: '',
			email: '',
			phone: '',
			position_id: '',
			photo: ''
		};
	};

	handleSubmit = async event => {
	    event.preventDefault();
	    try {
	    	await this.props.addUser(this.state, 3)
	      	this.setState({ email: '', password: '' });  
  
	    } catch(error) {
	      console.log(error)
	    }
	};

	handleChange = event => {
		const { value, name } = event.target;
	    this.setState({ [name]: value });
	};

	handleFileChange = e => {
    	this.setState({ photo: e.target.files[0] })
  	};


	render() {
		const { name, email, phone, position } = this.state;
		return(
			<div className='register-page container'>
				<h1>Register to get a work</h1>
				<p>
				Attention! After a successful registration and alert,
				update the list of users in the block from the top
				</p>
				<form className='form' onSubmit={this.handleSubmit} >
					<div className='input-div'>
						<label className = 'form-label'>Name</label>
				  		<input required className='title-field' placeholder='Your Name' type="text" name="name" value={name} onChange={this.handleChange} />
				  	</div>
				  	<div className='input-div'>
				  		<label className='form-label'>Email</label>
				  		<input required className='title-field' placeholder='Your Email' type="email" name="email" value={email} onChange={this.handleChange} />
				  	</div>
				  	<div className='input-div'>
				  		<label className='form-label'>Phone</label>
				  		<input required className='title-field' placeholder='Phone' type="number" name="phone" value={phone} onChange={this.handleChange} />
				  	</div>
				  	<div className='input-div'>
					  	<select required className='title-field position' name="position_id" value={position} onChange={this.handleChange} >
					    <option value="">Select your position</option>
					    {
							POSITIONS.map((position, i) => (
								<option key={i} value={position.id}>{position.name}</option>
							))
						}
					  	</select>
				  	</div>
				  	<div className='input-div'>
						<input required className='title-field' type="file" onChange={this.handleFileChange} />
				  	</div>
				  	<input className='submitButton' type="submit" value='Sign Up' />
				</form>
			</div>
		);
	};
};

export default connect(null, {addUser, setUsers})(RegisterPage);