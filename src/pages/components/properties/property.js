import React from "react"

//images 
import image1 from "../../../images/featured-image1.jpeg"
import image2 from "../../../images/featured-image2.jpeg"
import image3 from "../../../images/featured-image3.jpeg"
import image4 from "../../../images/featured-image4.jpeg"
import image5 from "../../../images/featured-image5.jpeg"


import Card from "../cards/card"
import propertyStyles from "./property.module.scss"

class Property extends React.Component {
    render() {
        return (
            <div className={propertyStyles.wrapper}>
                <h2>OUR LATEST PROPERTIES</h2>
                <div className={propertyStyles.property}>
                    <div className={propertyStyles.propertyItem}>
                        <Card
                            type="Sale"
                            imge={image1}
                            dcript="house is located at the heart of bijilo with good furniture and ventilation"
                            pay="D300,000 per/month"

                        />
                    </div>

                    <div className={propertyStyles.propertyItem}>
                        <Card
                            type="Sale"
                            imge={image2}
                            dcript="house is located at the heart of bijilo with good furniture and ventilation"
                            pay="D300,000 per/month"

                        />
                    </div>

                    <div className={propertyStyles.propertyItem}>
                        <Card
                            type="Sale"
                            imge={image3}
                            dcript="house is located at the heart of bijilo with good furniture and ventilation"
                            pay="D300,000 per/month"

                        />
                    </div>

                    <div className={propertyStyles.propertyItem}>
                        <Card
                            type="Sale"
                            imge={image4}
                            dcript="house is located at the heart of bijilo with good furniture and ventilation"
                            pay="D300,000 per/month"

                        />
                    </div>

                    <div className={propertyStyles.propertyItem}>
                        <Card
                            type="Sale"
                            imge={image5}
                            dcript="house is located at the heart of bijilo with good furniture and ventilation"
                            pay="D300,000 per/month"

                        />
                    </div>


                </div>
            </div>
        )
    }
}

export default Property