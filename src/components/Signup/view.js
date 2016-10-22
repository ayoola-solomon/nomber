import React, { PropTypes } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import SessionWrapper from '../../components/Wrapper/Session';
import FormWrapper from '../../components/Wrapper/Form';
import FormAction from '../../components/Wrapper/Form/action';
import TextField from '../../components/Form/TextField';

const View = ({ handleChange, handleSubmit, props: { error } }) =>
  <SessionWrapper>
    <FormWrapper title="Signup" backLink="/sign-in">
      <form onSubmit={handleSubmit}>

        <p style={{ color: '#D50000' }}>{error}</p>

        <TextField name="name" type="text" label="Name" hint="e.g., John Doe" onChange={handleChange('name')} />
        <TextField name="email" type="email" label="Email" hint="e.g., johndoe@nomber.com" onChange={handleChange('email')} />
        <TextField name="password" type="password" label="Password" hint="e.g., **********" help="At least 8 characters long" onChange={handleChange('password')} />

        <FormAction>
          <RaisedButton secondary label="Sign Up" onClick={handleSubmit} />
        </FormAction>

      </form>
    </FormWrapper>
  </SessionWrapper>;

View.propTypes = {
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
  props: PropTypes.shape({
    error: PropTypes.string,
  }),
};

export default View;
