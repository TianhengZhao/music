import React from "react";
import { renderRoutes } from "react-router-config";
import {
    Top,
    Tab,
} from "./style";
import MyNavLink from "./MyNavLink";

function Home(props) {  
    const { route } = props;   
    return (
        <div>
            <Top>
                <span className="iconfont icon-label"></span>
                <span className="title">My music</span>
                <span className="iconfont icon-label"></span>
            </Top>
            <Tab>
                <MyNavLink to="/recommend">推荐</MyNavLink>
                <MyNavLink to="/singers">歌手</MyNavLink>
                <MyNavLink to="/rank">排名</MyNavLink>
            </Tab>
            {/* 为什么有人说用route.routers */}
            {/*renderRoutes只能渲染一层路由。App.js里渲染了一层公共组件Home，Home下一层需要在Home里再调用renderRoutes*/}
            {/* 路由展示区 */}
            { renderRoutes(route.routes) } 
        </div>       
    )
}

export default React.memo(Home)

// export default class Home extends React.Component {
//     myRef = React.createRef()
//     show =()=> {
//         console.log(this.myRef.current)

//     }
//     render () {

//         return (
//             <div>
//                 <MyNavLink ref={this.myRef} to="/recommend">推荐</MyNavLink>
//                 <button onClick={this.show}>aaa</button>
//             </div>
//         )
//     }
// }