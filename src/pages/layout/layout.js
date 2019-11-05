import React from "react"


import Footer from "../components/footer/footer"
import Header from "../components/header/header"
import Meta from "../components/meta/meta"

import layoutStyles from "./layout.module.scss"

class Layout extends React.Component {
    render() {
        return (
            <>
                <Meta />
                <div className={layoutStyles.layout}>
                    <div className={layoutStyles.content}>
                        <Header />
                        {this.props.children}
                    </div>

                    <div>
                        <Footer />
                    </div>
                </div>
            </>
        )
    }
}

export default Layout