import React from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/RaisedButton';
import styles from './mui-styles';

const Input = ({ clickSubmit, inputValue }) => {
	return (
		<Paper style={styles.container}>
			<form style={styles.form} onSubmit={clickSubmit}>
			<TextField
				hintText="Type in your favorite subreddit here."
				hintStyle={styles.hint}
				style={styles.input}
				onChange={inputValue}
    	/>
			<FlatButton 
				label="Submit"
				type="submit"
				backgroundColor='red'
				style={styles.button} 
				labelStyle={styles.overlay}
			/>
			</form>
		</Paper>
	)
}

export default Input;