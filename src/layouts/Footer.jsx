import React from "react";
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import { Link } from "react-router-dom";
import {
  Container,
  Grid,
  Header,
  Icon,
  List,
  Segment,
} from "semantic-ui-react";

export default function Footer() {
  return (
    <div>
      <Segment
        color="black"
        inverted
        vertical
        style={{
          padding: "5em 0em",
          position: "static",
          bottom: 0,
          width: "100%",
          marginTop: "2em"
        }}
      >
        <Container>
          <Grid divided inverted stackable>
            <Grid.Row>
              <Grid.Column width={3}>
                <List link inverted>
                  <List.Item as={Link} to={"/about"} ><Icon name="file alternate outline" />Hakkımızda</List.Item>
                  <List.Item as={Link} to={"/policy"}><Icon name="clipboard outline" />Gizlilik Sözleşmesi</List.Item>
              

                  <List.Item as="a"><Icon name="phone square" />İletişim</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={13}>
                <Header style={{ marginTop: "-2.2em" }} as="h2">
                  <div className="policy">
                    <Container>
                    </Container>
                  </div>
                  <div className="hrms">
                    <Header.Content>
                      <font color="#f5f5f5">

                        HRMS by Batu Akdoğan
                      </font>

                    </Header.Content> 
                  </div>
                </Header>
                <Container>
                  <Icon name="copyright outline" /> Human Resources Management System 
                </Container>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>
    </div>
  );
}
