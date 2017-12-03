import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';

export class NavBar extends React.Component<{}, {}> {
    public render() {
        return  <div className="nav-side-menu">
                   <div className="brand">The Circle</div>
                      <i className="fa fa-bars fa-2x toggle-btn" data-toggle="collapse" data-target="#menu-content"></i>
                        <div className="menu-list">
                            <ul id="menu-content" className="menu-content collapse out">
                                {/*-----------Opcion  Home*---------*/}
                                <li>
                                    <NavLink to={'/home'} activeClassName='active'> 
                                        <i className='fa fa-home'></i>Home
                                    </NavLink>
                                </li>
                                {/*--------------Opcion  Beneficiario*----------*/}
                                <li data-toggle="collapse" data-target="#new" className="collapsed">
                                    <a href="#">
                                        <i className='fa fa-user-circle-o'></i>
                                        Beneficiario
                                        <span className='glyphicon glyphicon-chevron-down'></span>      
                                    </a>
                                </li>
                                <ul className="sub-menu collapse" id="new">                                    
                                    <li>
                                         <NavLink to={'/registroBeneficiario'} activeClassName='active'> 
                                             <span className="glyphicon glyphicon-chevron-right"></span>Visualizar
                                         </NavLink>
                                    </li>                
                                    <li>
                                        <span className="glyphicon glyphicon-chevron-right"></span>Disponibilidad del Beneficiario
                                    </li>
                                    <li>
                                        <span className="glyphicon glyphicon-chevron-right"></span>Asignar Beneficiario a Club
                                    </li>
                                </ul>
                                {/*--------------Opcion  Co-Facilitador*----------*/}
                                <li data-toggle="collapse" data-target="#new1" className="collapsed">
                                    <a href="#">
                                         <i className='fa fa-handshake-o' ></i>
                                         Co-Facilitador
                                         <span className='glyphicon glyphicon-chevron-down'></span>
                                    </a>
                                </li>
                                <ul className="sub-menu collapse" id="new1">
                                    <li>
                                        <NavLink to={'/registroCoFacilitador'} activeClassName='active'> 
                                            <span className="glyphicon glyphicon-chevron-right"></span>Visualizar
                                        </NavLink>
                                    </li>
                                    <li>
                                        <span className="glyphicon glyphicon-chevron-right"></span>Asignar Club a Co-Facilitador
                                    </li>
                                </ul>
                                {/*--------------Opcion  Club*----------*/}
                                <li data-toggle="collapse" data-target="#new2" className="collapsed">
                                    <a href="#">
                                        <i className='fa fa-futbol-o'></i>
                                        Club
                                        <span className='glyphicon glyphicon-chevron-down'></span>
                                    </a>
                                </li>
                                <ul className="sub-menu collapse" id="new2">
                                    <li>
                                        <NavLink to={'/visualizarClub'} activeClassName='active'> 
                                            <span className="glyphicon glyphicon-chevron-right"></span>Visualizar
                                        </NavLink>
                                    </li>
                                    <li>
                                        <span className="glyphicon glyphicon-chevron-right"></span>Asignar Co-Facilitadores a Club
                                    </li>
                                </ul>
                                {/*--------------Opcion  Punto Satelite*----------*/}
                                <li data-toggle="collapse" data-target="#new3" className="collapsed">
                                    <a href="#">
                                        <i className='fa fa-podcast'></i>
                                        Punto Satelite
                                        <span className='glyphicon glyphicon-chevron-down'></span>
                                    </a>
                                </li>
                                <ul className="sub-menu collapse" id="new3">
                                    <li>
                                        <NavLink to={'/registroPuntoSatelite'} activeClassName='active'>
                                            <span className="glyphicon glyphicon-chevron-right"></span>Visualizar
                                        </NavLink>
                                    </li>
                                </ul>
                                {/*--------------Opcion  Programa*----------*/}
                                <li data-toggle="collapse" data-target="#new4" className="collapsed">
                                    <a href="#">
                                       <i className='fa fa-book'></i>
                                        Programa
                                        <span className='glyphicon glyphicon-chevron-down'></span> 
                                     </a>
                                </li>
                                <ul className="sub-menu collapse" id="new4">
                                    <li>
                                        <NavLink to={'/registroPuntoSatelite'} activeClassName='active'> 
                                            <span className="glyphicon glyphicon-chevron-right"></span>Visualizar
                                        </NavLink>
                                    </li>
                                </ul>
                                {/*--------------Opcion  Objetivo Estrategico*----------*/}
                                <li data-toggle="collapse" data-target="#new5" className="collapsed">
                                    <a href="#">
                                        <i className='fa fa-bullseye'></i> Objetivo Estrategico
                                        <span className='glyphicon glyphicon-chevron-down'></span>
                                    </a>
                                </li>
                                <ul className="sub-menu collapse" id="new5">
                                    <li>
                                        <NavLink to={'/registroPuntoSatelite'} activeClassName='active'>
                                            <span className="glyphicon glyphicon-chevron-right"></span>Visualizar
                                        </NavLink>
                                    </li>
                                </ul>

                                {/*--------------Opcion  Localidad*----------*/}
                                <li data-toggle="collapse" data-target="#new6" className="collapsed">
                                    <a href="#">
                                        <i className='fa fa-university'></i>
                                        Localidad
                                        <span className='glyphicon glyphicon-chevron-down'></span>
                                    </a>
                                </li>
                                <ul className="sub-menu collapse" id="new6">
                                    <li>
                                        <NavLink to={'/registroPuntoSatelite'} activeClassName='active'>
                                            <span className="glyphicon glyphicon-chevron-right"></span>Visualizar
                                        </NavLink>
                                    </li>
                                </ul>
                           </ul>       
                      </div>
                </div>;
    }
}
