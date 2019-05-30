import * as React from "react";

export class BaseLayout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            width: window.innerWidth
        };
    }

    componentWillMount() {
        window.addEventListener('resize', this.handleWindowResizeChange);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowResizeChange)
    }

    handleWindowResizeChange = () => {
        this.setState({width: window.innerWidth});
    }

    render() {
        const { width } = this.state;
        const isMobile = width <= 500;

        if(isMobile) {
            return (
                <div>
                    mobile
                </div>);
        } else {
            return (
                <div>
                    desktop
                </div>);
        }
    }
}