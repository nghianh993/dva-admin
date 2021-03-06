import React from 'react'
import PropTypes from 'prop-types'
import { Menu, Icon, Popover } from 'antd'
import BadgeBox from './BadgeBox'
import styles from './Header.less'
import Menus from './Menu'

const SubMenu = Menu.SubMenu

function Header ({ user, logout, switchSider, siderFold, isNavbar, menuPopoverVisible, location, switchMenuPopover, navOpenKeys, userPower, changeOpenKeys }) {
  let handleClickMenu = e => e.key === 'logout' && logout()
  const menusProps = {
    siderFold: false,
    darkTheme: false,
    isNavbar,
    handleClickNavMenu: switchMenuPopover,
    location,
    navOpenKeys,
    userPower,
    changeOpenKeys,
  }
  return (
    <div className={styles.header}>
      {isNavbar
        ? <Popover placement="bottomLeft" onVisibleChange={switchMenuPopover} visible={menuPopoverVisible} overlayClassName={styles.popovermenu} trigger="click" content={<Menus {...menusProps} />}>
          <div className={styles.button}>
            <Icon type="bars" />
          </div>
        </Popover>
        : <div className={styles.button} onClick={switchSider}>
          <Icon type={siderFold ? 'menu-unfold' : 'menu-fold'} />
        </div>}
      <div className={styles.right}>
        <BadgeBox />
        <Menu className="header-menu" mode="horizontal" onClick={handleClickMenu} style={{ textAlign: 'center' }}>
          <SubMenu title={<span><Icon type="user" />{user.name}</span>}>
            <Menu.Item key="logout">
              <a>Đăng xuất</a>
            </Menu.Item>
          </SubMenu>
        </Menu>
      </div>
    </div>
  )
}

Header.propTypes = {
  menu: PropTypes.array,
  user: PropTypes.object,
  logout: PropTypes.func,
  switchSider: PropTypes.func,
  siderFold: PropTypes.bool,
  isNavbar: PropTypes.bool,
  menuPopoverVisible: PropTypes.bool,
  location: PropTypes.object,
  switchMenuPopover: PropTypes.func,
  navOpenKeys: PropTypes.array,
  changeOpenKeys: PropTypes.func,
  userPower: PropTypes.object,
}

export default Header
