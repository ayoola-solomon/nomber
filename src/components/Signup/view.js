import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import SessionWrapper from '../../components/Wrapper/Session';
import FormWrapper from '../../components/Wrapper/Form';
import FormAction from '../../components/Wrapper/Form/action';
import TextField from '../../components/Form/TextField';

const View = () =>
  <SessionWrapper>
    <FormWrapper title="Signup" backLink="/sign-in">
      <form onSubmit={(e) => (e.preventDefault())}>

        <TextField name="name" type="text" label="Name" hint="e.g., John Doe" onChange={(e) => console.log(e.target.value)} />
        <TextField name="email" type="email" label="Email" hint="e.g., johndoe@nomber.com" onChange={(e) => console.log(e.target.value)} />
        <TextField name="Password" type="password" label="Password" hint="e.g., **********" help="At least 8 characters long" onChange={(e) => console.log(e.target.value)} />

        <FormAction>
          <RaisedButton secondary label="Sign Up" />
        </FormAction>

      </form>
    </FormWrapper>
  </SessionWrapper>;

export default View;
