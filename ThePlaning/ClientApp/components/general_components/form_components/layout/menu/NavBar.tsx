import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';

export class NavBar extends React.Component<{}, {}> {
    public render() {
        return  <div className="nav-side-menu">
                   <div className="brand">The Planing</div>
                      <i className="fa fa-bars fa-2x toggle-btn" data-toggle="collapse" data-target="#menu-content"></i>
                        <div className="menu-list">
                           <ul id="menu-content" className="menu-content collapse out">
                                <li>
                                    <NavLink to={'/home'} activeClassName='active'> 
                                        <i className='fa fa-podcast'></i>
                                            Home
                                    </NavLink>
                                </li>

                                <li data-toggle="collapse" data-target="#new" className="collapsed">
                                    <a href="#">
                                        <i className='fa fa-user-circle-o'></i>
                                            Beneficiario
                                        <span className='glyphicon glyphicon-chevron-down'></span>      
                                    </a>
                                </li>
                                <ul className="sub-menu collapse" id="new">
                                    <li>
                                        <NavLink to={'/home'} activeClassName='active'> 
                                            <span className="glyphicon glyphicon-chevron-right"></span>Visualizar
                                        </NavLink>
                                    </li>                                     
                                    <li>
                                        <span className="glyphicon glyphicon-chevron-right"></span>Registrar
                                    </li>                
                                    <li>
                                        <span className="glyphicon glyphicon-chevron-right"></span>Disponibilidad del Beneficiario
                                    </li>
                                    <li>
                                        <span className="glyphicon glyphicon-chevron-right"></span>Asignar Beneficiario a Club
                                    </li>
                                </ul>
                                <li data-toggle="collapse" data-target="#new1" className="collapsed">
                                    <a href="#">
                                         <i className='fa fa-handshake-o' ></i>
                                            Co-Facilitador
                                        <span className='glyphicon glyphicon-chevron-down'></span>
                                    </a>
                                </li>
                                <ul className="sub-menu collapse" id="new1">
                                    <li>
                                        <span className="glyphicon glyphicon-chevron-right"></span>Visualizar
                                    </li>
                                    <li>
                                        <span className="glyphicon glyphicon-chevron-right"></span>Registrar
                                    </li>
                                    <li>
                                        <span className="glyphicon glyphicon-chevron-right"></span>Asignar Club a Co-Facilitador
                                    </li>
                                </ul>
                                <li data-toggle="collapse" data-target="#new2" className="collapsed">
                                    <a href="#">
                                         <i className='fa fa-address-book-o'></i>
                                            Club
                                        <span className='glyphicon glyphicon-chevron-down'></span>
                                    </a>
                                </li>
                                <ul className="sub-menu collapse" id="new2">
                                <li>
                                        <span className="glyphicon glyphicon-chevron-right"></span>
                                        Visualizar
                                
                                    </li>
                                 <li>
                            <NavLink to={'/registroClub'} activeClassName='active'> 
                                        <span className="glyphicon glyphicon-chevron-right"></span>
                                        Registrar
                                </NavLink>
                                    </li>
                                    <li>
                                        <span className="glyphicon glyphicon-chevron-right"></span>
                                            Asignar Co-Facilitadores a Club
                                    </li>
                                </ul>
                                <li data-toggle="collapse" data-target="#new3" className="collapsed">
                                    <a href="#">
                                        <i className='fa fa-podcast'></i>
                                        Punto Satelite
                                        <span className='glyphicon glyphicon-chevron-down'></span>
                                    </a>
                                </li>
                                <ul className="sub-menu collapse" id="new3">
                                    <li>
                                        <span className="glyphicon glyphicon-chevron-right"></span>
                                            Visualizar
                                    </li>
                                    <li>
                                        <NavLink to={'/puntosatelite'} activeClassName='active'> 
                                            <span className="glyphicon glyphicon-chevron-right"></span>Registrar
                                        </NavLink>
                                    </li>
                                </ul>
                           </ul>
                      </div>
                </div>;
    }
}
