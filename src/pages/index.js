import React from "react"


import Layout from "./layout/layout"
import Banner from "./components/featured/featured"
import Prop from "./components/properties/property"
import Testimonial from "./components/testimonial/testimonial"
import Agents from "./components/agents/agents"

const HomePage = () => {
    return (
        <Layout>
            <Banner />
            <Prop />
            <Agents />
            <Testimonial />

        </Layout>
    )
}

export default HomePage