import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Icon, Menu, Table, Button } from "semantic-ui-react";
import JobAdvertService from "../services/jobAdvertService";

export default function JobAdvertList() {
  const [jobAdverts, setJobAdverts] = useState([]);

  useEffect(() => {
    let jobAdvertService = new JobAdvertService();
    jobAdvertService.getAllActives().then((result) => setJobAdverts(result.data.data));
  }, []);

  return (
    <div>
      <Table celled color={"black"}>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Şirket Adı</Table.HeaderCell>
            <Table.HeaderCell>Şehir</Table.HeaderCell>
            <Table.HeaderCell>Pozisyon</Table.HeaderCell>
            <Table.HeaderCell>Çalışma Yeri</Table.HeaderCell>
            <Table.HeaderCell>Çalışma Zamanı</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {
            jobAdverts.map(jobAdvert => (
            <Table.Row key={jobAdvert.id}>
              <Table.Cell>{jobAdvert.employer.companyName}</Table.Cell>
              <Table.Cell>{jobAdvert.city.cityName}</Table.Cell>
              <Table.Cell>{jobAdvert.jobtitle.title}</Table.Cell>
              <Table.Cell>{jobAdvert.workType.workType}</Table.Cell>
              <Table.Cell>{jobAdvert.workHour.workHours}</Table.Cell>
              
            </Table.Row>
            ))}
        </Table.Body> 

        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan="6">
              <Menu floated="right" pagination>
                <Menu.Item as="a" icon>
                  <Icon name="chevron left" />
                </Menu.Item>
                <Menu.Item as="a">1</Menu.Item>
                <Menu.Item as="a">2</Menu.Item>
                <Menu.Item as="a">3</Menu.Item>
                <Menu.Item as="a">4</Menu.Item>
                <Menu.Item as="a" icon>
                  <Icon name="chevron right" />
                </Menu.Item>
              </Menu>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
      <Link to ="/jobAdCreate">
      <Button className="ui button">
        Ekle
      </Button>
      </Link>
    </div>
  );
}