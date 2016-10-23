import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import makeBem from 'bem-cx';
import SessionWrapper from '../../components/Wrapper/Session';
import FormWrapper from '../../components/Wrapper/Form';
import FormAction from '../../components/Wrapper/Form/action';
import TextField from '../../components/Form/TextField';
import './signin.css';

const bem = makeBem('signin');

const View = ({ handleChange, handleSubmit, props: { error, signupWithGoogle } }) =>
  <SessionWrapper>

    <FormWrapper title="Sign In">

      <form onSubmit={handleSubmit}>

        <p style={{ color: '#D50000' }}>{error}</p>

        <TextField name="email" type="email" label="Email" hint="e.g., johndoe@nomber.com" onChange={handleChange('email')} />
        <TextField name="Password" type="password" label="Password" hint="e.g., **********" help="At least 8 characters long" onChange={handleChange('password')} />

        <FormAction>
          <RaisedButton primary label="Sign In" onClick={handleSubmit} />
        </FormAction>

        <p className={bem.el('or')}> OR </p>

        <FormAction>
          <RaisedButton secondary label="Sign in with Google" onClick={signupWithGoogle} />
        </FormAction>

      </form>


    </FormWrapper>

    <div className={bem.el('bottom')}>
      <p>Dont have an account?<Link to="sign-up"> Sign up. </Link></p>
    </div>

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
