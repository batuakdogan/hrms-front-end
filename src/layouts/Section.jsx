import React from 'react'
import { Grid } from "semantic-ui-react";
import CandidateList from '../pages/CandidateList'
import JobTitleList from '../pages/JobTitleList';
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

            </Grid>
        </div>
    )
}
