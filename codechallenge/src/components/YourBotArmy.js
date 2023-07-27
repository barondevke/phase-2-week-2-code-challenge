import React, { useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import Bot from './Bot'

const YourBotArmy = (props) => {
    const [newBots, setNewBots] = useState([])
    let selectedData = props.selected
    let newArray = []

    selectedData.forEach(element => {
        newArray.push(<Bot key={element.id} avatar={element.avatar_url} bot_class={element.bot_class} catchphrase={element.catchphrase} health={element.health} armor={element.armor} damage={element.damage} name={element.name} />
        )






    })

    return (
        <div className='botCollection'>
            <Row>
                {newArray.map((element) => {
                    return (
                        <div className='col-3'>
                            {element}
                        </div>
                    )
                })}


            </Row>
        </div>
    )
}

export default YourBotArmy
