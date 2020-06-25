import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { signIn } from "../../store/actions/authActions";
class SignIn extends Component {
  state = {
    email: "",
    password: "",
    loading:true
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    const { email, password } = this.state;
    e.preventDefault();
    this.props.signIn({ email, password });
  };

  render() {
    const { auth, authError, loading } = this.props;

    if (auth.uid) return <Redirect to="/" />;

    const SignInBtn = () => {
      if (!loading) {
        return (
          <input
            className="uk-button uk-button-default uk-button-large uk-align-center bg-pink-main text-white"
            type="submit"
            value="Sign In"
          />
        );
      } else if (this.state.loading) {
        return (
          <input
            className="uk-button uk-button-default uk-button-large uk-align-center bg-pink-main text-white"
            disabled
            value="Signing In ..."
          />
        );
      }
    };

    return (
      <div className="uk-container ">
        <div className="uk-card uk-width-1-1@s uk-width-1-2@m uk-width-1-3@l uk-align-center uk-margin-medium-top">
          <div className="uk-card-default uk-card-body ">
            <h4 className="uk-text-center uk-text-bold text-pink-light">
              Sign In Here
            </h4>
            <form
              className="uk-align-center"
              onSubmit={this.onSubmit}
              autoComplete="false"
            >
              <div className="uk-margin">
                <div className="uk-inline uk-align-center">
                  <span className="uk-form-icon" uk-icon="icon: mail" />
                  <input
                    className="input uk-input uk-form-width-large "
                    name="email"
                    type="email"
                    placeholder="jane_doe@mail.com"
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="uk-margin">
                <div className="uk-inline">
                  <span className="uk-form-icon" uk-icon="icon: lock" />
                  <input
                    className="input uk-input uk-form-width-large"
                    name="password"
                    type="password"
                    placeholder="Password"
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="uk-margin">
                <SignInBtn />
              </div>
            </form>
            <div className="uk-text-center">
              <Link to="#" className="text-pink-light no-text-deco">
                Forget Password
              </Link>{" "}
              <br />
              <Link to="/signup" className="text-pink-light no-text-deco">
                Create an Account
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth,
    loading: state.auth.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signIn: credentials => dispatch(signIn(credentials))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignIn);
