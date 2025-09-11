import { Outlet, Link } from "react-router-dom";
import React from 'react';
import Header from "./Header";

export default function Layout() {
    return <>
        <Header></Header>
        <Outlet />
    </>
}