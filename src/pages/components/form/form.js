import React from "react"

import formStyles from "./form.module.scss"

class Form extends React.Component {
    render() {
        return (
            <form method="post" action="https://formspree.io/mzbbrdgn" className={formStyles.form}>
                <label for="pName" className={formStyles.formItem}>
                    <span>
                        Name(required):
                    </span>
                    <input type="text" name="name" id="pName" required />
                </label>

                <label for="pEmail" className={formStyles.formItem}>
                    <span>
                        Email:
                    </span>
                    <input type="email" name="_replyto" id="pEmail" />
                </label>

                <label for="pTel" className={formStyles.formItem}>
                    <span>
                        Tel(required):
                    </span>
                    <input type="tel" name="tel" id="pTel" required />
                </label>

                <label for="pMessage" className={formStyles.formItem}>
                    <span>
                        Message:
                    </span>
                    <textarea name="message" id="pMessage">say some something to us and we will surely help you</textarea>
                </label>

                <button type="submit" className={formStyles.formButton}>Send massage</button>

                {
                    // for the thank you page after form submission
                }
                <input type="hidden" name="_next" value="https://github.com/faalisco/virtimmo2" />

            </form>
        )
    }
}

export default Form