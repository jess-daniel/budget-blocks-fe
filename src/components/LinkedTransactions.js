import React, { useState } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

import { getTransactions } from '../redux/actions/PlaidActions';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
	root: {
		'& > *': {
			margin: theme.spacing(1)
		}
	},
	topcontent: {
		display: 'flex'
	},
	card: {
		width: '100%',
		marginBottom: '1rem',
		height: '70%',
		background: '#F0F0F0'
	},
	details: {
		display: 'flex'
	},
	content: {
		flex: '1 0 auto',
		alignItems: 'flex-start',
		textAlign: 'left'
	},
	controls: {
		display: 'flex',
		alignItems: 'center',
		textAlign: 'right',
		alignContent: 'flex-end'
	},
	text: {
		textAlign: 'left',
		paddingLeft: theme.spacing(5)
	}
}));

function preventDefault(event) {
	event.preventDefault();
}

const Transactions = props => {
	const classes = useStyles();
	const theme = useTheme();
	const [filter, setFilter] = useState(true);

	let transactions = props.transactions.filter(i => i.transactions.length > 0);
	// console.log(transactions);
	// transactions = transactions.sort(function(a, b) {
	// 	return new Date(b.payment_date) - new Date(a.payment_date);
	// });
	const handleClick = e => {
		setFilter(!filter);
	};
	var shuffled = transactions.sort(function() {
		return 0.5 - Math.random();
	});

	var selected = shuffled.slice(0, 3);
	console.log(selected)
	return (
		<div>
			{filter ? (
				<React.Fragment>
					<div className={classes.topcontent}>
						<h3 className={classes.text}>Recent Transactions:</h3>
						{/* <div className={classes.root}>
				<Button variant='contained'>
					<AddIcon />
					Add Transactions
				</Button>
				<Button variant='contained' color='primary'>
					<AddIcon />
					Add Income
				</Button>
			</div> */}
					</div>

					{selected.map(i => {
						const category = i.name;
						return (
								<Card className={classes.card} key={i.id}>
									<p className='cardheader'>{`Puchase Authorized on ${i.transactions[0].payment_date} from ${i.transactions[0].name}`}</p>

									<Grid container spacing={1}>
										<Grid item xs={3}>
											<p>{i.transactions[0].payment_date}</p>
											<b>Category</b>
										</Grid>
										<Grid item xs={9}>
											<p
												className={
													i.transactions[0].amount < 0
														? 'red bottom-content'
														: 'green bottom-content'
												}
											>
												${(Math.round(10 * i.transactions[0].amount) / 100).toFixed(2)}
											</p>
											<p className='bottom-content'>{category}</p>
										</Grid>
									</Grid>
								</Card>
						)
					})}
					<button onClick={handleClick}>View All</button>
				</React.Fragment>
			) : (
				<React.Fragment>
					<div className={classes.topcontent}>
						<h3 className={classes.text}>Recent Transactions:</h3>
						{/* <div className={classes.root}>
		<Button variant='contained'>
			<AddIcon />
			Add Transactions
		</Button>
		<Button variant='contained' color='primary'>
			<AddIcon />
			Add Income
		</Button>
	</div> */}
					</div>

					{props.transactions.map(i => {
						const category = i.name;
						return i.transactions.map(i => (
							<Card className={classes.card} key={i.id}>
								<p className='cardheader'>{`Puchase Authorized on ${i.payment_date} from ${i.name}`}</p>

								<Grid container spacing={1}>
									<Grid item xs={3}>
										<p>{i.payment_date}</p>
										<b>Category</b>
									</Grid>
									<Grid item xs={9}>
										<p
											className={
												i.amount < 0
													? 'red bottom-content'
													: 'green bottom-content'
											}
										>
											${(Math.round(10 * i.amount) / 100).toFixed(2)}
										</p>
										<p className='bottom-content'>{category}</p>
									</Grid>
								</Grid>
							</Card>
						));
					})}
					<button onClick={handleClick}>View Less</button>
				</React.Fragment>
			)}
		</div>
	);
};
function mapStateToProps(state) {
	return {
		userID: state.loginReducer.user.id,
		LinkedAccount: state.loginReducer.user.LinkedAccount,
		transactions: state.plaidReducer.categories
	};
}

export default connect(mapStateToProps, { getTransactions })(Transactions);

// export const Tran = props => { }
//const mapStateToProps = state =>{return{ }}
//export default connect(mapStateToProps, {}(trans  ))
