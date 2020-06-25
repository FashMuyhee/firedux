import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import moment from "moment";
import { Redirect,Link } from "react-router-dom";

const ProjectDetail = props => {
  const { project, auth } = props;
  if (!auth.uid) return <Redirect to="/signin" />;

  if (project) {
    return (
      <div className="uk-container">
        <div className="uk-card uk-card-default uk-card-hover uk-card-body uk-margin-small-top">
          <div>
            <h4 className="uk-card-title">{project.title}</h4>
          </div>
          <p>{project.content}</p>
          <div className="uk-card-footer">
            <p className="uk-text-meta">
              by {project.authLastName} {project.authFirstName}
            </p>
            <p className="uk-text-meta">
              {moment(project.createdAt.toDate()).calendar()}
            </p>
            <Link to="/" className="uk-align-left text-pink-dark">{"<-- Back"}</Link>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="uk-container">
        <div className="uk-card uk-card-default uk-card-hover uk-card-body uk-margin-small-top">
          <p>Loading Content ....</p>
          <div className="uk-card-footer">
            <p className="uk-text-meta" />
            <p className="uk-text-meta" />
          </div>
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  // ...with internet

  const projects = state.firestore.data.projects;
  const project = projects ? projects[id] : null;

  // local testing
  // const projects  = state.project.projects
  // const project = projects ? projects[id-1] : null
  return {
    project: project,
    auth: state.firebase.auth
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "projects" }])
)(ProjectDetail);
