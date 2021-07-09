import React, { useState,useEffect } from 'react'
import { Icon, Label, Menu, Table } from 'semantic-ui-react'
import CandidateService from '../services/candidateService'

export default function CandidateList() {



    const [candidates, setCandidates] = useState([])

    useEffect(()=>{
        let candidateService = new CandidateService()
        candidateService.getCandidates().then(result=>setCandidates(result.data.data))
    },[]) 

    return (
        <div>
        <font face="COW BOYS" color="red" size="5">İş Arayanlar</font>

            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>İsim</Table.HeaderCell>
                        <Table.HeaderCell>Soy İsim</Table.HeaderCell>
                        <Table.HeaderCell>T.C Kimlik No.</Table.HeaderCell>
                        <Table.HeaderCell>Doğum Tarihi</Table.HeaderCell>


                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {
                        candidates.map(candidate => (
                            <Table.Row key={candidate.id}>
                                <Table.Cell>{candidate.firstName}</Table.Cell>
                                <Table.Cell>{candidate.lastName}</Table.Cell>
                                <Table.Cell>{candidate.identificationNumber}</Table.Cell>
                                <Table.Cell>{candidate.birthDate}</Table.Cell>

                            </Table.Row>
                        ))
                    }



                </Table.Body>
                <Table.Footer>
                   
                </Table.Footer>
            </Table>
        </div>
    )
}
