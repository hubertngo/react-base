/* --------------------------------------------------------
* Author Ngô An Ninh
* Email ninh.uit@gmail.com
* Phone (+65) 8305 8687
*
* Created: 2020-04-24 16:20:31
*------------------------------------------------------- */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Layout, Menu } from 'antd';
import {
	MenuUnfoldOutlined,
	MenuFoldOutlined,
	UserOutlined,
	VideoCameraOutlined,
	UploadOutlined,
} from '@ant-design/icons';
import {
	Link,
} from 'react-router-dom';

const { Header, Sider, Content } = Layout;
const MainLayout = ({ children }) => {
	const [collapsed, setCollapsed] = useState(false);
	const toggle = () => {
		setCollapsed(!collapsed);
	};

	return (
		<Layout>
			<Sider trigger={null} collapsible collapsed={collapsed}>
				<div className="logo" />
				<Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
					<Menu.Item key="1">
						<UserOutlined />
						<Link to="/">Home</Link>
					</Menu.Item>
					<Menu.Item key="2">
						<VideoCameraOutlined />
						<Link to="/about">About</Link>
					</Menu.Item>
					<Menu.Item key="3">
						<UploadOutlined />
						<Link to="/users">Users</Link>
					</Menu.Item>
				</Menu>
			</Sider>
			<Layout className="site-layout">
				<Header className="site-layout-background" style={{ padding: 0 }}>
					{React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
						className: 'trigger',
						onClick: toggle,
					})}
				</Header>
				<Content
					className="site-layout-background"
					style={{
						margin: '24px 16px',
						padding: 24,
						minHeight: 280,
					}}
				>
					{children}
				</Content>
			</Layout>
		</Layout>
	);
};

MainLayout.propTypes = {
	children: PropTypes.node.isRequired,
};

MainLayout.defaultProps = {
	// classes: {},
};

export default MainLayout;
