import React from "react";
import { Link } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
    return (
        <div className="nav">
            <Link to ="/">Home</Link>    {/* <a href="/">Home</a>를 사용하면 a 엘리먼트 특징 때문에 링크를 누를 때마다 리액트가 죽고 새페이지가 열리는 문제 발생 */}
            <Link to ="/about">About</Link>
            {/* <Link to ={{pathname: "/about", state: { fromNavigation: true}}}>About</Link>     pathname 은 URL , state는 route props에 보내줄 데이터 */}
        </div>
    );
}

export default Navigation;