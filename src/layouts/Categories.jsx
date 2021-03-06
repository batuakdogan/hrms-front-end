import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Icon, Menu } from 'semantic-ui-react'

export default function Categories() {

  const location = useLocation().pathname;

  return (
    <div>
      <Menu fluid compact icon="labeled" vertical>
        <Menu.Item as={Link} to={"/jobads"} active={location==="/jobads" || location==="/"}>
            <Icon name="list" />
            İş ilanları        
        </Menu.Item>

        <Menu.Item as={Link} to={"/employers"} active={location==="/employers"}>
            <Icon name="building" />
            İş Verenler       
        </Menu.Item>

        <Menu.Item as={Link} to={"/candidates"} active={location==="/candidates"}>
          <Icon name="user" />
          İş Adayları
        </Menu.Item>

        <Menu.Item as={Link} to={"/cvs"} active={location==="/cvs"}>
          <Icon name="wordpress forms" />
          <p>CV'ler</p>
        </Menu.Item>
      </Menu>
    </div>
  );
}
