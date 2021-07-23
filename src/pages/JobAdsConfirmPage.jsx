import React, { Component } from 'react'
import axios from 'axios'
import JobAds from '../pages/JobAds'
import { withRouter } from "react-router";

import { useHistory, useParams } from 'react-router-dom'

import { Form, Input, TextArea, Button, Select } from 'semantic-ui-react'


class JobAdsConfirmPage extends Component {


  
    constructor(props) {
        super(props)

        this.state = {
            jobAdId: '',
            staffId: ''
            
        }
    }

    changeHandler = e => {
        this.setState({ [e.target.name]: e.target.value })
    }


    submitHandler = e => {
        e.preventDefault()
        console.log(this.state)
        axios
            .post('http://localhost:8080/api/jobAd/setActive', this.state, {
                params: {
                    jobAdId: this.state.jobAdId,staffId: this.state.staffId

                }

            }
            
            
            )

    }
    render() {
        const { jobAdId } = this.state
        const { staffId } = this.state

        return (
            <div>







                <Form onSubmit={this.submitHandler}>
                    <Form.Field
                        control={Input}
                        label='İş İlanı ID'
                        placeholder="Lütfen İş İlanının ID'sini girin.    "
                        onChange={this.changeHandler}
                        type="text"
                        name="jobAdId"
                        value={jobAdId}
                        onChange={this.changeHandler}
                    />

                    <Form.Field
                        control={Input}
                        label='Personel ID'
                        placeholder="Lütfen Kendi ID'nizi girin."
                        onChange={this.changeHandler}
                        type="text"
                        name="staffId"
                        value={staffId}
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

export default JobAdsConfirmPage