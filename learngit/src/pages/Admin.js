import React from 'react'
import {Row,Col} from 'antd'
import 'antd/dist/antd.css';
import './Admin.scss'
import Header from '../components/Header/Header'
import NavLeft from '../components/NavLeft/NavLeft'
// import Footer from '../components/Footer/Footer'
// import Home from './home/home'
import City from './city/City'
export default class Admin extends React.Component{
    render(){
        return (
            <Row className="container">
				<Col span="4" className="nav-left">
					<NavLeft></NavLeft>
				</Col>
				<Col span="20" className="main">
					<Header menuName="这是顶部"></Header>
					<Row className="content">
						{this.props.children}
						{/* <Home></Home> */}
						{/* <City></City> */}
					</Row>
					{/* <Footer></Footer> */}
				</Col>
			</Row>
        )
    }
}











