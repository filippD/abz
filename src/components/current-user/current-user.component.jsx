import React from 'react';
import { connect } from 'react-redux';

import { setCurrentUser } from '../../redux/currentUser/currentUser.actions';

import './current-user.scss';

class CurrentUser extends React.Component {
	
	componentDidMount() {
		this.props.setCurrentUser()
	};

	render() {
		return (
			this.props.currentUser ?
			<div className='current-user'>
				<div>
					<span className='user-name'>{this.props.currentUser.name}</span>
					<span className='user-email'>{this.props.currentUser.email}</span>
				</div>
				<div>
					<img className='user-photo' src={this.props.currentUser.photo} alt='' />
				</div>
			</div>
			:
			<p>loading</p>
		);
	};
};

const mapStateToProps = ({currentUser}) => ({
	currentUser: currentUser.currentUser,
	loading: currentUser.loading
});

export default connect(mapStateToProps, { setCurrentUser } )(CurrentUser);