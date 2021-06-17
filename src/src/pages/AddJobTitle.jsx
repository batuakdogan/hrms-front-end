import React, { Component } from 'react'
import axios from 'axios'
import { Form, Input, TextArea, Button, Select } from 'semantic-ui-react'

class PostForm extends Component {
	constructor(props) {
		super(props)

		this.state = {
			title: '',
		}
	}

	changeHandler = e => {
		this.setState({ [e.target.name]: e.target.value })
	}

	submitHandler = e => {
		e.preventDefault()
		console.log(this.state)
		axios
			.post('http://localhost:8080/api/jobtitle/add', this.state)
			.then(response => {
				console.log(response)
			})
			.catch(error => {
				console.log(error)
			})
	}
	render() {
		const { title } = this.state
		return (
			<div>
				<Form onSubmit={this.submitHandler}>
					<Form.Field
						control={Input}
						label='İş'
						placeholder='İş Ekleyin'
						onChange={this.changeHandler}
						type="text"
						name="title"
						value={title}
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

export default PostForm










{/* <Form.Field
						control={Input}
						label='Şehir'
						placeholder='Şehir Ekleyin'
						onChange={this.changeHandler}
						type="text"
						name="city"
						value={data.cityName}
						onChange={this.changeHandler}


					/> */}

