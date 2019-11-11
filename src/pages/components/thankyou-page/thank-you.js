import React from "react"

import Layout from "../../layout/layout"

import thankStyles from "./thank-you.module.scss"
class Thank extends React.Component {
    render() {
        return (
            <Layout>
                <div className={thankStyles.thank}>
                    <h1>
                        Thank You For Messaging Us
                    </h1>

                    <p>
                        Tell The sender a nice thing to make they feel good that you will get back to them
                    </p>

                </div>
            </Layout>
        )
    }
}

export default Thank