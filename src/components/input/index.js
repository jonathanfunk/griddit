import React from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/RaisedButton';
import styles from './mui-styles';

const Input = ({clickSubmit}) => {
	return (
		<Paper style={styles.container}>
			<form style={styles.form}>
			<TextField
				hintText="Type in your favorite subreddit here."
				hintStyle={styles.hint}
				style={styles.input}
    	/>
			<FlatButton 
				label="Submit"
				backgroundColor='red'
				style={styles.button} 
				labelStyle={styles.overlay}
				onClick={clickSubmit}
			/>
			</form>
		</Paper>
	)
}

export default Input;