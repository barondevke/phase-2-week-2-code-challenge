import React from 'react'
import { Row, Col } from 'react-bootstrap'

const Bot = (props) => {
    let imgSrc = props.avatar_url

    return (
        <div className='bot '>



            <div className='botImage'>
                <img src={props.avatar} alt='bot' />


            </div>

            <h3>{props.name}</h3>
            <p>{props.catchphrase}</p>
            <Row>
                <Col>
                    {props.health}  {props.damage}  {props.armor}

                </Col>

            </Row>

        </div>
    )
}

export default Bot
