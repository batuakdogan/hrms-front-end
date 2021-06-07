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
                        <Dropdown item text='Targets'>
                            <Dropdown.Menu>
                                <Dropdown.Item>Employers</Dropdown.Item>
                                <Dropdown.Item>Candidates</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>

                        <Menu.Item>
                            <Button primary>Sign Up</Button>
                            <Button primary>Sign In</Button>

                        </Menu.Item>
                    </Menu.Menu>
                </Container>

            </Menu>
        </div>
    )
}
