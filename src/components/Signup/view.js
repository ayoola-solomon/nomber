import React, { PropTypes } from 'react';
import makeBem from 'bem-cx';
import RaisedButton from 'material-ui/RaisedButton';
import SessionWrapper from '../../components/Wrapper/Session';
import FormWrapper from '../../components/Wrapper/Form';
import FormAction from '../../components/Wrapper/Form/action';
import TextField from '../../components/Form/TextField';

const bem = makeBem('signin');

const View = ({ handleChange, handleSubmit, props: { error, signupWithGoogle } }) =>
  <SessionWrapper>
    <FormWrapper title="Signup" backLink="/sign-in">
      <form onSubmit={handleSubmit}>

        <p style={{ color: '#D50000' }}>{error}</p>

        <TextField name="name" type="text" label="Name" hint="e.g., John Doe" onChange={handleChange('name')} />
        <TextField name="email" type="email" label="Email" hint="e.g., johndoe@nomber.com" onChange={handleChange('email')} />
        <TextField name="password" type="password" label="Password" hint="e.g., **********" help="At least 8 characters long" onChange={handleChange('password')} />

        <FormAction>
          <RaisedButton primary label="Sign Up" onClick={handleSubmit} />
        </FormAction>

        <p className={bem.el('or')}> OR </p>

        <FormAction>
          <RaisedButton secondary label="Sign up with Google" onClick={signupWithGoogle} />
        </FormAction>

      </form>
    </FormWrapper>
  </SessionWrapper>;

View.propTypes = {
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
  props: PropTypes.shape({
    error: PropTypes.string,
    signupWithGoogle: PropTypes.func,
  }),
};

export default View;
