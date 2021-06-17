import React from 'react'
import { Container } from "semantic-ui-react";
import { Button, Dropdown, Menu } from 'semantic-ui-react'
export default function Navi() {
    return (
        <div>
            <Menu inverted fixed="top" size='mini'>
                <Container>
                    <Menu.Item
                        name='home'

                    />
                    <Menu.Item
                        name='messages'

                    />

                    <Menu.Menu position='right'>
                        <Dropdown item text='Hedef'>
                            <Dropdown.Menu>
                                <Dropdown.Item>İş Veren</Dropdown.Item>
                                <Dropdown.Item>İş Arayan</Dropdown.Item>
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
