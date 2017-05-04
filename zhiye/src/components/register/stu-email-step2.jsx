import React, {Component} from 'react';
import { Link } from 'react-router';

export default class StuEmailStepTwo extends Component{
	render() {
		return (
			<article className="about">
				<h2 className="about-title">
					关于梦想
				</h2>
				<section className="about-block border-bottom">
					<p>换工作是一件关乎梦想和选择的事儿。</p>
					<p>你期待，那更高的薪水，看更大的世界，过上更好的生活；</p>
					<p>你期待，做更酷的产品，影响更多的人，做更好的自己；</p>
					<p>所以你努力，为年少时吹过的牛逼，为那些曾经揪心的玩笑和漫长的白日梦。</p>
					<p>而职页，希望可以在你身边，帮你做着力所能及的事。</p>
				</section>

				<section className="about-block">
					<p>你自己需要做什么？</p>
					<p>多一点诚意填写你的简历；多一点野心设计你的未来。</p>
					<p>欢迎加入我们。你值得拥有更好的生活。</p>
					<Link className="submit-btn" to="resume/stuOne">开始</Link>
				</section>
			</article>
		)
	}
}