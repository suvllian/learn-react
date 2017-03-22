class Component {
    constructor(props = {}) {
        this.props = props;
    }

    setState(state) {
        let oldEl = this.el;
        this.state = state;
        this.el = this.renderDOM();
        if (this.onStateChange) {
            this.onStateChange(oldEl, this.el);
        }
    }

    renderDOM(){
        this.el = this.createDOMFromString(this.render());
        if (this.onClick) {
            this.el.addEventListener("click", this.onClick.bind(this));
        }
        return this.el;
    }

    createDOMFromString(domString) {
        let div = document.createElement("div");
        div.innerHTML = domString;
        return div;
    }
}

export default Component;