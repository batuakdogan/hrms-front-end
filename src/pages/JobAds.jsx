import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import WaitingEmployerUpdate from '../pages/WaitingEmployerUpdate'
import CodeConfirm from '../pages/CodeConfirm'
import {
  Table,
  Button,
  Icon,
  Pagination,
  Dropdown,
  Card
} from "semantic-ui-react";
import JobAdService from '../services/JobAdService';
import WaitingJobAds from '../pages/WaitingJobAds'
import JobAdFilter from '../layouts/filters/JobAdFilter';
import { useSelector } from 'react-redux';
import FavoriteService from '../services/FavoriteService';
import { toast } from 'react-toastify';
import JobAdsConfirmPage from './JobAdsConfirmPage';

export default function JobAds() { 

  let [jobAds, setJobAds] = useState([]);
  let [favorites, setFavorites] = useState([]);

  const {authItem} = useSelector(state => state.auth)

  let [activePage, setActivePage] = useState(1);
  let [filterOption, setFilterOption] = useState({});
  let [pageSize, setPageSize] = useState(2);
  let [totalPageSize, setTotalPageSize] = useState(0);

  useEffect(() => {
    let jobAdService = new JobAdService();
    let favoriteService = new FavoriteService();
    jobAdService.getPageableAndFilterJobPostings(activePage, pageSize, filterOption)
    .then((result) => {
      setJobAds(result.data.data);
      setTotalPageSize(parseInt(result.data.message));
    });
    if(authItem[0].loggedIn===true && authItem[0].user.userType===1){
      favoriteService.getByCandidateId(authItem[0].user.id).then((result) => {
        setFavorites(result.data.data.map((favoriteAd) => (
          favoriteAd.jobAd.id
        )))
      })
    }
  }, [filterOption, activePage, pageSize,authItem]);

  const handleFilterClick = (filterOption) => {
    if(filterOption.cityId.length === 0){
      filterOption.cityId = null;
    }
    if(filterOption.jobPositionId.length === 0){
      filterOption.jobPositionId = null;
    }
    if(filterOption.workPlaceId.length === 0){
      filterOption.workPlaceId = null;
    }
    if(filterOption.workTimeId.length === 0){
      filterOption.workTimeId = null;
    }
    setFilterOption(filterOption);
    setActivePage(1);
  }

  const handlePaginationChange = (e, { activePage }) => {
    setActivePage(activePage);
  }

  let favoriteService = new FavoriteService();
  const handleAddFavorite = (jobAdId) => {
    favoriteService.addFavorite(authItem[0].user.id,jobAdId).then((result) => {
      toast.success(result.data.message)
      favorites.push(jobAdId)
      setFavorites([...favorites])
    }).catch((result) => {
      toast.error(result.response.data.message)
    })
  }

  const handlePaginationSizeChange = (value) => {
    setPageSize(value);
    console.log(pageSize)
  }

  const paginationOptions = [
    { key:2, text: "2 ??lan", value: 2 },
    { key:10, text: "10 ??lan", value: 10 },
    { key:25, text: "25 ??lan", value: 25 },
    { key:50, text: "50 ??lan", value: 50 },
    { key:100, text: "100 ??lan", value: 100 },
  ];

  return (
    <div>
      <JobAdFilter clickEvent={handleFilterClick}/>

      <Card fluid>
        <div style={{marginTop:"1em",marginLeft:"1em"}} >
        <Card.Header as="h2">
          <Icon name="tasks" color="blue"/>
          ???? ??lanlar??
        </Card.Header>
        </div>
      
      <Table  color="black" celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>??irket Ad??</Table.HeaderCell>
            <Table.HeaderCell>???? Pozisyonu</Table.HeaderCell>
            <Table.HeaderCell>??ehir</Table.HeaderCell>
            <Table.HeaderCell>Maa?? Aral??????</Table.HeaderCell>
            <Table.HeaderCell>??al????ma Zaman??</Table.HeaderCell>
            <Table.HeaderCell>??al????ma Yeri</Table.HeaderCell>
            <Table.HeaderCell>Son Tarih</Table.HeaderCell>
            <Table.HeaderCell>Detaylar</Table.HeaderCell>
            {authItem[0].loggedIn && authItem[0].user.userType===1 &&
              <Table.HeaderCell>Favorilere Ekle</Table.HeaderCell>
            }
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {jobAds?.map((jobAd) => (
            <Table.Row key={jobAd.id}>
              <Table.Cell>{jobAd.employer.companyName}</Table.Cell>
              <Table.Cell>{jobAd.jobPosition.name}</Table.Cell>
              <Table.Cell>{jobAd.city.name}</Table.Cell>
              <Table.Cell>{jobAd.minSalary}??? - {jobAd.maxSalary}???</Table.Cell>
              <Table.Cell>{jobAd.workTime.name}</Table.Cell>
              <Table.Cell>{jobAd.workPlace.name}</Table.Cell>
              <Table.Cell>
                {(
                  (new Date(jobAd.lastDate).getTime() -
                    new Date(Date.now()).getTime()) /
                  86400000
                )
                  .toString()
                  .split(".", 1)}{" "}
                g??n
              </Table.Cell>
              <Table.Cell>
                <Button as={Link} to={`/jobads/${jobAd.id}`}
                    content="Detaylar?? G??r"
                    icon="right arrow"
                    labelPosition="right"
                  />
              </Table.Cell>
              {authItem[0].loggedIn && authItem[0].user.userType===1 &&
                <Table.Cell>
                <Button
                    circular
                    icon={favorites.includes(jobAd.id)?"heart":"heart outline"}
                    color={favorites.includes(jobAd.id)?"red":"green"}
                    onClick = {() => handleAddFavorite(jobAd.id)}
                  />
                </Table.Cell>
              }
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
      <Card.Content>
      <div>
      <Pagination
        firstItem={null}
        lastItem={null}
        activePage={activePage}
        onPageChange={handlePaginationChange}
        totalPages={Math.ceil(totalPageSize / pageSize)}
      />

      <Dropdown
          onChange={(e, data) => {
            setActivePage(1)
            setPageSize(data.value);
            handlePaginationSizeChange(data.value);
          }}
          selection
          defaultValue={pageSize}
          text={"Sayfalama : " + pageSize}
          style={{ float: "right" }}
          options={paginationOptions}
      />
      </div>
      </Card.Content>
      </Card>





    </div>
  )
}
