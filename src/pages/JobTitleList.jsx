import React from 'react'
import { useState, useEffect } from 'react'
import { Icon, Label, Menu, Table } from 'semantic-ui-react'
import JobTitleService from '../services/jobTitleService'
export default function JobTitleList() {



    const [jobTitles, setJobTitles] = useState([]);
    useEffect(() => {
        let jobTitleService = new JobTitleService()
        jobTitleService.getJobTitles().then(result => setJobTitles(result.data.data))


    }, []
    )


    return (
        <div>
            <font face="COW BOYS" color="red" size="5">İşler</font>

            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Id</Table.HeaderCell>
                        <Table.HeaderCell>Başlık</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {
                        jobTitles.map(jobTitle => (
                            <Table.Row>
                                <Table.Cell>{jobTitle.id}</Table.Cell>
                                <Table.Cell>{jobTitle.title}</Table.Cell>
                            </Table.Row>

                        ))
                    }

                </Table.Body>



                
            </Table>
        </div>
    )
}
