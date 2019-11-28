import React from 'react';
import { connect } from 'react-redux';

import { setUsers, addUsers } from '../../redux/users/users.actions';

import UserCard from '../user-card/user-card.component';

import './users-page.styles.scss';

class UsersPage extends React.Component {

	componentDidMount() {
		this.props.setUsers(this.props.counter);
	};

	render () {
		return (
				<div className='users-page container'>
					<h1>Our cheerful users</h1>
					<p>Attention! Sorting users by registration date</p>
					{
						this.props.users.map(user => <UserCard key={user.id} {...user} />)
					}
					<button onClick={() => {this.props.addUsers(this.props.counter, 3)}}>Show More</button>
				</div>
		);
	};
}; 

const mapStateToPros = ({users}) => ({
	users: users.users,
	counter: users.counter
});

export default connect(mapStateToPros, {setUsers, addUsers})(UsersPage);