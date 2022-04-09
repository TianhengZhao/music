import React, {Component} from "react";
import { NavLink } from "react-router-dom";
import {
    Tab,
    TabItem
} from "./style";

export default class MyNavLink extends Component {
    render() {
        return (
            <Tab>
                <NavLink {...this.props} activeClassName="selected">
                    <TabItem>
                        <span>{this.props.children}</span>
                    </TabItem>
                </NavLink>
            </Tab>
       )
    }
}