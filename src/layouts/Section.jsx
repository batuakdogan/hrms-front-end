import React from 'react'
import { Grid } from "semantic-ui-react";
import CandidateList from '../pages/CandidateList'
import EmployerList from '../pages/EmployerList';
import JobTitleList from '../pages/JobTitleList';
import CityList from '../pages/CityList';
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


            </Grid>
        </div>
    )
}
