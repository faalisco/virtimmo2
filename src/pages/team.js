import React from "react"

import Layout from "./layout/layout"
import Agents from "./components/agents/agents"
import Staffs from "./components/staffs/staffs"

import teamStyles from "./team.module.scss"
class Team extends React.Component {
    render() {
        return (
            <Layout>

                <main className={teamStyles.wrapper}>
                    <h1 className={teamStyles.title}>
                        Our Able Staffs And Agents
                    </h1>
                    <div>
                        <Staffs />
                    </div>
                    <div>
                        <Agents />
                    </div>
                </main>

            </Layout>
        )
    }
}

export default Team