import React from "react"

import Layout from "./layout/layout"
import Props from "./components/cards/card"



import image1 from "../images/featured-image1.jpeg"
import image2 from "../images/featured-image2.jpeg"
import image3 from "../images/featured-image3.jpeg"
import image4 from "../images/featured-image4.jpeg"
import image5 from "../images/featured-image5.jpeg"




import propertyStyles from "./properties.module.scss"

class Property extends React.Component {
    render() {
        return (
            <Layout >

                <div className={propertyStyles.layout}>
                    <h1>
                        All Our Properties
                </h1>

                    <div className={propertyStyles.property}>

                        <Props
                            type="Sale"
                            imge={image1}
                            pay="GMD200 000 / per year"
                            dcript="house is located at the heart of bijilo with good furniture and ventilation"
                        />

                        <Props
                            type="Rent"
                            imge={image4}
                            pay="GMD200 000 / per year"
                            dcript="house is located at the heart of bijilo with good furniture and ventilation"
                        />

                        <Props
                            type="Rent"
                            imge={image3}
                            pay="GMD200 000 / per year"
                            dcript="house is located at the heart of bijilo with good furniture and ventilation"
                        />

                        <Props
                            type="Rent"
                            imge={image5}
                            pay="GMD200 000 / per year"
                            dcript="house is located at the heart of bijilo with good furniture and ventilation"
                        />

                        <Props
                            type="Rent"
                            imge={image3}
                            pay="GMD200 000 / per year"
                            dcript="house is located at the heart of bijilo with good furniture and ventilation"
                        />

                        <Props
                            type="Rent"
                            imge={image1}
                            pay="GMD200 000 / per year"
                            dcript="house is located at the heart of bijilo with good furniture and ventilation"
                        />

                        <Props
                            type="Sale"
                            imge={image5}
                            pay="GMD200 000 / per year"
                            dcript="house is located at the heart of bijilo with good furniture and ventilation"
                        />

                        <Props
                            type="Rent"
                            imge={image4}
                            pay="GMD200 000 / per year"
                            dcript="house is located at the heart of bijilo with good furniture and ventilation"
                        />

                        <Props
                            type="Sale"
                            imge={image2}
                            pay="GMD200 000 / per year"
                            dcript="house is located at the heart of bijilo with good furniture and ventilation"
                        />

                    </div>
                </div>
            </Layout>
        )
    }
}

export default Property