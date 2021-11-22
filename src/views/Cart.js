import React, { Component } from 'react'
import { Card } from 'react-bootstrap'

export default class Cart extends Component {
    render() {
        return (
            <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', textAlign: 'center'}}>
                <p className="form-control" style={{fontSize: '50px', fontWeight: 'bold'}}>Your Items</p>
                {this.props.myItems.map(
                    item => (
                        <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={item.image} height='300px'/>
                        <Card.Body>
                            <Card.Title style={{fontWeight: 'bold'}}>{item.title}</Card.Title>
                            <Card.Text style={{fontWeight: 'bold'}}>{item.category}</Card.Text>
                            <Card.Text>
                            {item.description}
                            </Card.Text>
                            <Card.Text>${item.price}</Card.Text>
                        </Card.Body>
                        </Card>
                    )
                )}
            </div>
        )
    }
}
