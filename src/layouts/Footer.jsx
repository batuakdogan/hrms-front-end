import React from "react";
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
                  <List.Item as="a">Hakkımızda</List.Item>
                  <List.Item as="a">İletişim</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={13}>
                <Header style={{ marginTop: "-2.2em" }} as="h2">
                  <Container>
                    <Icon name="users" color="grey" size="small" />
                  </Container>
                  <Header.Content>
                    <font color="#f5f5f5">
                    HRMS Batu Akdoğan
                    </font>
                  </Header.Content>
                </Header>
                <Container>
                  © 2021 Human Resources Management System
                </Container>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>
    </div>
  );
}
