import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './StyleTopBar.css'

export default class TopBar extends React.Component<{}, {}> {
    public render() {
        return <div className="navbar navbar-default navbar-fixed-top" role="navigation">
            <div className="container">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <a target="_blank" href="#" className="navbar-brand">My sApp.</a>
                </div>
                <div className="collapse navbar-collapse">
                    <ul className="nav navbar-nav">
                        <li><a href="#">Inicio</a></li>
                        <li className="active"><a href="http://bootsnipp.com/snippets/featured/nav-account-manager" target="_blank">Inspirado en este ejemplo</a></li>
                        <li className="dropdown">
                            <a href="#" className="dropdown-toggle" data-toggle="dropdown">DropDown
                    <span className="caret"></span>
                            </a>
                            <ul className="dropdown-menu">
                                <li><a href="#">Link 2</a></li>
                            </ul>
                        </li>
                    </ul>
                    <ul className="nav navbar-nav navbar-right">
                        <li className="dropdown">
                            <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                <span className="glyphicon glyphicon-user"></span>
                                <strong>Nombre</strong>
                                <span className="glyphicon glyphicon-chevron-down"></span>
                            </a>
                            <ul className="dropdown-menu">
                                <li>
                                    <div className="navbar-login">
                                        <div className="row">
                                            <div className="col-lg-4">
                                                <p className="text-center">
                                                    <span className="glyphicon glyphicon-user icon-size"></span>
                                                </p>
                                            </div>
                                            <div className="col-lg-8">
                                                <p className="text-left"><strong>Nombre Apellido</strong></p>
                                                <p className="text-left small">correoElectronico@email.com</p>
                                                <p className="text-left">
                                                    <a href="#" className="btn btn-primary btn-block btn-sm">Actualizar Datos</a>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="divider"></li>
                                <li>
                                    <div className="navbar-login navbar-login-session">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <p>
                                                    <a href="#" className="btn btn-danger btn-block">Cerrar Sesion</a>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>;
    }
}