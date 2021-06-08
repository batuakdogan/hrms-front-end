import React from 'react'
import { useState,useEffect } from 'react';
import { Icon, Menu, Table } from "semantic-ui-react";
import EmployerService from '../services/employerService';

export default function EmployerList() {



    const [employers, setEmployers] = useState([]);

    useEffect(() => {
      let employerService = new EmployerService();
      employerService
        .getEmployers()
        .then((result) => setEmployers(result.data.data));
    }, []);

    return (
        <div>
        <font face="MS SANS" color="red" size="5">İş Verenler</font>

            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Şirket İsmi</Table.HeaderCell>
                        <Table.HeaderCell>Web Adresi</Table.HeaderCell>
                        <Table.HeaderCell>Telefon Numarası</Table.HeaderCell>

                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {
                        employers.map((employer) => (

                            <Table.Row>
                                <Table.Cell>{employer.companyName}</Table.Cell>
                                <Table.Cell>{employer.webAdress}</Table.Cell>
                                <Table.Cell>{employer.phoneNumber}</Table.Cell>
                            </Table.Row>
                        ))
                    }

                </Table.Body>

                
            </Table>
        </div>
    )
}
