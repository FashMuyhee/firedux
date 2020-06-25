import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createProject } from '../../store/actions/projectActions'
import {Redirect} from 'react-router-dom'

class CreateProject extends Component {
   state = {
      title: '',
      content: '',

   }

   handleChange = e => {
      this.setState({
         [e.target.id]: e.target.value
      })
   }

   onSubmit = e => {
      e.preventDefault()
      const project = this.state
      this.props.createProject(project)
      this.props.history.push('/')
   }

   render() {
      const {auth} = this.props
      if(!auth.uid) return <Redirect to="/signin"/>

      return (
         <div className="uk-container ">
            <div className="uk-card uk-width-1-1@m uk-width-1-2@l uk-align-center uk-margin-medium-top">
               <div className="uk-card-default uk-card-body ">
                  <h4 className="uk-text-center uk-text-bold">Create Project</h4>
                  <form className="uk-align-center" onSubmit={this.onSubmit} autoComplete="false">

                     <div className="uk-margin">
                        <label className="uk-form-label" htmlFor="title">Project Title</label>
                        <div className="uk-form-control">
                           <input className="uk-input uk-form-width-large" id="title" type="text" placeholder="Project Title.." onChange={this.handleChange} />
                        </div>
                     </div>
                     <div className="uk-margin">
                        <label className="uk-form-label" htmlFor="content">Project Content</label>
                        <div className="uk-form-control">
                           <textarea className="uk-textarea uk-form-width-large" id="content" rows="5" placeholder="Project Content..." onChange={this.handleChange}/>
                        </div>
                     </div>
                     <div className="uk-margin">
                        <input className="uk-button uk-button-default uk-button-large uk-align-center bg-pink-main text-white" type="submit" value="Save Project" />
                     </div>

                  </form>
               </div>
            </div>
         </div >
      )
   }
}
const mapStateToProps = (state) => {
   return {
      
      auth: state.firebase.auth
     
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      createProject: (project) => dispatch(createProject(project))
   }
}
export default connect(mapStateToProps, mapDispatchToProps)(CreateProject)
