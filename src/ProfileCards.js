
import {React, useState} from 'react'
// npm package
import TinderCard from 'react-tinder-card'
// design
import './ProfileCards.css'

function ProfileCards() {
    const [people,setPeople] = useState([
        {
            name: "Renee Zellweger",
            picture: "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTE1ODA0OTcxODMzMTk4MDkz/renee-zellweger-9540674-1-402.jpg"
        },
        {
            name: "Lucy Hale",
            picture: "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTU1MTI3NDQ5MzI2MjAwNDE3/lucy-hale-launches-mark-spring-beauty-collection-at-the-london-hotel-on-april-8-2015-in-west-hollywood-california-photo-by-rob-loud_wireimage-square.jpg"
        },
        {
            name: "Elon Musk",
            picture: "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTY2MzU3Nzk2OTM2MjMwNTkx/elon_musk_royal_society.jpg"
        },
        {
            name: "Justin Bieber",
            picture: "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTM2OTI2NTY2Mjg5NTE2MTI5/justin_bieber_2015_photo_courtesy_dfree_shutterstock_348418241_croppedjpg.jpg"
        },
        {
            name: "Cedric Richmond",
            picture: "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTc3NDE4NzMyNTE0MDU5NDI1/cedric-richmond_official_photo_500x500.jpg"
        }
    ])
    const swiped = (direction,nameToDelete) => {
        console.log("removing .."+ nameToDelete)
    }
    const outOfFrame = (name) => {
        console.log(name + "left the screen")
    }
    return (
        <div className="profileCards">
            <div className="profileCards__container">
                {people.map((person) => (
                    <TinderCard 
                        className="swipe"
                        key={person.name}
                        preventSwipe = {["up","down"]}
                        onSwipe={(dir) => swiped(dir,person.name)}
                        onCardLeftScreen = {() => outOfFrame(person.name)}
                        >
                            <div
                            className="card"
                            style={{ backgroundImage: `url(${person.picture})`}}>
                                <h3>{person.name}</h3>
                            </div>

                    </TinderCard>
                ))}
            </div>          
        </div>
    )
}

export default ProfileCards
