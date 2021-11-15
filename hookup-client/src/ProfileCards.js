
import {React, useState, useEffect} from 'react'
// npm package
import TinderCard from 'react-tinder-card'
// design
import './ProfileCards.css'

import axios from './Axios/axios.js'

function ProfileCards() {
    const [people,setPeople] = useState([]);

    /**
     * @name useEffect for ProfileCards component
     * @param function
     * @param trackedVar
     */

    useEffect(() => { 
        // run this piece of code once
        async function fetchData () {
             const request = await axios.get("/hookup/cards");
             console.log(request.data);
             setPeople(request.data);
         }


         fetchData();
    }, [])

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
