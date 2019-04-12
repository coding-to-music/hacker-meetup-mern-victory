import React from 'react';

import Reset, { ResetFormData } from '~/auth/user/Reset';

import {resetPassword} from '~/data/User';
import { RouteComponentProps } from 'react-router-dom';

interface ResetPageState {
  error: string;
  success: string;
}

type Props = RouteComponentProps<{
  id: string;
}>;

class ResetPage extends React.Component<Props, ResetPageState> {
  state: Readonly<ResetPageState> = {
    error: '',
    success: '',
  };

  resetPassword = (values: ResetFormData) => {
    if (!values.newPassword || !values.repeatNewPassword) {
      return {
        newPassword: 'Required',
        repeatNewPassword: 'Required'
      };
    }

    if (values.newPassword !== values.repeatNewPassword) {
      this.setState({error: 'Your new passwords didn\'t match'});
      return {
        repeatNewPassword: 'Your new passwords didn\'t match',
      };
    }

    return resetPassword(this.props.match.params.id, values.newPassword)
      .then(() => this.setState({success: 'Your password has been reset'}))
      .catch((e) => this.setState({error: e.message}));
  }

  render() {
    return (
      <Reset
        onSubmit={this.resetPassword}
        errorMessage={this.state.error}
        successMessage={this.state.success}
      />
    );
  }
}

export default ResetPage;
