import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import {
  Table,
  Button,
  Header,
  Icon,
  Pagination
} from "semantic-ui-react";
import JobAdvertService from '../services/jobAdvertService'
import JobAdFilter from '../layouts/filters/JobAdFilter';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

export default function JobAdvertList() {

  const [jobAdverts, setJobAdverts] = useState([]);


  const [activePage, setActivePage] = useState(1);
  const [filterOption, setFilterOption] = useState({});
  const [pageSize] = useState(2);
  const [totalPageSize, setTotalPageSize] = useState(0);

  useEffect(() => {
    let jobAdvertService = new JobAdvertService();
    jobAdvertService.getPageableAndFilterJobPostings(activePage, pageSize, filterOption)
    .then((result) => {
      setJobAdverts(result.data.data);
      setTotalPageSize(parseInt(result.data.message));
    });
  }, [filterOption, activePage, pageSize]);

  const handleFilterClick = (filterOption) => {
    if(filterOption.cityId.length === 0){
      filterOption.cityId = null;
    }
    if(filterOption.jobTitleId.length === 0){
      filterOption.jobTitleId = null;
    }
    if(filterOption.workTypeId.length === 0){
      filterOption.workTypeId = null;
    }
    if(filterOption.workHourId.length === 0){
      filterOption.workHourId = null;
    }
    setFilterOption(filterOption);
    setActivePage(1);
  }

  const handlePaginationChange = (e, { activePage }) => {
    setActivePage(activePage);
  }

  



  return (
    <div>
      <JobAdFilter clickEvent={handleFilterClick}/>

      <Header  as="h2">
        <Icon name="bullhorn" />
        <Header.Content>İş İlanları</Header.Content>
      </Header>

      <Table  color="black" celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Şirket Adı</Table.HeaderCell>
            <Table.HeaderCell>İş Pozisyonu</Table.HeaderCell>
            <Table.HeaderCell>Şehir</Table.HeaderCell>
            <Table.HeaderCell>Maaş Aralığı</Table.HeaderCell>
            <Table.HeaderCell>Çalışma Zamanı</Table.HeaderCell>
            <Table.HeaderCell>Çalışma Yeri</Table.HeaderCell>
            <Table.HeaderCell>Son Tarih</Table.HeaderCell>
            <Table.HeaderCell>Detaylar</Table.HeaderCell>
              <Table.HeaderCell>Favorilere Ekle</Table.HeaderCell>
            
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {jobAdverts?.map((jobAdvert) => (
            <Table.Row key={jobAdvert.id}>
              <Table.Cell>{jobAdvert.employer.companyName}</Table.Cell>
              <Table.Cell>{jobAdvert.jobtitle.title}</Table.Cell>
              <Table.Cell>{jobAdvert.city.cityName}</Table.Cell>
              <Table.Cell>{jobAdvert.minSalary}₺ - {jobAdvert.maxSalary}₺</Table.Cell>
              <Table.Cell>{jobAdvert.workHour.workHours}</Table.Cell>
              <Table.Cell>{jobAdvert.workType.workType}</Table.Cell>
              <Table.Cell>
                
              </Table.Cell>
              <Table.Cell>
               
              </Table.Cell>
              
            </Table.Row>
          ))}
        </Table.Body>
      </Table>

      
      
      <Pagination
        firstItem={null}
        lastItem={null}
        activePage={activePage}
        onPageChange={handlePaginationChange}
        totalPages={Math.ceil(totalPageSize / pageSize)}
      />

    </div>
  )
}