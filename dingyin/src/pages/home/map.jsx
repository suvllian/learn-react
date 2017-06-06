import React, { Component,PropTypes } from 'react';
import { connect } from 'react-redux';

const Infor = [
  { 
  	title: "5-4总数据发布：",
    infor: "站内活跃用户数共3000人；用户总积极情感率 75%；积极情感率最高的景区为大雁塔，积极情感率为56%。",
    image: "world.png"
  },
  { 
  	title: "5-4中国区数据发布：",
    infor: "站内活跃用户数共1000人；用户总积极情感率 62%；积极情感率最高的景区为回民街，积极情感率为67%。",
    image: "china.jpg"
  },
  { 
  	title: "5-4英国区数据发布：",
    infor: "站内活跃用户数共300人；用户总积极情感率 72%；积极情感率最高的景区为兵马俑，积极情感率为77%。",
    image: "england.jpg"
  }
]

export default class Map extends Component{
	render() {
		return (
			<div className="col-md-4 home-map">
				<h2 className="home-title">情感地图</h2>
				{
					Infor.map((item, index) => 
						<div className="map-block" key={index}>
							<img className="map-img" src={require("./../../assets/" + item.image )} />
							<div>
								<h3 className="map-title">{item.title}</h3>
								<p>{item.infor}</p>
								<p><a className="map-link" href="">更多</a></p>
							</div>
						</div>
					)
				}
			</div>
		)
	}

}
