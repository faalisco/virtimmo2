import React from "react"


import Layout from "./layout/layout"
import Agents from "./components/agents/agents"


import aboutStyles from "./about.module.scss"
class About extends React.Component {
    render() {
        return (
            <Layout>
                <main className={aboutStyles.wrapper}>
                    <h1 className={aboutStyles.title}>
                        About Us
                    </h1>
                    <p>
                        VIRTIMMO est une agence immobilière qui est essentiellement au servir d’intermédiaire entre ceux qui sont à la recherche de logements et ceux qui en vendent ou en louent. Elle intervient  à toutes les étapes de la transaction immobilière, allant de la recherche du bien à la conclusion du contrat de vente ou de bail. Elle se positionne également  en conseiller pour éclairer les choix de ses clients. De part sa matricule de N.I.N.E.A: 007135933, sa profession est bien réglementée et reconnue par les services étatique d'avoir rempli les conditions nécessaires  pour exercer le métier  d'agence immobilière.
                    </p>

                    <p>
                        La détention de cette accréditation justifie que VIRTIMMO dispose des compétences requises pour effectuer des opérations immobilières au nom  de l'État ses clients.
                    </p>

                    <p>
                        Ses missions s’étendent aux transactions immobilières qu’effectuent, d’un côté, les vendeurs et les acheteurs, et de l’autre, les bailleurs et les locataires. Elle joue un rôle d’intermédiaire.
                    </p>

                    <p>
                        Dans le cas d’un particulier qui souhaite céder une maison ou un appartement, il peut confier la vente à VIRTIMMO. Celle-ci se chargera d’estimer la valeur du bien avant de publier des annonces. C’est à nous qu'il  revient de trouver des acquéreurs, de procéder aux visites de site et d’effectuer toutes les formalités relatives à la cession du bien.
                    </p>

                    <p>
                        En outre, VIRTIMMO joue également un rôle de conseiller. Il peut faire bénéficier de son expertise dans différents domaines: technique, financier, juridique...
                    </p>

                    <p>
                        En contrepartie des services que vous avez reçus de VIRTIMMO, vous devrez rémunérer notre agence qui a pris en charge la vente ou la location de votre bien. Ces frais d’agence peuvent être déterminés en fonction de la valeur du montant de la transaction.
                    </p>

                    <Agents />

                </main>
            </Layout>
        )
    }
}

export default About