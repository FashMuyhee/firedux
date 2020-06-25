import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedOutLinks = () => {
   return (
      <div>
            <ul className="uk-navbar-nav">
               <li className="uk-visible@m "><NavLink className="text-white" to="/signup">Sign Up</NavLink></li>
               <li className="uk-visible@m "><NavLink className="text-white"  to="/signin">Sign In</NavLink></li>
            </ul>
      </div>
   )
}

export default SignedOutLinks