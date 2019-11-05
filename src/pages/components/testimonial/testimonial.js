import React from "react"

import testimonialStyles from "./testimonial.module.scss"
import image from "../../../images/agent1.jpg"

class Testimonial extends React.Component {
    render() {
        return (
            <div className={testimonialStyles.testimonial}>
                <div className={testimonialStyles.testimonialWrap} >
                    <div className={testimonialStyles.testimonialItem}>
                        <img src={image} alt="" />
                        <blockquote>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, suscipit minus, cumque exercitationem sapiente labore, saepe ratione accusamus explicabo Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat nisi deserunt iste et similique aut. Possimus ipsam tempore magnam quia ab aspernatur, veritatis quidem explicabo ea, deleniti, repellat excepturi autem!
                        </blockquote>
                        <span>Amadou a Bah</span>
                        <span>CEO SkyNet</span>
                    </div>

                    <div className={testimonialStyles.testimonialItem}>
                        <img src={image} alt="" />
                        <blockquote>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, suscipit minus, cumque exercitationem sapiente labore, saepe ratione accusamus explicabo Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat nisi deserunt iste et similique aut. Possimus ipsam tempore magnam quia ab aspernatur, veritatis quidem explicabo ea, deleniti, repellat excepturi autem!
                        </blockquote>
                        <span>Lamin Jarju</span>
                        <span>CEO Jarju Kunda Motors</span>
                    </div>

                    <div className={testimonialStyles.testimonialItem}>
                        <img src={image} alt="" />
                        <blockquote>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, suscipit minus, cumque exercitationem sapiente labore, saepe ratione accusamus explicabo Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat nisi deserunt iste et similique aut. Possimus ipsam tempore magnam quia ab aspernatur, veritatis quidem explicabo ea, deleniti, repellat excepturi autem!
                        </blockquote>
                        <span>World Boss</span>
                        <span>CEO Sky Power international</span>
                    </div>

                </div>
            </div>
        )
    }
}

export default Testimonial