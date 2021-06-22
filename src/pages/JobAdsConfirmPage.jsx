import React, { Component } from 'react'
import axios from 'axios'
import { withRouter } from "react-router";

import { useHistory, useParams } from 'react-router-dom'

import { Form, Input, TextArea, Button, Select } from 'semantic-ui-react'


class JobAdsConfirmPage extends Component {
	constructor(props) {
		super(props)

		this.state = {
			id: ''
		}
	}

	changeHandler = e => {
		this.setState({ [e.target.name]: e.target.value })
	}


	submitHandler = e => {
		e.preventDefault()
		console.log(this.state)
		axios
			.post('http://localhost:8080/api/jobAdvertisements/confirmJobAdById',this.state,{
				params:{
					id: this.state.id
				}
			})
			
	}
	render() {
		const { id } = this.state
		return (
			<div>
				<Form onSubmit={this.submitHandler}>
					<Form.Field
						control={Input}
						label='İş'
						placeholder='İş Ekleyin'
						onChange={this.changeHandler}
						type="text"
						name="id"
						value={id}
						onChange={this.changeHandler}
					/>
					<Form.Field
						id='form-button-control-public'
						control={Button}
						content='Ekle'
						
						/>
						

				</Form>
			</div>
		)
	}
}

export default JobAdsConfirmPage