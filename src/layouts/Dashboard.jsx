import React from "react";
import { Grid } from "semantic-ui-react";
import Section from "./Section";
import SideBar from "./SideBar";
import { Route } from "react-router";
import CityList from "../pages/CityList";
import JobAdvertList from "../pages/JobAdvertList";
import JobTitleList from "../pages/JobTitleList";
import AddJobTitle from "../pages/AddJobTitle";
import AddJobAdvertisementPage from "../pages/AddJobAdvertisementPage"
export default function Dashboard() {
  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column width={2}>
            <SideBar />
          </Grid.Column>
          <Grid.Column width={14}>
            
         <Route exact path ="/" component = {Section}/>
         <Route exact path="/jobadvertadd" compnent = {AddJobAdvertisementPage}/>
         <Route exact path ="/jobtitleadd" component ={AddJobTitle} />



        



           


              
          </Grid.Column> 
        </Grid.Row>
      </Grid>
    </div>
  );
}