import React from 'react'
import Categories from './Categories'
import Navi from './Navi'
import { Container, Grid } from 'semantic-ui-react';
import JobAdvertList from '../pages/JobAdvertList'
import CandidateList from '../pages/CandidateList';
import EmployerList from '../pages/EmployerList';
import { Route } from 'react-router';
import JobAdDetail from '../pages/JobAdDetail';
import EmployerDetail from '../pages/EmployerDetail';
import AddJobAdvertisementPage from '../pages/AddJobAdvertisementPage';

export default function Dashboard() {
    return (
        <div>
            <Navi />
            <Container className="main">                
                <Grid stackable>
                    <Grid.Column width={4}>
                        <Categories />
                    </Grid.Column>
                    <Grid.Column width={12}>
                        <Route exact path="/" component={JobAdvertList}/>
                        <Route exact path="/candidates" component={CandidateList}/>
                        <Route exact path="/employers" component={EmployerList}/>
                        <Route exact path="/employers/:name" component={EmployerDetail}/>

                        <Route exact path="/jobads" component={JobAdvertList}/>
                        <Route exact path="/jobAdCreate" component={AddJobAdvertisementPage}/>
                        <Route exact path="/jobads/:id" component={JobAdDetail}/>
                    </Grid.Column>
                </Grid>
            </Container>
        </div>
    )
}