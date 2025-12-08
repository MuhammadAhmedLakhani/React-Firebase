import React, { useState } from 'react';
import LOGO from '../assets/images/Logo.png'
import Minilogo from '../assets/images/Minilogo.png'
import { auth, signOut } from '../firebase/firebase'









import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
    LogoutOutlined
} from '@ant-design/icons';




import { Button, Layout, Menu, theme } from 'antd';
import { Navigate, useNavigate } from 'react-router-dom';
const { Header, Sider, Content } = Layout;




const LayoutApp = ({ children }) => {


    let navigate = useNavigate()

    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    let logoutUser = () => {

        signOut(auth).then(() => {
            console.log("Logout sucessfully")

            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        });









    }




    return (
        <Layout className='vh-100'>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className="demo-logo-vertical text-center p-2" >
                    {collapsed ?
                        <img src={Minilogo} width={40} />
                        :
                        <img src={LOGO} width={100} />


                    }
                </div>
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    items={[
                        {
                            key: '1',
                            icon: <UserOutlined />,
                            label: 'nav 1',
                        },
                        {
                            key: '2',
                            icon: <VideoCameraOutlined />,
                            label: 'nav 2',
                        },
                        {
                            key: '3',
                            icon: <UserOutlined />,
                            label: 'Users',
                            onClick:()=> navigate("/users")
                        },
                        {
                            key: '4',
                            icon: <LogoutOutlined />,
                            label: 'Logout',
                            onClick:()=>logoutUser() 
                            ///logoutUser function with help of firebase auth
                        },
                    ]}
                />
            </Sider>
            <Layout>
                <Header style={{ padding: 0, background: colorBgContainer }}>
                    <Button
                        type="text"
                        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                        onClick={() => setCollapsed(!collapsed)}
                        style={{
                            fontSize: '16px',
                            width: 64,
                            height: 64,
                        }}
                    />
                </Header>
                <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                        background: colorBgContainer,
                        borderRadius: borderRadiusLG,
                    }}
                >
                    {children}
                </Content>
            </Layout>
        </Layout>
    );
};
export default LayoutApp;