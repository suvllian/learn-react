import {Component} from './simple-react.js';

class LikeButton extends Component{
  constructor(props) {
    super(props);
    this.state = { isLiked: false }      
  }

  onClick(){
    this.setState({
        isLiked: !this.state.isLiked
    });
  }

  render() {
    return `<button><span class='like-text'> ${this.state.isLiked ? '取消' : '点赞'}</span></button>`;
  }  
}

export default LikeButton;