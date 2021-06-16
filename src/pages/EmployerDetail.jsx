import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import EmployerService from "../services/employerService";
import { Header, Table, Icon, Card, Button } from "semantic-ui-react";
import JobAdvertService from '../services/jobAdvertService'
import { Link } from "react-router-dom";

export default function EmployerDetail() {

  const [employer, setEmployer] = useState([]);
  const [jobAdverts, setJobAdverts] = useState([]);

  useEffect(() => {  
    let employerService = new EmployerService();
    let jobAdvertService = new JobAdvertService();
    employerService
      .getEmployers()
      .then((result) => setEmployer(result.data.data));
      
    jobAdvertService
      .getConfirmedJobAds()
      .then((result) => setJobAdverts(result.data.data));
  },[]);

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
            <Table.Cell>{employer.companyName}</Table.Cell>
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
            <Table.Cell>{employer.webAddress}</Table.Cell>
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
            <Table.Cell>{employer.email}</Table.Cell>
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
            <Table.Cell>{employer.phoneNumber}</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>

      <Card fluid>
        <Card.Content header="Bu Şirkete Ait İş İlanları" />
        <Card.Content>
          <Table color={"black"}>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>İş Pozisyonu</Table.HeaderCell>
                <Table.HeaderCell>Şehir</Table.HeaderCell>
                <Table.HeaderCell>Çalışma Yeri</Table.HeaderCell>
                <Table.HeaderCell>Çalışma Zamanı</Table.HeaderCell>
                <Table.HeaderCell>Detaylar</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              {jobAdverts.map((jobAdvert) => (
                <Table.Row key={jobAdvert.id}>
                  <Table.Cell>{jobAdvert.jobTitle?.title}</Table.Cell>
                  <Table.Cell>{jobAdvert.city?.cityName}</Table.Cell>
                  <Table.Cell>{jobAdvert.workType?.workTypes}</Table.Cell>
                  <Table.Cell>{jobAdvert.workHour?.workHours}</Table.Cell>
                  <Table.Cell>
                    <Button animated as={Link} to={`/jobads/${jobAdvert.id}`}>
                      <Button.Content visible>Detayları Gör</Button.Content> 
                      <Button.Content hidden>
                        <Icon name="arrow right" />
                      </Button.Content>
                    </Button>
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </Card.Content>
        <Card.Content extra>
          <Icon name="list" />
          {jobAdverts?.length} Adet İş ilanı mevcut
        </Card.Content>
      </Card>
    </div>
  );
}