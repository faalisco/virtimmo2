import React from "react"


//images
import image1 from "../../../images/featured-image1.jpeg"
import image2 from "../../../images/featured-image2.jpeg"


import featuredStyles from "./featured.module.scss"
class Featured extends React.Component {
    render() {
        return (
            <div className={featuredStyles.wrap}>
                <div className={featuredStyles.container} >
                    <div className={featuredStyles.featuredImage}>
                        <img src={image1} alt="big house" srcset="" />
                    </div>
                    <div className={featuredStyles.featuredImage}>
                        <img src={image2} alt="" srcset="" />
                    </div>
                </div>
            </div>

        )
    }
}

export default Featured