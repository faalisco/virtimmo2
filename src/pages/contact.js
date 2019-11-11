import React from "react"


import Layout from "./layout/layout"
import Form from "./components/form/form"

import contactStyles from "./contact.module.scss"
class Contact extends React.Component {
    render() {
        return (
            <Layout>
                <div className={contactStyles.contact}>

                    <div className={contactStyles.contactInfo}>
                        <h1> Contact Us </h1>

                        <p>Say something about why your customers should contact you.</p>
                    </div>

                    <div className={contactStyles.contactForm}>
                        <Form />
                    </div>

                </div>
            </Layout>
        )
    }
}

export default Contact