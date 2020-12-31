
import React from 'react'
import { Form, Input, Button, Checkbox } from 'antd';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import xx from '../../imgs/348121982377534484.jpg'
import {gets} from "../../resource/aaxios"

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

  export default class Home extends React.Component{
    state={
      arrlist:[]
    }
    huoqu=()=>{
      gets("https://www.fastmock.site/mock/8366c9d7b2675f9ec1118d61f1576568/1111/222").then((res)=>{
          console.log(res.data.data);
          this.setState({
              arrlist: res.data.data
          })
      }).catch((err)=>{
          console.info(err)
      })
  }
  showData=()=>{
    return this.state.arrlist.map((v)=><li key={v.count}>{v.secName}</li>)
  }

    
  render(){
      return(
        <div className='xx'>
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
     
    >
      <SwiperSlide>Slide <img src={xx} style={{ height:250}}/>1</SwiperSlide>
      <SwiperSlide>Slide <img src={xx} style={{ height:250}}/> 2</SwiperSlide>
      <SwiperSlide>Slide <img src={xx} style={{ height:250}}/> 3</SwiperSlide>
      <SwiperSlide>Slide <img src={xx} style={{ height:250}}/> 4</SwiperSlide>
     
     你在干啥
    </Swiper>
          
          <button onClick={this.huoqu}>
            获取
          </button>
       <ul>
       {this.showData()}
       </ul>

        </div>
      )
      
  }
  }