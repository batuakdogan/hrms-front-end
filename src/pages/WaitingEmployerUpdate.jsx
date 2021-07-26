import React, { useEffect, useState } from "react";
import { Icon, Menu, Table, Button } from "semantic-ui-react";
import { useSelector } from "react-redux";

import { Link } from "react-router-dom";
import EmployerUpdateService from '../services/EmployerUpdateService'
export default function WaitingEmployerUpdate() {


const [employers,setEmployers] = useState([]);
useEffect(()=>{
    let employerUpdateService = new EmployerUpdateService();
    employerUpdateService.getVerifyedUpdate().then((result)=>
    setEmployers(result.data.data))
},[])

const {authItem} = useSelector(state => state.auth)




    return (
        <div>

{authItem[0].user.userType ===3 &&

            
            <Table celled>
                <Table.Header>
                    <Table.Row>
                    <Table.HeaderCell>Şirket ID</Table.HeaderCell>
                        <Table.HeaderCell>Şirket İsmi</Table.HeaderCell>
                        <Table.HeaderCell>Web Adresi</Table.HeaderCell>
                        <Table.HeaderCell>Telefon Numarası</Table.HeaderCell>
                        <Table.HeaderCell>Email</Table.HeaderCell>


                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {
                        employers.map((employer) => (

                            <Table.Row>
                            <Table.Cell>{employer.id}</Table.Cell>
                                <Table.Cell>{employer.companyName}</Table.Cell>
                                <Table.Cell>{employer.webSite}</Table.Cell>
                                <Table.Cell>{employer.phoneNumber}</Table.Cell>
                                <Table.Cell>{employer.email}</Table.Cell>

                            </Table.Row>
                        ))
                    }

                </Table.Body>

                
            </Table>}

            {authItem[0].user.userType ===3  &&
      <Link to="/confirmUpdate">
        <Button className="ui button" color="red">
          Bekleyen Güncelleme Onayla
        </Button> 
      </Link>
    }    
        </div>
    )
}
