import React from 'react'
import { Grid } from "semantic-ui-react";
import CandidateList from '../pages/CandidateList'
export default function Section() {
    return (
        <div>
            <Grid>
                <Grid.Row>
                    <Grid.Column size={12}>
                        <CandidateList />
                    </Grid.Column>
                </Grid.Row>
                
            </Grid>
        </div>
    )
}
