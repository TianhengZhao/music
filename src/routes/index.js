import React from 'react';
import { Redirect } from 'react-router-dom';
import Home from '../applications/Home/index.js';
import Recommend from '../applications/Recommend/index.js';
import Rank from '../applications/Rank/index.js';
import Singers from '../applications/Singers/index.js';
import Album from '../applications/Album/index';

// eslint-disable-next-line 
export default [
    {
        path: "/",
        component: Home, // 公共组件
        // 子路由们
        routes: [
            {
                path: "/",
                exact: true,
                render: () => (
                    <Redirect to={"/recommend"}/>
                )
            },
            {
                path: "/recommend",
                component: Recommend,
                routes: [{
                    path: "/recommend/:id",
                    component: Album
                }]
            },
            {
                path: "/singers",
                component:Singers
            },
            {
                path: "/rank",
                component: Rank,
                routes: [{
                    path: "/rank/:id",
                    component: Album
                }]
            }
        ]
    }
]