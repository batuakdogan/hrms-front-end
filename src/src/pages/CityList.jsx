import React, { useState, useEffect } from 'react'
import { Icon, Menu, Table } from "semantic-ui-react";
import CityService from '../services/cityService';
export default function CityList() {




    const [cities, setCities] = useState([])
    useEffect(() => {
        let cityService = new CityService();
        cityService.getCities().then(result => setCities(result.data.data))


    }, [])






    return (
        <div><font face="MS SANS" color="red" size="5">Şehirler</font>


            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Şehirler</Table.HeaderCell>

                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {cities.map((city) => (

                        <Table.Row>
                            <Table.Cell>{city.cityName}</Table.Cell>
                        </Table.Row>
                    ))}



                </Table.Body>

            </Table>
        </div>
    )
}
