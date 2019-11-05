import React from "react"
import { Helmet } from "react-helmet"

class Meta extends React.Component {
    render() {
        return (
            <Helmet>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta http-equiv="X-UA-Compatible" content="ie=edge" />
                <title>Virtimmo Real Estate Agencies</title>
            </Helmet>
        )
    }
}

export default Meta