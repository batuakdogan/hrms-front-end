import React from 'react'
import { useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import {
    Card,
    Grid,
    Form,
    Button,
    Message,
  } from "semantic-ui-react";
import StaffService from '../../../services/StaffService'
import * as Yup from "yup";
import { useFormik } from "formik";
import { toast } from "react-toastify";

export default function StaffUpdate({email,firstName,lastName}) {
    

    let staffService = new StaffService()
    const { authItem } = useSelector((state) => state.auth);

    let [staff,setStaff] = useState([]);


    const staffUpdateSchema = Yup.object().shape({

        email: Yup.string().notRequired("Bu alan boş bırakılmaz").min(2,"En az 2 karakter uzunlugunda olmalıdır"),
        firstName: Yup.string().required("Bu alan boş bırakılmaz"),
        lastName:   Yup.string().notRequired("Bu alan boş bırakılmaz"),


    })

    let formik;

    useEffect(()=>{
        let staffService = new StaffService();
        staffService.getStaffById().then((result)=>{
            formik.values.email=result.data.data.email
            formik.values.firstName=result.data.data.firstName
            formik.values.lastName=result.data.data.lastName



            setStaff(result.data.data)

        })
    },[authItem,formik]);

    formik = useFormik({
        initialValues:{
            email:"",
            firstName:"",
            lastName:"",
        },
        validationSchema:staffUpdateSchema,
        onSubmit:(values)=>{
            formik.values.staffId=authItem[0].user.id;
            staffService.update(email,firstName,lastName).then((result)=>{
                toast.success(result.data.message)
            }).catch((result) => {
                toast.error(result.response.data.message)
            })
        }
    })



    return (
        <div>
             <Card fluid color={"black"}>
              <Card.Content header={"Sistem Personel Bilgilerini Güncelle"}/>
              <Card.Content>
                  <Form onSubmit={formik.handleSubmit}>
                    <Grid>
                        <Grid.Column width={6}>
                            <div>
                            <label><b>Email</b></label>
                            <Form.Input
                                fluid
                                placeholder="Email"
                                type="text"
                                name="email"
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {formik.errors.email && formik.touched.email && (
                                <div className={"ui pointing red basic label"}>
                                {formik.errors.email}
                                </div>
                            )}
                            </div>

                            
                            <label><b>İsim</b></label>
                            <Form.Input
                                fluid
                                placeholder="İsim"
                                type="text"
                                name="firstName"
                                value={formik.values.firstName}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {formik.errors.firstName && formik.touched.firstName && (
                                <div className={"ui pointing red basic label"}>
                                {formik.errors.firstName}
                                </div>
                            )}
                        </Grid.Column>


                        

                        

                        
                        <Grid.Column width={6}>
                            <div>
                            <label><b>Soy İsim</b></label>
                            <Form.Input
                                fluid
                                placeholder="Soy İsim"
                                type="text"
                                name="lastName"
                                value={formik.values.lastName}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {formik.errors.lastName && formik.touched.lastName && (
                                <div className={"ui pointing red basic label"}>
                                {formik.errors.lastName}
                                </div>
                            )}
                            </div>

                           
    
                            
                        </Grid.Column>
                    </Grid>
                    <div style={{marginTop:"1em"}}>
                    <Button fluid color="green" type="submit">Güncelle</Button>
                    </div>
                  </Form>
              </Card.Content>
          </Card>
        </div>
    )
}
