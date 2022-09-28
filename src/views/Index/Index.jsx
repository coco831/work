import React from 'react';
import './Index.scss';
import { Outlet } from 'react-router-dom';
export default function index() {
  return (
    <div>
      Index<br/>
      <Outlet></Outlet>
    </div>
  );
}
