import React from "react"

import simpleCardStyles from "./card.module.scss"

class SimpleCard extends React.Component {
    render() {
        return (
            <div className={simpleCardStyles.card}>
                <div className={simpleCardStyles.imageCont}><img src={this.props.imge} alt="" /></div>

                <span className={simpleCardStyles.text}>
                    {this.props.type}
                </span>

                <div className={simpleCardStyles.descript}>
                    <p>{this.props.dcript} </p>
                    <span>{this.props.pay}</span>
                </div>
            </div>
        )
    }
}

export default SimpleCard