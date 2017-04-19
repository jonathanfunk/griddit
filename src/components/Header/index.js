import React from 'react';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/RaisedButton';
import styles from './styles';

const Header = ({ clickSubmit, onChange }) => {
	return (
		<AppBar 
		title="Griddit" 
		style={styles.container}
		iconElementLeft={<i className="fa fa-reddit fa-3x" aria-hidden="true" style={{color: 'white'}}></i>}
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

export default Header;