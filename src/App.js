import React, { Component } from 'react';
import './App.css';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import {Layout, Header, Navigation, Drawer, Content, ProgressBar} from 'react-mdl';
import Main from "./components/main";
import { Link } from 'react-router-dom';


class App extends Component {
    state = {
        loading: true
    };

    componentDidMount() {
        // the setTimeout just simulates an async action, after which the component will render the content
        setTimeout(() => this.setState({ loading: false }), 3000);
    }

  render() {
      const { loading } = this.state;

      if(loading) {
          return <div style={{display: "flex", justifyContent: "center", alignItems: "center", height: "100vh"}}><ProgressBar indeterminate /></div>;
      }


      return (
        <div className="demo-big-content">
            <Layout>
                <Header className="header-color" title="Title" scroll>
                    <Navigation>
                        <Link to="/">Home</Link>
                        <Link to="/resume">Resume</Link>
                        <Link to="/aboutme">About Me</Link>
                        <Link to="/contact">Contact</Link>
                        <Link to="/projects">Projects</Link>
                    </Navigation>
                </Header>
                <Drawer title="Title">
                    <Navigation>
                        <Link to="/">Home</Link>
                        <Link to="/resume">Resume</Link>
                        <Link to="/aboutme">About Me</Link>
                        <Link to="/contact">Contact</Link>
                        <Link to="/projects">Projects</Link>
                    </Navigation>
                </Drawer>
                <Content>
                    <div className="page-content" />
                    <Main/>
                </Content>
            </Layout>
        </div>
      );
  }
}

export default App;
