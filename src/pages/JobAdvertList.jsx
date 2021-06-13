import { Table } from "semantic-ui-react";
import JobAdvertService from '../services/jobAdvertService';
import React, { useState, useEffect } from "react";
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
export default function JobAdvertList() {


    const [jobAdverts, setJobAdverts] = useState([])
    useEffect(() => {
        let jobAdvertService = new JobAdvertService()
        jobAdvertService.getJobAdverts().then(result => setJobAdverts(result.data.data))


    }, [])


    return (
        <div>
            <font face="COW BOYS" color="red" size="5">İş İlanları</font>

            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Açıklama</Table.HeaderCell>
                        <Table.HeaderCell>İş İlan Tarihi</Table.HeaderCell>
                        <Table.HeaderCell>Bitiş Tarihi</Table.HeaderCell>
                        <Table.HeaderCell>Min. Maaş</Table.HeaderCell>
                        <Table.HeaderCell>Max. Maaş</Table.HeaderCell>

                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {
                        jobAdverts.map(jobAdvert => (
                            <Table.Row>
                                <Table.Cell>{jobAdvert.description}</Table.Cell>
                                <Table.Cell>{jobAdvert.createdDate}</Table.Cell>
                                <Table.Cell>{jobAdvert.appealExpirationDate}</Table.Cell>
                                <Table.Cell>{jobAdvert.minSalary}</Table.Cell>
                                <Table.Cell>{jobAdvert.maxSalary}</Table.Cell>
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
