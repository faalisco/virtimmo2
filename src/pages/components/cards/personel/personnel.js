import React from "react"

import cardStyles from "./personnel.module.scss"

import facebook from "../../../../images/facebookIcon.png"
import instagram from "../../../../images/emailIcon.png"
class SimpleCard extends React.Component {
    render() {
        return (
            <div className={cardStyles.card}>
                <div className={cardStyles.imageWrap}>
                    <img src={this.props.image} alt="" />
                </div>
                <span className={cardStyles.name}> {this.props.name} </span>
                <span className={cardStyles.position}>{this.props.position} </span>
                <span className={cardStyles.phone}> {this.props.phone} </span>
                <p className={cardStyles.info}> {this.props.info}</p>
                <ul className={cardStyles.socials}>
                    <li className={cardStyles.socialItem}> <a href={this.props.facebook}>
                        <img src={facebook} alt="" />
                    </a></li>
                    <li className={cardStyles.socialItem}> <a href={this.props.email}>
                        <img src={instagram} alt="" />
                    </a></li>
                </ul>
            </div>
        )
    }
}

export default SimpleCard
