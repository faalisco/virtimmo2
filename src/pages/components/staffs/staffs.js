import React from "react"

import Staff from "../cards/personel/personnel"

import agent from "../../../images/agent1.jpg"

import staffsStyles from "./staffs.module.scss"
class Staffs extends React.Component {
    render() {
        return (
            <div className={staffsStyles.wrapper}>
                <h2 className={staffsStyles.title}>STAFFS</h2>


                <div className={staffsStyles.staffs}>

                    <div className={staffsStyles.staff}>
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
                    <div className={staffsStyles.staff}>
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
                    <div className={staffsStyles.staff}>
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
                    <div className={staffsStyles.staff}>
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