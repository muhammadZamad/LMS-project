// import React from 'react'
// import { Link, Navigate } from "react-router-dom";
import {  useEffect  } from 'react'
import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';
import { LikeOutlined } from '@ant-design/icons';
import { Card, Col, Row, Statistic } from 'antd';
import { Progress, Space } from 'antd';


import { signInWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile, sendEmailVerification  } from "firebase/auth";
import { auth } from '../../../config/firebase';
// import { Sidebar, Menu, MenuItem, SubMenu, useProSidebar  } from 'react-pro-sidebar';
// import { FaGem, FaHeart} from 'react-icon/fa';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  SolutionOutlined,
  DashboardOutlined,
  FormOutlined,
  ProfileOutlined,
  UserOutlined,
  LogoutOutlined,
} from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import React, { useState } from 'react';
const initialState = { email: "", password: "" }
const { Header, Sider, Content } = Layout;
export default function SideBar() {
  const { Countdown } = Statistic;
const deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30; // Dayjs is also OK
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
    // const { collapseSidebar } = useProSidebar();
    const [state, setState] = useState(initialState)

    const [ user, setUser ] = useState({})
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/firebase.User
            //   const uid = user.uid;
              console.log(user)
              setUser(user)
              // ...
            } else {
              // User is signed out
              // ...
            }
          });

    }, [])
    const handleLogout = () =>{
      signOut(auth)
      .then(()=>{
        console.log("user logged out")
        setUser({})
      })
      .catch((err)=>{
          console.error(err)
      })
    }
    const authUserVerification = () =>{
      sendEmailVerification(auth.currentUser)
      .then(() => {
        console.log("Email sent!")
        // ...
      }).catch((error) => {
        // An error occurred
        console.error(error)
        // ...
      });

    }
    const updateUserProfile = () =>{
      updateProfile(auth.currentUser, {
        displayName: "Muhammad Zamad",
        photoURL: "https://lh3.googleusercontent.com/ogw/AOh-ky1RcjSFbtNLiXWcVb-1lZ2HCR1vn72lpTTMSly6=s32-c-mo"
      }).then(() => {
        console.log("Profile updated!")
        // ...
      }).catch((error) => {
        // An error occurred
        console.error(error)
        // ...
      });
    }
    // couting
    const onFinish = () => {
      console.log('finished!');
    };
    const onChange = (val) => {
      if (val && 4.95 * 1000 < val && val < 5 * 1000) {
        console.log('changed!');
      }
    };
  return (
    <>
     <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <div className="row">
            <div className="col">
            <div className='col text-center'> 
            {/* <img src={ user.photoURL } alt="profile pick" className='img-fluid' /> */}
            {/* <h2 className="text-dark text-center">User Email: {user.email}</h2> */}
                    {/* <h2 className="text-dark text-center">User U-Id: {user.uid}</h2> */}
                    <h6 className="text-white text-center">User: {user.displayName}</h6>
                        <button className='btn btn-danger w-100 mb-3' onClick={handleLogout}>Logout</button><br />
                        {/* <button className='btn btn-info w-25 my-3' onClick={authUserVerification}>Verification</button><br /> */}
                        {/* <button className='btn btn-danger w-100' onClick={updateUserProfile}>update profile</button> */}
                        </div>
            </div>
          </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <DashboardOutlined />,
              label: 'Dashboard', 
              href: '' ,
              // onclick={'<Navigate replace to="../../dashboard" />'}
            },
            {
              key: '2',
              icon: <FormOutlined />,
              label: 'Form',
            },
            {
              key: '3',
              icon: <SolutionOutlined />,
              label: 'List',
            },
            {
              key: '4',
              icon: <ProfileOutlined />,
              label: 'Profile',
            },
            {
              key: '5',
              icon: <UserOutlined />,
              label: 'Account',
            },
            {
              key: '6',
              icon: <LogoutOutlined />,
              label: 'Logout',
              onInternalClick:{handleLogout},
            },
          ]}
        />
      </Sider>
      <Layout className="site-layout">
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: () => setCollapsed(!collapsed),
          })}
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          <Row gutter={16}>
    <Col span={12}>
      <Card bordered={false}>
        <Statistic
          title="Active"
          value={11.28}
          precision={2}
          valueStyle={{
            color: '#3f8600',
          }}
          prefix={<ArrowUpOutlined />}
          suffix="%"
        />
      </Card>
    </Col>
    <Col span={12}>
      <Card bordered={false}>
        <Statistic
          title="Idle"
          value={9.3}
          precision={2}
          valueStyle={{
            color: '#cf1322',
          }}
          prefix={<ArrowDownOutlined />}
          suffix="%"
        />
      </Card>
    </Col>
  </Row>
  {/* counting */}
  <Row gutter={16}>
      <Col span={12}>
        <Countdown title="Countdown" value={deadline} onFinish={onFinish} />
      </Col>
      <Col span={12}>
        <Countdown title="Million Seconds" value={deadline} format="HH:mm:ss:SSS" />
      </Col>
      <Col
        span={24}
        style={{
          marginTop: 32,
        }}
      >
        {/* <Countdown title="Day Level" value={deadline} format="D 天 H 时 m 分 s 秒" /> */}
      </Col>
      <Col span={12}>
        <Countdown title="Countdown" value={Date.now() + 10 * 1000} onChange={onChange} />
      </Col>
    </Row>
    {/* Feedback */}
    <Row gutter={16}>
    <Col span={12}>
      <Statistic title="Feedback" value={1128} prefix={<LikeOutlined />} />
    </Col>
    <Col span={12}>
      <Statistic title="Unmerged" value={93} suffix="/ 100" />
    </Col>
  </Row>
  {/* progress */}
  <Progress
        type="circle"
        percent={90}
        strokeColor={{
          '0%': '#108ee9',
          '100%': '#87d068',
        }}
      />
        </Content>
      </Layout>
    </Layout>
  {/* <div style={{ display: 'flex', height: '100vh' }}>
      <Sidebar>
        <button onClick={() => collapseSidebar()}>X</button>
        <Menu>
          <MenuItem routerLink={<Link to="book" />}> Books</MenuItem>
          <MenuItem routerLink={<Link to="contact" />}> Contact</MenuItem>
          <MenuItem routerLink={<Link to="contact" />}> Dashboard</MenuItem>
        </Menu>
      </Sidebar>
      
    </div> */}
    
    </>
  )
}
