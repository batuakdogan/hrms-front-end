import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Header, Table, Icon, Card, Button } from "semantic-ui-react";

import JobAdvertService from '../services/jobAdvertService'

export default function AdsConfirm() {


    let { id } = useParams();

    const [jobAdverts, setJobAdverts] = useState([]);

    useEffect(() =>{
        let jobAdvertService = new JobAdvertService();
        jobAdvertService
        .confirmJobAdById(id)
        .then((result ) =>setJobAdverts(result.data.data))
         
    },[id])


    return (
        <div>
            <Card fluid>
        <Card.Content header="Bu Şirkete Ait İş İlanları" />
        <Card.Content>
          <Table color={"black"} >
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>İş Pozisyonu</Table.HeaderCell>
                <Table.HeaderCell>Şehir</Table.HeaderCell>
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
              {jobAdverts.map((jobAdvert) => (
                <Table.Row key={jobAdvert?.id}>
                  <Table.Cell>{jobAdvert.jobtitle?.title}</Table.Cell>
                  <Table.Cell>{jobAdvert.city?.cityName}</Table.Cell>
                  <Table.Cell>{jobAdvert.workType?.workType}</Table.Cell>
                  <Table.Cell>{jobAdvert.workHour?.workHours}</Table.Cell>
                  <Table.Cell>{jobAdvert.minSalary}</Table.Cell>
                  <Table.Cell>{jobAdvert.maxSalary}</Table.Cell>
                  <Table.Cell>{jobAdvert.quota}</Table.Cell>
                  <Table.Cell>{jobAdvert.appealExpirationDate}</Table.Cell>
                  <Table.Cell>{jobAdvert.description}</Table.Cell>          
                  
                  
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
    )
}
