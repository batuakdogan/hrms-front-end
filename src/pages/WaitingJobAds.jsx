import React, { useEffect, useState } from "react";
import { Icon, Menu, Table, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import JobAdvertService from "../services/jobAdvertService";
export default function WaitingJobAds() {

const [jobAdverts,setJobAdverts] = useState([]);
useEffect(()=>{
    let jobAdvertService = new JobAdvertService();
    jobAdvertService.getWaitingJobAds().then((result)=>
        setJobAdverts(result.data.data)
    );
},[])


    return (
        <div>
            <Table celled color={"black"}>
        <Table.Header>
          <Table.Row> 
          <Table.HeaderCell>İş İlanı ID</Table.HeaderCell>
            <Table.HeaderCell>Şirket Adı</Table.HeaderCell>
            <Table.HeaderCell>Şehir</Table.HeaderCell>
            <Table.HeaderCell>Pozisyon</Table.HeaderCell>
            <Table.HeaderCell>Çalışma Yeri</Table.HeaderCell>
            <Table.HeaderCell>Çalışma Zamanı</Table.HeaderCell>
            <Table.HeaderCell>Minimum Ücret</Table.HeaderCell>
            <Table.HeaderCell>Maksimum  Ücret</Table.HeaderCell>
            <Table.HeaderCell>Açık Pozisyon Sayısı</Table.HeaderCell>
            <Table.HeaderCell>Son Başvuru Tarihi</Table.HeaderCell>
            <Table.HeaderCell>İş İlanı Tanımı</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {
            jobAdverts.map(jobAdvert => (
              <Table.Row key={jobAdvert.id}>
              <Table.Cell>{jobAdvert.id}</Table.Cell>
                <Table.Cell>{jobAdvert.employer.companyName}</Table.Cell>
                <Table.Cell>{jobAdvert.city.cityName}</Table.Cell>
                <Table.Cell>{jobAdvert.jobtitle.title}</Table.Cell>
                <Table.Cell>{jobAdvert.workType.workType}</Table.Cell>
                <Table.Cell>{jobAdvert.workHour.workHours}</Table.Cell>
                <Table.Cell>{jobAdvert.minSalary}</Table.Cell>
                <Table.Cell>{jobAdvert.maxSalary}</Table.Cell>
                <Table.Cell>{jobAdvert.quota}</Table.Cell>
                <Table.Cell>{jobAdvert.appealExpirationDate}</Table.Cell>
                <Table.Cell>{jobAdvert.description}</Table.Cell>

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
      <Link to="/confirmads">
        <Button className="ui button">
          İş İlanı Onayla
        </Button> 
      </Link>

      
        
        </div>
    )
}
