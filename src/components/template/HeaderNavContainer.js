import React  from 'react';
// import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
// import Spinner from '../common/Spinner';


export const HeaderNavContainer = ({apiCallsInProgress}) => {
    return (
        <nav className="navbar navbar-toggleable-sm bg-info navbar-inverse">
            <div className="container">
                <button className="navbar-toggler" data-toggle="collapse" data-target="#mainNav">
                    <span className="navbar-toggler-icon" />
                </button>

                <div className="collapse navbar-collapse" id="mainNav">
                    <div className="navbar-nav">
                        <NavLink className="nav-item nav-link" exact activeClassName="active" to="/">Home</NavLink>
                        <NavLink className="nav-item nav-link" activeClassName="active" to="/postCollection">Posts</NavLink>
                        <NavLink className="nav-item nav-link" activeClassName="active" to="/About">About</NavLink>

                        {/* <span className="ml-5">
                            {apiCallsInProgress > 0 }
                        </span> */}
                    </div>
                </div>
            </div>
        </nav>
    );
};




// HeaderNavContainer.propTypes = {
//     apiCallsInProgress: PropTypes.number.isRequired
// };



// const mapStateToProps = state => ({
//     apiCallsInProgress: state.apiReducer.apiCallsInProgress
// });



// export default connect(mapStateToProps)(HeaderNavContainer);
export default  (HeaderNavContainer);


