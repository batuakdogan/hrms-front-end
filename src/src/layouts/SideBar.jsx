import React from 'react'
import { Icon, Menu } from 'semantic-ui-react'
export default function SideBar() {
    return (

      <div>
      <Menu inverted icon="labeled" vertical>
        <Menu.Item
          name="user"
        >
          <Icon name="user" />
          İşler
        </Menu.Item>

        <Menu.Item
          name="user"
        >
          <Icon name="user" />
          İş Arayanlar
        </Menu.Item>

        <Menu.Item
          name="user"
        >
          <Icon name="user" />
          Yetkililer
        </Menu.Item>
      </Menu>
    </div>

















       
    )
}
