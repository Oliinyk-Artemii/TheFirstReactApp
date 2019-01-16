import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Contact extends Component {
    render () {
        return(
            <div className="contact-body">
            	<Grid className="contact-grid">
            		<Cell col={6}>
            			<h2>Artem Oleynik</h2>
            		</Cell>
            		<img 
            			src="https://dentalogica-practice.co.uk/wp-content/uploads/2017/05/avatar-male-300x300.png"
                        alt="avatar"
                        style={{height: '250px'}}
            		/>
            		<Cell col={6}>half page</Cell>
            	</Grid>
            </div>
        )
    }
}

export default Contact;