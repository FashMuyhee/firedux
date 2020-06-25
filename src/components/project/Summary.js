import React from 'react'
import {Link} from 'react-router-dom'
import moment from 'moment'

const ProjectSummary = ({project}) => {
   return (
      <div>
         <div className="uk-card uk-card-default uk-card-hover uk-card-body uk-margin-small-bottom">
            <Link style={style.link} to={`/project/${project.id}`}><h3 className="uk-card-title">{project.title}</h3></Link>
            <p>{project.content}</p>
            <p className="uk-text-meta">by {project.authLastName} {project.authFirstName}</p>
            <p className="uk-text-meta">{ moment(project.createdAt.toDate()).calendar()}</p>
         </div>
      </div>
   )
}

export default ProjectSummary;

const style ={
   link:{
      textDecoration:'none'
   }
}