import React from "react"

import Navigation from "../navigation/navigation"
import Menu from "../menu/menu"

import headerStyles from "./header.module.scss"
import logo from "../../../images/virtimmo.jpg"

class Header extends React.Component {

    openNav = () => {
        //better way to do the stuff
        this.menu.classList.toggle("open");
        this.nav.classList.toggle("open");
        this.nav.classList.toggle("close");
    }

    render() {
        return (
            <header className={headerStyles.header} >
                <div className={headerStyles.logo}>
                    <img src={logo} alt="logo" />
                </div>
                <Menu menuRef={(input) => { this.menu = input }}
                    menuClick={this.openNav} />
                <Navigation
                    navRef={(el) => { this.nav = el }} />
            </header>
        )
    }
}

export default Header