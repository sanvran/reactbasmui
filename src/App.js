import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Card, CardMedia, Container, CssBaseline, Grid, makeStyles, Paper, Typography } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
	root: {
		minHeight: '100vh',
		overflow: 'hidden',
		overflowY: 'hidden',
		// backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/bg2.jpg'})`,
		// backgroundRepeat: 'no-repeat',
		// backgroundSize: 'cover',
		// textAlign: 'center',
	},
	mytypo: {
		paddingTop: theme.spacing(12),
		color: '#403d3d',
		paddingBottom: theme.spacing(2),
	},
	mytypoBottom: {
		fontFamily: 'Lobster, cursive',
		fontSize: theme.spacing(3),
		marginTop: theme.spacing(12),
		color: '#515050',
		textAlign: 'center',
	},
	myImgCard: {
		borderRadius: '50%',
	},
}));

const App = () => {

	const [role, setRole] = useState('');
	const [date, setDate] = useState('');
	const [apendInArr, setApendInArr] = useState([]);

	const handleSubmitAdd = (e) => {
		e.preventDefault();
		console.log("E value====>", 'Role:', role, 'Date:', date);
		const filledData = { role, date }
		if (filledData.role === '' && filledData.date === '') return alert('Please enter name and date');
		setApendInArr((ls) => [...ls, filledData])
		// console.log("Append array==>", apendInArr)
	};

	// del ele
	const delEle = (ind) => {
		console.log("index", ind)
		let cpy = apendInArr;
		cpy.splice(ind, 1)
		console.log("new arr", cpy)
		setApendInArr(cpy)
	}

	const classes = useStyles();
	return (
		<Container className={classes.root}>

			{/* <Grid container justify='center' alignItems='center' direction='column'>
        <Grid item md={12}>
          <Typography variant="h6" className={classes.mytypo}>Welcome To</Typography>
        </Grid>
        <Grid item xs={8} sm={5} md={3} lg={2}>
          <Card className={classes.myImgCard}>
            <CardMedia src="/assets/kiranamate_logo.jpg" component="img" />
          </Card>
        </Grid>
        <Grid item md={12}>
          <Typography variant="h6" className={classes.mytypoBottom}>Get Grocerries Delivered within 90min *</Typography>
        </Grid>
      </Grid> */}

			<form onSubmit={handleSubmitAdd}>
				{/* after click the value will change on another textbox */}

				{/* <input type="text" name="role" value={role} onChange={(e) => { setRole(e.target.value); console.log("first", role, date) }} />
				<input type="date" name="date" value={date} onChange={(e) => setRole(e.target.value)} /> */}

				<input type="text" name="role" value={role} onChange={(e) => { setRole(e.target.value); console.log("first", role, date) }} />
				<input type="date" name="date" value={date} onChange={(e) => setDate(e.target.value)} />
				<button>Add</button>

				<Container>
					<table>
						<tr>
							<th>Role</th>
							<th>Date</th>
							<th>Action</th>
						</tr>
						{
							apendInArr.map((curEle, ind) => {
								return (
									<tr key={ind}>
										<td>{curEle.role }</td>
										<td>{curEle.date }</td>
										<td><button onClick={()=>delEle(ind)}> Delete</button></td>
									</tr>
								)
							})
							
						}

					</table>
				</Container>

			</form>


		</Container>
	);
}

export default App;
