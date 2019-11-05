import React from "react"

import Staff from "../cards/personel/personnel"

import agent from "../../../images/agent1.jpg"

import agentsStyles from "./agents.module.scss"
class Staffs extends React.Component {
    render() {
        return (
            <div className={agentsStyles.wrapper}>
                <h2 className={agentsStyles.title}>OUR AGENTS</h2>


                <div className={agentsStyles.staffs}>

                    <div className={agentsStyles.staff}>
                        <Staff
                            image={agent}
                            name="Diya"
                            position="CEO Faal Construction"
                            phone="+220-3945106"
                            info="I live in busumbala i have been with Virtimmo for quite a while now"
                            facebook="#!"
                            email="#!"
                        />
                    </div>
                    <div className={agentsStyles.staff}>
                        <Staff
                            image={agent}
                            name="Diya"
                            position="CEO Faal Construction"
                            phone="+220-3945106"
                            info="I live in busumbala i have been with Virtimmo for quite a while now"
                            facebook="#!"
                            email="#!"
                        />
                    </div>
                    <div className={agentsStyles.staff}>
                        <Staff
                            image={agent}
                            name="Diya"
                            position="CEO Faal Construction"
                            phone="+220-3945106"
                            info="I live in busumbala i have been with Virtimmo for quite a while now"
                            facebook="#!"
                            email="#!"
                        />
                    </div>
                    <div className={agentsStyles.staff}>
                        <Staff
                            image={agent}
                            name="Diya"
                            position="CEO Faal Construction"
                            phone="+220-3945106"
                            info="I live in busumbala i have been with Virtimmo for quite a while now"
                            facebook="#!"
                            email="#!"
                        />
                    </div>

                </div>
            </div>
        )
    }
}

export default Staffs