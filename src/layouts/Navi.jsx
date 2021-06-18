import React from 'react'
import { Link } from "react-router-dom";

import { Container } from "semantic-ui-react";
import { Button, Dropdown, Menu } from 'semantic-ui-react'
export default function Navi() {
    return (
        <div>
            <Menu inverted fixed="top" size='mini'>
                <Container>
                    <Menu.Item  as={Link} to={"/jobads"} icon="home"
                        name='Ana Menü' 

                    />
                    <Menu.Item 
                        name='İş İlanı Ekle'  as={Link} to={"/jobAdCreate"} icon="add"

                    />

                    <Menu.Menu position='right'>
                        <Dropdown item text='Hedef'>
                            <Dropdown.Menu>
                                <Dropdown.Item as={Link} to={"/employers"}>İş Veren</Dropdown.Item>
                                <Dropdown.Item as={Link} to={"/candidates"}> İş Arayan</Dropdown.Item>
                                <Dropdown.Item as={Link} to={"/jobads"}>İş İlanları</Dropdown.Item>
                                <Dropdown.Item as={Link} to={"/jobAdCreate"}>İş İlanı Ekle</Dropdown.Item>


                            </Dropdown.Menu>
                        </Dropdown>

                        <Menu.Item>
                            <Button color="red" primary>Kayıt Ol</Button>
                            <Button primary>Giriş Yap</Button>

                        </Menu.Item>
                    </Menu.Menu>
                </Container>

            </Menu>
        </div>
    )
}
