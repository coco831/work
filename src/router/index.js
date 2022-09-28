import {
  createBrowserRouter
} from "react-router-dom"

import { lazy } from "react";

const CheckAdd = lazy(() => import('../views/CheckAdd/CheckAdd'));
const CheckChange = lazy(() => import('../views/CheckChange/CheckChange'));
const CheckList = lazy(() => import('../views/CheckList/CheckList'));
const Index = lazy(() => import('../views/Index/Index'));
const Login = lazy(() => import('../views/Login/Login'));
const OaHome = lazy(() => import('../views/OaHome/OaHome'));
const UsersList = lazy(() => import('../views/UserList/UserList'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <Index />,
    children: [
      {
        path: 'oa/home',
        element: <OaHome />
      },
      {
        path: 'check/add',
        element: <CheckAdd />
      },
      {
        path: 'check/list',
        element: <CheckList />
      },
      {
        path: 'check/change',
        element: <CheckChange />
      },
      {
        path: 'users/list',
        element: <UsersList />
      },
    ]
  },
  {
    path:'/login',
    element:<Login/>
  },
  {
    path: '*',
    element: '404'
  },
])

export default router