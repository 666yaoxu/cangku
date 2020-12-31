import { Menu, Button } from 'antd';
import React from 'react';
import {
  AppstoreOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
} from '@ant-design/icons';
import {Link} from 'react-router-dom'

const { SubMenu } = Menu;
class Navleft extends React.Component{
    state = {
        collapsed: false,
      };
    
      toggleCollapsed = () => {
        this.setState({
          collapsed: !this.state.collapsed,
        });
      };
    
    render(){
        return(
            <div style={{ width: '100vm' }}>
            <Button type="primary" onClick={this.toggleCollapsed} style={{ marginBottom: 16 }}>
              {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
            </Button>
            <Menu
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              mode="inline"
              theme="dark"
              inlineCollapsed={this.state.collapsed}
            >
            
              <Menu.Item key="1" icon={<PieChartOutlined />}>
              <Link to='/home'>轮播图</Link>
              </Menu.Item>
              
              
              <Menu.Item key="2" icon={<DesktopOutlined />}>
              <Link to='/city'>人员管理</Link>
              </Menu.Item>
          
              
              <Menu.Item key="3" icon={<ContainerOutlined />}>
              <Link to='/game'>城市管理</Link>
              </Menu.Item>
            
              {/* <SubMenu key="sub1" icon={<MailOutlined />} title="Navigation One">
                <Menu.Item key="5">Option 5</Menu.Item>
                <Menu.Item key="6">Option 6</Menu.Item>
                <Menu.Item key="7">Option 7</Menu.Item>
                <Menu.Item key="8">Option 8</Menu.Item>
              </SubMenu>
              <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Navigation Two">
                <Menu.Item key="9">Option 9</Menu.Item>
                <Menu.Item key="10">Option 10</Menu.Item>
                <SubMenu key="sub3" title="Submenu">
                  <Menu.Item key="11">Option 11</Menu.Item>
                  <Menu.Item key="12">Option 12</Menu.Item>
                </SubMenu>
              </SubMenu> */}
              
              <Menu.Item key="4" icon={<MailOutlined />}>
              <Link to='/paly'>富文本</Link>
              </Menu.Item>
              <Menu.Item key="5" icon={<ContainerOutlined />}>
              <Link to='/order'>跳转管理</Link>
              </Menu.Item>
              <Menu.Item key="6" icon={<AppstoreOutlined />}>
              <Link to='/user'>人员管理</Link>
              </Menu.Item>
              <Menu.Item key="7" icon={<MailOutlined />}>
              <Link to='/pic'>柱形统计图</Link>
              </Menu.Item>
              <Menu.Item key="8" icon={<AppstoreOutlined />}>
              <Link to='/line'>折线统计图</Link>
              </Menu.Item>
              <Menu.Item key="9" icon={<MailOutlined />}>
              <Link to='/bar'>饼形统计图</Link>
              </Menu.Item>
              <Menu.Item key="10" icon={<PieChartOutlined />}>
              <Link to='/qita'>其他</Link>
              </Menu.Item>
            </Menu>
          </div>
        )
    }
}
export default Navleft