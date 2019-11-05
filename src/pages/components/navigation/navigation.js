import React from "react"
import { Link } from "gatsby"

import "./navigation.scss"

class Navigation extends React.Component {
    render() {
        return (
            <div className="nav-wrap close"
                ref={this.props.navRef}
            >
                <div className="rebound">
                    <small>
                        &copy; VIRTIMMO 2019.
                </small>
                </div>

                <nav className="navigation">
                    <ul className="nav-items">
                        <li><Link to="/" className="nav-item" activeClassName="active">Home</Link></li>
                        <li><Link to="/about/" className="nav-item" activeClassName="active">About</Link></li>
                        <li><Link to="/team/" className="nav-item" activeClassName="active" >Team</Link></li>
                        <li><Link to="/contact/" className="nav-item" activeClassName="active">Contact</Link></li>
                        <li><Link to="/properties/" className="nav-item" activeClassName="active">Properties</Link></li>
                        <li><Link to="/blog/" className="nav-item" activeClassName="active">Blogs</Link></li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Navigation