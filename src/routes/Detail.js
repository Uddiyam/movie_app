import { render } from "@testing-library/react";
import React from "react";

/* 함수형 컴포넌트
function Detail(props) {
    console.log(props);
    return <span>hello</span>
}
*/

// 클래스형 컴포넌트
class Detail extends React.Component {
    componentDidMount() {
        const { location, history } = this.props;
        if (location.state === undefined) {
            history.push('/');
        }
    }


    render() { // 작동순서 render() -> componentDidMount()
        const { location } = this.props;
        if (location.state){
            return <span>{location.state.title}</span>;
        }
        else {
            return null;
        }
    }
}

export default Detail;