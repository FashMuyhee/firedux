import React from 'react'
import { NavLink } from 'react-router-dom'
import {connect} from 'react-redux'
import {signOut} from '../../store/actions/authActions'

const SignedInLinks = (props) => {
   return (
      <div>
            <ul className="uk-navbar-nav ">
               <li className=" uk-visible@m "><NavLink className="text-white" to="/create">New Project</NavLink></li>
               <li className="uk-visible@m "><a href="/" className="text-white"onClick={props.signOut}>Log Out</a></li>
               <div className="uk-navbar-item"><NavLink className="btn-avatar bg-pink-dark text-white" to="/">{ props.profile.initials}</NavLink></div>
            </ul>
      </div>
   )
}

const mapDispatchToProps = (dispatch) => {
   return{
		signOut : () => dispatch(signOut())
	}
}

export default connect(null,mapDispatchToProps)(SignedInLinks)