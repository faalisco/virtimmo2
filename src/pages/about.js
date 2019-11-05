import React from "react"


import Layout from "./layout/layout"
import Agents from "./components/agents/agents"


import aboutStyles from "./about.module.scss"
class About extends React.Component {
    render() {
        return (
            <Layout>
                <main className={aboutStyles.wrapper}>
                    <h1 className={aboutStyles.title}>
                        About Us
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit tempora dolorem atque nesciunt? Sit laboriosam velit officia aperiam, ab modi sunt necessitatibus provident, harum earum magni! Dolores quasi animi nostrum ut laboriosam
                    </p>

                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit tempora dolorem atque nesciunt? Sit laboriosam velit officia aperiam, ab modi sunt necessitatibus provident, harum earum magni! Dolores quasi animi nostrum ut laboriosam
                    </p>

                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit tempora dolorem atque nesciunt? Sit laboriosam velit officia aperiam, ab modi sunt necessitatibus provident, harum earum magni! Dolores quasi animi nostrum ut laboriosam
                    </p>

                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit tempora dolorem atque nesciunt? Sit laboriosam velit officia aperiam, ab modi sunt necessitatibus provident, harum earum magni! Dolores quasi animi nostrum ut laboriosam
                    </p>

                    <Agents />

                </main>
            </Layout>
        )
    }
}

export default About