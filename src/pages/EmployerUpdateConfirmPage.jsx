import React, { Component } from 'react'
import axios from 'axios'
import JobAds from '../pages/JobAds'
import { withRouter } from "react-router";

import { useHistory, useParams } from 'react-router-dom'

import { Form, Input, TextArea, Button, Select } from 'semantic-ui-react'
import WaitingEmployerUpdate from './WaitingEmployerUpdate';


class EmployerUpdateConfirmPage extends Component {


  
    constructor(props) {
        super(props)

        this.state = {
            employerUpdateId : '',
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
            .put('http://localhost:8080/api/employer/verifyUpdate', this.state, {
                params: {
                    employerUpdateId : this.state.employerUpdateId ,staffId: this.state.staffId

                }

            }
            
            
            ) 


    }
    render() {
        const { employerUpdateId  } = this.state
        const { staffId } = this.state

        return (
            <div>







                <Form onSubmit={this.submitHandler}>
                


                        <Form.Field
                        control={Input}
                        label='Güncelleme ID'
                        placeholder="Lütfen Bekleyen Güncellemenin ID'sini girin."
                        onChange={this.changeHandler}
                        type="text"
                        name="employerUpdateId"
                        value={employerUpdateId}
                        onChange={this.changeHandler}
                    />


<Form.Field
                        control={Input}
                        label='Personel ID'
                        placeholder="Lütfen Kendi ID'nizi girin (1),(2)"
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
                        color="green"

                    />



                </Form>
            </div>
        )
    }
}

export default EmployerUpdateConfirmPage