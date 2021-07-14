import React from 'react'
import { Link } from "react-router-dom";
import { Button,Icon } from 'semantic-ui-react';

export default function SingedOut() {
    return (
        <div className="">
            <Button.Group>

              <Button as={Link} to={"/login"}>Giriş yap</Button>
              <Icon name="circle outline"/>
              <Button positive as={Link} to={"/register"}>Kaydol</Button>
            </Button.Group>
        </div>
    )
}
