import React from 'react'
import ReactDom from 'react-dom'
import { Container, Col, Row } from 'react-bootstrap'

import List from './List'
import Details from './Detail'

class App extends React.Component{

    constructor(){
        super()
        this.state = {
            list: [
                {
                    name: "Time is running out",
                    author: "Muse"
                },
                {
                    name: "My Imaginary",
                    author: "Evanescence"
                },
                {
                    name: "Bitter end",
                    author: "Placebo"
                }
            ],
            bookSelected: null
        }
    }

    onBookSelected(book){
        this.setState({bookSelected: book})
    }

    render(){
        return(
            <Container>
                <Row>
                    <Col sm="6">
                        <List list={this.state.list} onBookSelected={(book) => this.onBookSelected(book)}></List>
                    </Col>
                    <Col sm="6">
                        <Details bookSelected={this.state.bookSelected}></Details>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default App 