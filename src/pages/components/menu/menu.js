import React from "react"

import "./menu.scss"

class Menu extends React.Component {

    render() {

        return (
            <button className="menu"
                onClick={this.props.menuClick}>
                <span className="burger"
                    ref={this.props.menuRef}
                ></span>
            </button>
        )
    }

}


export default Menu
