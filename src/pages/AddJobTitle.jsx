import React, { Component } from 'react'
import axios from 'axios'
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
		const {title} = this.state
		return (
			<div>
				<form onSubmit={this.submitHandler}>
					
					<div>
				<font color="red" size="4">Lütfen İş Ekleyin</font><br/> <br/>
						<input
						
							type="text"
							name="title"
							value={title}
							onChange={this.changeHandler}
						/>
					</div>
					
					<button type="submit">Ekle</button>
				</form>
			</div>
		)
	}
}

export default PostForm