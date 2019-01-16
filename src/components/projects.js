import React, { Component } from 'react';
import {Tab, Tabs, Card, CardTitle, CardActions, Button, CardMenu, IconButton, CardText, Cell, Grid} from "react-mdl";


class Projects extends Component {
    constructor(props) {
        super(props)
        this.state = { activeTab: 0 };
    }

    toggleCategories() {
        if(this.state.activeTab === 0) {
            return(
                <Grid>
                    <Cell col={4}>
                        <Card shadow={0} style={{minWidth: '350px', margin: '5em'}}>
                            <CardTitle style={{color: 'white', height: '176px', background: 'url(https://reactjs.org/logo-og.png) center / cover'}}>
                                Project #1
                            </CardTitle>
                            <CardText>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Mauris sagittis pellentesque lacus eleifend lacinia...
                            </CardText>
                            <CardActions border>
                                <Button colored>GitHub</Button>
                                <Button colored>View</Button>
                            </CardActions>
                            <CardMenu style={{color: '#fff'}}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>
                    </Cell>

                    <Cell col={4}>
                        <Card shadow={0} style={{minWidth: '350px', margin: '5em'}}>
                            <CardTitle style={{color: 'white', height: '176px', background: 'url(https://reactjs.org/logo-og.png) center / cover'}}>
                                Project #1
                            </CardTitle>
                            <CardText>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Mauris sagittis pellentesque lacus eleifend lacinia...
                            </CardText>
                            <CardActions border>
                                <Button colored>GitHub</Button>
                                <Button colored>View</Button>
                            </CardActions>
                            <CardMenu style={{color: '#fff'}}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>
                    </Cell>
                </Grid>
            )
        }else if(this.state.activeTab === 1){
            return(
                <div><h1>Java Projects</h1></div>
            )
        }else if(this.state.activeTab === 2) {
            return(
                <h1>HTML/CSS Projects</h1>
            )
        }
    }

    render () {
        return(
            <div>
                <div className="category-tabs">
                    <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                        <Tab>React</Tab>
                        <Tab>Java</Tab>
                        <Tab>HTML/CSS</Tab>
                    </Tabs>


                    <Grid>
                        <Cell col={12}>
                            {this.toggleCategories()}
                        </Cell>
                    </Grid>
                </div>
            </div>
        )
    }
}

export default Projects;