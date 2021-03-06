import React from "react";
import { useSelector } from "react-redux";
import DoneIcon from '@material-ui/icons/Done';
import { Link } from "react-router-dom";
import { Container,Button, Menu, Icon } from 'semantic-ui-react';
import "../App.css";
import SingedIn from "./SingedIn";
import SingedOut from "./SingedOut";


export default function Navi() {

  const {authItem} = useSelector(state => state.auth)

  return (
    <div className="foo">

      <Menu size="large" inverted stackable inverted fixed="top">
        <Container>
          <Menu.Item name="Ana Sayfa" as={Link} to={"/"}>
          <Icon name="home" />Ana Sayfa
          </Menu.Item>
          <Menu.Item name='Cvler' as={Link} to={"/cvs"} icon="wordpress forms" />
          <Menu.Item name="İş ilanları" as={Link} to={"/jobads"} icon="briefcase"/>

          <Menu.Menu position="right" style={{ margin: '0.1em' }}>
            {authItem[0].loggedIn && authItem[0].user.userType===2 &&  <Button variant="contained" primary as={Link} to={"/jobAdCreate"} icon="add">
              İlan Ekle
            </Button>}
            {authItem[0].loggedIn && authItem[0].user.userType===1 &&  <Button color="red" as={Link} to={`/jobAdFavorites`}>
              <Icon name='heart' />
              Favori İlanlar
            </Button>}
            {authItem[0].loggedIn && authItem[0].user.userType===3 &&  
            <Button as={Link} to={`/waitingAds`} variant="contained" color="pink">
            Bekleyen İlanlar
            </Button>}
            
            {authItem[0].loggedIn && authItem[0].user.userType===3 &&  <Button variant="contained" color="orange"  as={Link} to={`/waitingEmployerUpdate`}>
              Bekleyen Güncellemeler
            </Button>}

            {authItem[0].loggedIn?<SingedIn/>:<SingedOut/>}
          </Menu.Menu>




        </Container>
      </Menu>
    </div>
  );
}
