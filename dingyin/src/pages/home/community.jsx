import React, { Component,PropTypes } from 'react';
import { connect } from 'react-redux';

const Infor = [
  { 
  	title: "回民街 开心",
  	comment: "回民街有超级多好吃的东西！",
    user: "miomio  5-5 12:30",
    image: "huiminjie.jpg"
  },
  { 
  	title: "大雁塔 惊讶",
  	comment: "整个广场由水景喷泉、文化广场、园林景观、文化长廊和旅游商贸设施等组成。中央为主景水道，左右两侧分置“唐诗园林区”、“法相花坛区”、“禅修林树区”等景观，广场南端设置“水景落瀑”、“主题水景”、“观景平台”等景观。",
    user: "天晴想吃冰淇淋  5-5 12:45",
    image: "dayanta.jpg"
  }
]

export default class Community extends Component{
	render() {
		return (
			<div className="col-md-8 home-community">
				<h2 className="home-title">社区 | <span>实时评论</span></h2>
				{
					Infor.map((item, index) => 
						<div className="map-block col-md-6" key={index}>
							<img className="map-img" src={require("./../../assets/" + item.image)} />
							<div>
								<h3 className="map-title">坐标：{item.title}</h3>
								<p>{item.comment}</p>
								<p>{item.user}</p>
							</div>
						</div>
					)
				}
				<h2 className="home-title">社区 | <span>解忧树洞</span></h2>
				<div className="map-block">
					<img src={require("./../../assets/map.png")} />
					<div>
						<h3 className="map-title">常见困惑问题直达链接：</h3>
						<p>
							饮食问题：<a className="map-link" href="">大雁塔</a>、<a className="map-link" href="">大唐芙蓉园</a>
						</p>
						<p>
							交通问题：<a className="map-link" href="">兵马俑</a>
						</p>
						<p>
							购物问题：<a className="map-link" href="">袁家村</a>
						</p>
					</div>
				</div>
			</div>
		)
	}

}
