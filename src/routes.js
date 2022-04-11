import React from "react";
import { Redirect } from "react-router-dom";

// Layout Types
import { DefaultLayout, EmptyLayout } from "./layouts";

// Route Views
import BlogOverview from "./views/BlogOverview";
import UserProfileLite from "./views/UserProfileLite";
import AddNewPost from "./views/AddNewPost";
import Errors from "./views/Errors";
import ComponentsOverview from "./views/ComponentsOverview";
import Tables from "./views/Tables";
import BlogPosts from "./views/BlogPosts";
import Login from "./views/Login";
import Register from "./views/Register";


export default [
  {
    path: "/login",
    exact: true,
    layout: EmptyLayout,
    component: Login,
    auth: false
  },
  {
    path: "/register",
    exact: true,
    layout: EmptyLayout,
    component: Register,
    auth: false
  },
  {
    path: "/",
    exact: true,
    layout: DefaultLayout,
    component: () => <Redirect to="/blog-overview" />,
    auth: true
  },
  {
    path: "/blog-overview",
    layout: DefaultLayout,
    component: BlogOverview,
    auth: true
  },
  {
    path: "/user-profile-lite",
    layout: DefaultLayout,
    component: UserProfileLite,
    auth: true
  },
  {
    path: "/add-new-post",
    layout: DefaultLayout,
    component: AddNewPost,
    auth: true
  },
  {
    path: "/errors",
    layout: DefaultLayout,
    component: Errors,
    auth: true
  },
  {
    path: "/components-overview",
    layout: DefaultLayout,
    component: ComponentsOverview,
    auth: true
  },
  {
    path: "/tables",
    layout: DefaultLayout,
    component: Tables,
    auth: true
  },
  {
    path: "/blog-posts",
    layout: DefaultLayout,
    component: BlogPosts,
    auth: true
  }
];
