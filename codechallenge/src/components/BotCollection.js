import React, { useState } from 'react'
import Bot from './Bot'
import { Row, Col } from 'react-bootstrap'
import YourBotArmy from './YourBotArmy'

const BotCollection = (props) => {
    const [data, setData] = useState([])
    const [added, setAdded] = useState([])



    let botData = props.data





    return (
        <div className='botCollection'>
            {if(added.length !== 0 ){
                return(<h3>Your army</h3>)
            }
            }
            <YourBotArmy selected={added} />
            <Row>


                {
                    botData.map(element => {

                        const handleClick = () => {
                            if (!added.includes(element)) {
                                let botArray = [...added, element]
                                setAdded(botArray)
                                console.log(added)

                            }

                        }


                        return (
                            <div className='col-3' >
                                <Bot key={element.id} avatar={element.avatar_url} bot_class={element.bot_class} catchphrase={element.catchphrase} health={element.health} armor={element.armor} damage={element.damage} name={element.name} />
                                <button onClick={handleClick}>Add to your army</button>


                            </div>
                        )

                    })
                }

            </Row>
        </div>
    )

}

export default BotCollection
