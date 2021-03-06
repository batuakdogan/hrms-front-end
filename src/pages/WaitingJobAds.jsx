import React, { useEffect, useState } from "react";
import { Icon, Menu, Table, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import JobAdService from "../services/JobAdService";



export default function WaitingJobAds() {






const [jobAds,setJobAds] = useState([]);
useEffect(()=>{
    let jobAdService = new JobAdService();

    jobAdService.getWaitingJobAds().then((result)=>
        setJobAds(result.data.data)
    );

    
    
   
},[])
const {authItem} = useSelector(state => state.auth)



    return (
      
        <div>
          {authItem[0].user.userType !==3 &&
        <div className="ui negative message">
          <div className="header">
            Bu sayfayı görüntülemeye yetkiniz yok
          </div>
        </div>
      }
           
           {authItem[0].user.userType ===3 &&
           
           
           
           <Table celled color={"black"}>
           <Table.Header>
             <Table.Row> 
               <Table.HeaderCell>Şirket Adı</Table.HeaderCell>
               <Table.HeaderCell>Şehir</Table.HeaderCell>
               <Table.HeaderCell>Maaş Aralığı</Table.HeaderCell>
               <Table.HeaderCell>Çalışma Zamanı</Table.HeaderCell>
               <Table.HeaderCell>Çalışma Yeri</Table.HeaderCell>
               <Table.HeaderCell>Son Tarih</Table.HeaderCell>
               <Table.HeaderCell>Detaylar</Table.HeaderCell>
             </Table.Row>
           </Table.Header>
   
           <Table.Body>
             {
               jobAds?.map(jobAd => (
                 <Table.Row key={jobAd.id}>
                              <Table.Cell>{jobAd.id}</Table.Cell>
   
                 <Table.Cell>{jobAd.employer.companyName}</Table.Cell>
                 <Table.Cell>{jobAd.jobPosition.name}</Table.Cell>
                 <Table.Cell>{jobAd.city.name}</Table.Cell>
                 <Table.Cell>{jobAd.minSalary}₺ - {jobAd.maxSalary}₺</Table.Cell>
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
                   gün
                 </Table.Cell>
                 <Table.Cell>
               
                   <Button as={Link} to={`/jobads/${jobAd.id}`}
                       content="Detayları Gör"
                       icon="right arrow"
                       labelPosition="right"
                     />
                     
                 </Table.Cell>
               
   
                 </Table.Row>
               ))}
           </Table.Body>
   
          
   
         </Table>

           
           }
      {authItem[0].user.userType ===3  &&
      <Link to="/confirmAds">
        <Button className="ui button" color="red">
          İş İlanı Onayla
        </Button> 
      </Link>
    }    



        
        </div>
      
    )
   
}
