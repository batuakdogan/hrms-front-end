import React from 'react'
import { Grid } from "semantic-ui-react";
import CandidateList from '../pages/CandidateList'
import EmployerList from '../pages/EmployerList';
import JobTitleList from '../pages/JobTitleList';
import CityList from '../pages/CityList';
import JobAdvertList from '../pages/JobAdvertList';
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import AddJobTitle from '../pages/AddJobTitle'
import AddJobAdvertisementPage from '../pages/AddJobAdvertisementPage'
export default function Section() {
    return (
        <div>
            <Grid>
                <Grid.Row>
                    <Grid.Column size={14}>
                        <CandidateList />
                    </Grid.Column>
                </Grid.Row>

                <Grid.Row>
                    <Grid.Column size={14}>
                        <JobTitleList />
                    </Grid.Column>
                </Grid.Row>

                <Link to="/jobtitleadd">
     <Button>
        <p>Ekle</p>
     </Button>
   </Link>

                <Grid.Row>
                    <Grid.Column>

                        <EmployerList />
                       

                    </Grid.Column>

                </Grid.Row>


                <Grid.Row>
                    <Grid.Column size={10}>

                        <CityList />

                    </Grid.Column>

                </Grid.Row>


                <Grid.Row>

                    <Grid.Column>
                        <JobAdvertList />
                        
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            <AddJobAdvertisementPage/>
        </div>
    )
}
