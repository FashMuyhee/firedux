import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import SignedInLinks from './SignedInLink'
import SignedOutLinks from './SignedOutLink'
import { connect } from 'react-redux'

const Navbar = (props) => {
   const { auth,profile } = props
   const links = auth.uid ? <SignedInLinks profile={profile}/> : <SignedOutLinks />
   return (
      <div data-uk-sticky="media: 960" className="uk-navbar-container tm-navbar-container uk-sticky uk-active uk-sticky-below uk-sticky-fixed" style={{ 'position': 'fixed', 'top': 0, 'width': 1423, 'background': '#ff4081' }}>
         <div className="uk-container uk-container-expand">
            <div className="uk-offcanvas-content">
               <nav className="uk-navbar" uk-navbar="true" style={{ 'position': 'relative', 'zIndex': '980' }}>
                  <div className="uk-navbar-left">
                     <Link className="uk-navbar-toggle uk-hidden@m" data-uk-navbar-toggle-icon="true" uk-icon="icon:menu" uk-toggle="target: #offcanvas-overlay" to="#"></Link>
                     <Link className="uk-navbar-item uk-logo text-white" to="/">FireDux</Link>
                  </div>
                  <div className="uk-navbar-right">
                     {links}
                  </div>
               </nav>
               <div id="offcanvas-overlay" uk-offcanvas="mode:push;overlay: true">
                  <div className="uk-offcanvas-bar">
                     <button className="uk-offcanvas-close" type="button" data-uk-close="true"></button>
                     <ul className="uk-list uk-list-divider uk-margin-small-top">
                        {
                           auth.uid ? 
                              <div>
                                 <li><NavLink className="text-white no-text-deco" to="/create">New Project</NavLink></li>
                                 <li><NavLink className="text-white no-text-deco" to="/">Log Out</NavLink></li>
                              </div>
                           :<div>
                              <li><NavLink className="text-white no-text-deco" to="/signup">Sign Up</NavLink></li>
                              <li><NavLink className="text-white no-text-deco" to="/signin">Sign In</NavLink></li>
                           </div>
                        }

                     </ul>

                  </div>
               </div>

            </div>

         </div>
      </div>
   )
}

const mapStateToProps = (state) => {
   console.log(state)
   return {
      auth: state.firebase.auth,
      profile: state.firebase.profile
   }
}

export default connect(mapStateToProps)(Navbar)