import React, { Component } from 'react'
import axios from 'axios'
class PostForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            description: '',
            quota: '',
            appealExpirationDate: '',
            createdDate: '',
            minSalary: '',
            maxSalary: '',
            city: '',
            jobtitle: '',
            employer: '',



        }
    }

    changeHandler = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    submitHandler = e => {
        e.preventDefault()
        console.log(this.state)
        axios
            .post('http://localhost:8080/api/jobAdvertisements/add', this.state)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        const { description, quota, appealExpirationDate, createdDate, minSalary, maxSalary, city, jobtitle, employer } = this.state
        return (
            <div>
                <form onSubmit={this.submitHandler}>

                    <div>
                        <input
                            type="text"
                            name="description"
                            value={description}
                            onChange={this.changeHandler}
                        />
                    </div>

                    <div>
                        <input
                            type="text"
                            name="quota"
                            value={quota}
                            onChange={this.changeHandler}
                        />
                    </div> <div>
                        <input
                            type="text"
                            name="appealExpirationDate"
                            value={appealExpirationDate}
                            onChange={this.changeHandler}
                        />
                    </div> <div>
                        <input
                            type="text"
                            name="createdDate"
                            value={createdDate}
                            onChange={this.changeHandler}
                        />
                    </div> <div>
                        <input
                            type="text"
                            name="minSalary"
                            value={minSalary}
                            onChange={this.changeHandler}
                        />
                    </div> <div>
                        <input
                            type="text"
                            name="maxSalary"
                            value={maxSalary}
                            onChange={this.changeHandler}
                        />
                    </div> <div>
                        <input
                            type="text"
                            name="city"
                            value={city}
                            onChange={this.changeHandler}
                        />
                    </div> <div>
                        <input
                            type="text"
                            name="jobtitle"
                            value={jobtitle}
                            onChange={this.changeHandler}
                        />
                    </div> 
                    <div>
                        <input
                            type="text"
                            name="employer"
                            value={employer}
                            onChange={this.changeHandler}
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            name="employer"
                            value={employer.companyName}
                            onChange={this.changeHandler}
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            name="employer"
                            value={employer.email}
                            onChange={this.changeHandler}
                        />
                    </div>

                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default PostForm