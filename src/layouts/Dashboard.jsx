import React from 'react'
import Categories from './Categories'
import Navi from './Navi'
import { Container, Grid } from 'semantic-ui-react';
import './Dashboard.css';
import JobAds from '../pages/JobAds';
import Candidates from '../pages/Candidates';
import Cvs from '../pages/Cvs';
import Employers from '../pages/Employers';
import { Route } from 'react-router';
import JobAdDetail from '../pages/JobAdDetail';
import EmployerDetail from '../pages/EmployerDetail';
import Login from '../pages/Login';
import PrivacePolicy from '../pages/PrivacePolicy';

import AboutUs from '../pages/AboutUs'

import Register from '../pages/Register';
import CvDetail from '../pages/CvDetail';
import JobAdCreate from '../pages/JobAdCreate';
import RegisterEmployer from '../pages/RegisterEmployer';
import JobAdFavorites from '../pages/JobAdFavorites';
import Footer from './Footer';
import { ToastContainer } from "react-toastify"; 
import JobAdsConfirmPage from '../pages/JobAdsConfirmPage';
import WaitingJobAds from '../pages/WaitingJobAds';
import WaitingEmployerUpdate from '../pages/WaitingEmployerUpdate';
import EmployerUpdateConfirmPage from '../pages/EmployerUpdateConfirmPage';

export default function Dashboard() {
    return (
        <div>
            <ToastContainer position="bottom-right"/>
            <Navi />
            <Container className="main">                
                <Grid stackable>
                    <Grid.Column width={4}>
                        <Categories />
                    </Grid.Column>
                    <Grid.Column width={12}>
                        <Route exact path="/" component={JobAds}/>
                        <Route exact path="/login" component={Login}/>
                        <Route exact path="/register" component={Register}/>
                        <Route exact path="/registerEmployer" component={RegisterEmployer}/>
                        <Route exact path="/candidates" component={Candidates}/>
                        <Route exact path="/cvs" component={Cvs}/>
                        <Route exact path="/cvs/:id" component={CvDetail}/>
                        <Route exact path="/employers" component={Employers}/>
                        <Route exact path="/employers/:id" component={EmployerDetail}/>
                        <Route exact path="/jobads" component={JobAds}/>
                        <Route exact path="/jobAdCreate" component={JobAdCreate}/>
                        <Route exact path="/jobads/:id" component={JobAdDetail}/>
                        <Route exact path="/jobAdFavorites" component={JobAdFavorites}/>
                        <Route exact path="/about" component={AboutUs}/> 
                        <Route exact path="/policy"  component={PrivacePolicy}/>
                        <Route exact path="/confirmAds"  component={JobAdsConfirmPage}/>
                        <Route exact path="/waitingAds"  component={WaitingJobAds}/>
                        <Route exact path="/waitingEmployerUpdate"  component={WaitingEmployerUpdate}/>
                        <Route exact path="/confirmUpdate"  component={EmployerUpdateConfirmPage}/>




                        
                    </Grid.Column>
                </Grid>
            </Container>
            <Footer/>
        </div>
    )
}
