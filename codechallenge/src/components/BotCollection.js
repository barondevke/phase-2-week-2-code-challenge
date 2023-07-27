import React, { useState } from 'react'
import Bot from './Bot'
import { Row, Col } from 'react-bootstrap'

const BotCollection = (props) => {
    const [data, setData] = useState([])
    const [added, setAdded] = useState([])

    let botArray = []
    let botData = props.data





    return (
        <div className='botCollection'>
            <Row>


                {
                    botData.map(element => {

                        return (<Bot avatar={element.avatar_url} bot_class={element.bot_class} catchphrase={element.catchphrase} health={element.health} armor={element.armor} damage={element.damage} name={element.name} />)

                    })
                }

            </Row>
        </div>
    )

}

export default BotCollection
