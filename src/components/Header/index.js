import React from 'react';
import PropTypes from 'prop-types';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/RaisedButton';
import styles from './styles';

const Header = ({ clickSubmit, onChange }) => (
  <AppBar
    title="Griddit"
    style={styles.container}
    iconElementLeft={<i className="fa fa-reddit fa-3x" aria-hidden="true" style={{ color: 'white' }} />}
    iconStyleLeft={styles.logoContainer}
  >
    <form style={styles.form} onSubmit={clickSubmit}>
      <TextField
        hintText="Input subreddit here."
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
);

Header.propTypes = {
  clickSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Header;
