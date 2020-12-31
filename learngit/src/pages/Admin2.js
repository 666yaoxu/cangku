import React from 'react'
import {Row,Col} from 'antd'
import 'antd/dist/antd.css';

import Header from '../components/Header/Header'
// import Footer from '../components/Footer/Footer'
// import Home from './home/home'
export default class Admin extends React.Component{
    render(){
        return (
            <>
				<Row className="simple-page">
					<Col span="24">
						<Header menuType="second" />
					</Col>
				</Row>
				<Row className="content">
					<Col span="24">
						{/* 这里专门用来接纳任何组件 */}
						{this.props.children}
					</Col>
				</Row>
			</>
        )
    }
}
