import React, { useState, useEffect } from 'react'
import CandidateCvService from '../services/candidateCvService'
import { Header, Image, Table, Button, Icon, TableHeaderCell } from "semantic-ui-react";

export default function CvList() {

    const [cvs, setCvs] = useState([])

    useEffect(() => {
        let candidateCvService = new CandidateCvService();
        candidateCvService.getAll().then((result) => setCvs(result.data.data))
    }, [])


    return (
        <div>
            <Table celled>
                <Table.Header>
                    <Table.Row>

                        <TableHeaderCell>Teknolojiler</TableHeaderCell>
                        <TableHeaderCell>Github Adresi</TableHeaderCell>
                        <TableHeaderCell>Linkedin Adresi</TableHeaderCell>

                    </Table.Row>

                </Table.Header>

                <Table.Body>
                    {
                        cvs.map(cv => (
                            <Table.Row>
                                <Table.Cell>{cv.coverLetter}</Table.Cell>
                                <Table.Cell>{cv.githubAddress}</Table.Cell>
                                <Table.Cell>{cv.linkedinAddress}</Table.Cell>
                            </Table.Row>
                        ))
                    }

                </Table.Body>


            </Table>
        </div>
    )
}
