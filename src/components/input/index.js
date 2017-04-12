import React from 'react';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import FontAwesome from 'react-fontawesome';
import FlatButton from 'material-ui/RaisedButton';
import styles from './mui-styles';

const Input = ({ clickSubmit, onChange }) => {
	return (
		<AppBar 
      title="Griddit" 
      style={styles.container}
      iconElementLeft={<FontAwesome size='3x' name="reddit" style={styles.logo} />}
      iconStyleLeft={styles.logoContainer}
    >
			<form style={styles.form} onSubmit={clickSubmit}>
			<TextField
				hintText="Type in your favorite subreddit here."
				hintStyle={styles.hint}
				style={styles.input}
				onChange={onChange}
    		/>
			<FlatButton 
				label="Submit"
				type="submit"
				style={styles.button} 
				labelStyle={styles.overlay}
			/>
			</form>
		</AppBar>
	)
}

export default Input;