import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { signUp } from "../../store/actions/authActions";

class SignUp extends Component {
  state = {
    email: "",
    password: "",
    fname: "",
    lname: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    const { email, password, fname, lname } = this.state;
    e.preventDefault();
    this.props.signUp({ email, password, fname, lname });
  };

  render() {
    const { loading, auth } = this.props;

    if (auth.uid) return <Redirect to="/" />;

    const SignUpBtn = () => {
      if (!loading) {
        return (
          <input
            className="uk-button uk-button-default uk-button-large uk-align-center bg-pink-main text-white"
            type="submit"
            value="Sign In"
          />
        );
      } else if (loading) {
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
        <div className="uk-card uk-width-1-1@m uk-width-1-3@l uk-align-center uk-margin-medium-top">
          <div className="uk-card-default uk-card-body ">
            <h4 className="uk-text-center uk-text-bold text-pink-light">
              Sign Up Here
            </h4>
            <form
              className="uk-align-center"
              onSubmit={this.onSubmit}
              autoComplete="false"
            >
              <div className="uk-margin">
                <div className="uk-inline">
                  <span className="uk-form-icon" uk-icon="icon: user" />
                  <input
                    className="uk-input uk-form-width-large"
                    name="fname"
                    type="text"
                    placeholder="Jane"
                    onChange={this.handleChange}
                  />
                </div>
              </div>

              <div className="uk-inline">
                <div className="uk-inline">
                  <span className="uk-form-icon" uk-icon="icon: user" />
                  <input
                    className="uk-input uk-form-width-large"
                    name="lname"
                    type="text"
                    placeholder="Doe"
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="uk-margin">
                <div className="uk-inline">
                  <span className="uk-form-icon" uk-icon="icon: mail" />
                  <input
                    className="uk-input uk-form-width-large"
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
                    className="uk-input uk-form-width-large"
                    name="password"
                    type="password"
                    placeholder="Password"
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="uk-margin">
                <SignUpBtn />
              </div>
            </form>
            <div className="uk-text-center">
              <Link to="/signin" className="text-pink-light no-text-deco">
                Already have an Account,Sign In
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
    loading: state.auth.loading,
    auth: state.firebase.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signUp: newUser => dispatch(signUp(newUser))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp);
