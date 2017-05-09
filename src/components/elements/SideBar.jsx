import {Link} from 'react-router';
import React from 'react';

export default function SideBar ()  {
  return (
    <div id="sidebar-wrapper">
        <ul id="sidebar_menu" className="sidebar-nav">
           <li className="sidebar-brand"><a id="menu-toggle" href="#">Menu<span id="main_icon" className="glyphicon glyphicon-align-justify"></span></a></li>
        </ul>
        <ul className="sidebar-nav" id="sidebar">
          <li><a>Cadastro<span className="sub_icon glyphicon glyphicon-link"></span></a></li>
           <ul className="sidebar-nav" id="sidebar">
                <li><a>link1<span className="sub_icon glyphicon glyphicon-link"></span></a></li>
                <li><a>link2<span className="sub_icon glyphicon glyphicon-link"></span></a></li>
           </ul>
          <li><a>Consulta<span className="sub_icon glyphicon glyphicon-link"></span></a></li>
          <li><a>Relatorio<span className="sub_icon glyphicon glyphicon-link"></span></a></li>
        </ul>
      </div>
  );
}


