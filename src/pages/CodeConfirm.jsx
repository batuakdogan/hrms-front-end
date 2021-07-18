import React, { Component } from 'react'
import axios from 'axios'
import { withRouter } from "react-router";

import { useHistory, useParams } from 'react-router-dom'

import { Form, Input, TextArea, Button, Select } from 'semantic-ui-react'


class CodeConfirm extends Component {
	constructor(props) {
		super(props)

		this.state = {
			code: ''
		}
	}

	changeHandler = e => {
		this.setState({ [e.target.name]: e.target.value })
	}


	submitHandler = e => {
		e.preventDefault()
		console.log(this.state)
		axios
			.get('http://localhost:8080/api/activationcode/active/01234abc',this.state ,{
               
			})
            console.log(this.state.code)
			
	}

	render() {
		const { code } = this.state
		return (
			<div>
				<Form onSubmit={this.submitHandler}>
					<Form.Field
						control={Input}
						label='İş İlanı ID'
						placeholder="Lütfen İş İlanının ID'sini girin."
						onChange={this.changeHandler}
						type="text"
						name="code"
						value={code}
						onChange={this.changeHandler}
					/>
					<Form.Field
						id='form-button-control-public'
						control={Button}
						content='Onayla'
						
						/>
												

						

				</Form>
			</div>
		)
	}
}
export default CodeConfirm
