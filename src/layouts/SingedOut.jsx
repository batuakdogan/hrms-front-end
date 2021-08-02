import React from 'react'
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { Button,Icon } from 'semantic-ui-react';

export default function SingedOut() {
    const {authItem} = useSelector(state => state.auth)

    return (
        <div className="">
            <Button.Group>

              <Button as={Link} to={"/login"}>Giriş yap</Button>
              <Icon name="circle outline"/>
            </Button.Group>
            &nbsp;

            <Button positive as={Link} to={"/register"}>Kaydol</Button>

            &nbsp;
            <Button class="sol" color="purple" as={Link} to={"/jobAdCreate"}>İlan Yayınla</Button>

        </div>
    )
}
