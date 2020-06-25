import React, { Component } from "react";
import PropTypes from "prop-types";
import Notifications from "./Notifications";
import ProjectList from "../project/List";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import { Redirect } from "react-router-dom";

class Dashboard extends Component {
  render() {
    const { projects, auth } = this.props;

    if (!auth.uid) return <Redirect to="/signin" />;
    const Projects = () => {
      if (projects) {
        return <ProjectList projects={projects} />;
      } else {
        return (
          <div className="uk-container">
            <div className="uk-card uk-card-default uk-card-hover uk-card-body uk-margin-small-top">
              <p>Loading Content ....</p>
              <div className="uk-card-footer">
                <p className="uk-text-meta"> </p>
                <p className="uk-text-meta"> </p>
              </div>
            </div>
          </div>
        );
      }
    };
    return (
      <div className="dashboard uk-container">
        <div
          className="uk-grid-medium uk-child-width-expand@s uk-margin-medium-top"
          uk-grid="true"
        >
          <div>
            <Projects />
          </div>
          <div>
            <Notifications />
          </div>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  projects: PropTypes.array.isRequired
};

const mapStateToProps = state => {
  return {
   //  projects: state.project.projects, // without internet
    auth: state.firebase.auth,
    projects: state.firestore.ordered.projects // with internet
  };
};

export default compose(
  connect(mapStateToProps),
  // syncing the project collection to dashborad component
  firestoreConnect([{ collection: "projects" }])
)(Dashboard);
