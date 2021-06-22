import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import EmployerService from "../services/employerService";
import { Header, Table, Icon, Card, Button } from "semantic-ui-react";
import JobAdvertService from '../services/jobAdvertService'
import { Link } from "react-router-dom";
export default function EmployerDetail() {


  let { id } = useParams();

  
  const [employers, setEmployers] = useState({});
  const [jobAdverts, setJobAdverts] = useState([]);

  useEffect(() => {  
    let employerService = new EmployerService();
    let jobAdvertService = new JobAdvertService();
    employerService
      .getEmployerById(id)
      .then((result) => setEmployers(result.data.data)); 
      
    jobAdvertService
      .getJobAdverts()
      .then((result) => setJobAdverts(result.data.data));
  },[id]); 


  

  return (
    <div>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>İş veren</Table.HeaderCell>
            <Table.HeaderCell>Bilgiler</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          
          <Table.Row>
            <Table.Cell>
              <Header as="h4">
                <Header.Content>
                  <Icon name="building" />
                  Şirket Adı
                </Header.Content>
              </Header>
            </Table.Cell>

            <Table.Cell>{employers.companyName}</Table.Cell>

          </Table.Row>

          <Table.Row>
            <Table.Cell>
              <Header as="h4">
                <Header.Content>
                  <Icon name="world" />
                  Web Sitesi
                </Header.Content>
              </Header>
            </Table.Cell>
            <Table.Cell>{employers.webAdress}</Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell>
              <Header as="h4">
                <Header.Content>
                  <Icon name="mail" />
                  Email
                </Header.Content>
              </Header>
            </Table.Cell>
            <Table.Cell>{employers.email}</Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell>
              <Header as="h4">
                <Header.Content>
                  <Icon name="phone" />
                  Telefon
                </Header.Content>
              </Header>
            </Table.Cell>
            <Table.Cell>{employers.phoneNumber}</Table.Cell>
          </Table.Row>
        </Table.Body>



</Table>









     
    </div>
  );
}