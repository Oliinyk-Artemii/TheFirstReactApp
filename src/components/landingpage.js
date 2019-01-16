import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class LandingPage extends Component {
    render () {
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img src="https://dentalogica-practice.co.uk/wp-content/uploads/2017/05/avatar-male-300x300.png"
                             alt="avatar"
                             className="avatar-img"
                        />

                        <div className="banner-text">
                            <h1>Full Stack Web Developer</h1>

                            <hr/>

                            <p>HTML/CSS | Bootstrap | JavaScript | React | NodeJS | MongoDB/MySQL | Java</p>

                            <div className="social">

                                {/* facebook */}
                                <a href="https://www.facebook.com/profile.php?id=100010285363140" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-facebook-square" aria-hidden="true" />
                                </a>

                                {/* github */}
                                <a href="https://github.com/Artem-Oleynik" >
                                    <i className="fa fa-github" aria-hidden="true" />
                                </a>

                                {/* telegram */}
                                <a href="http://t.me/Artem-Oleynik" >
                                    <i className="fa fa-telegram" aria-hidden="true" />
                                </a>

                                {/* skype */}
                                <a href="https://join.skype.com/invite/hAIsL8wmAuT2" >
                                    <i className="fa fa-skype" aria-hidden="true" />
                                </a>
                            </div>
                        </div>


                    </Cell>

                </Grid>
            </div>
        )
    }
}

export default LandingPage;