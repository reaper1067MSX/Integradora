import * as React from 'react';

export  class Club extends React.Component<{}, {}> {
    public render() {
        return <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="well well-sm">
                        <form className="form-horizontal" method="post">
                            <fieldset>
                                <legend className="text-center header">Club</legend>

                                <div className="form-group">
                                    <span className="col-md-1 col-md-offset-2 text-center">
                                        <i className='fa fa-user bigicon'></i></span>
                                    <div className="col-md-8">
                                        <input id="fname" name="name" type="text" placeholder="Nombre" className="form-control">
                                        </input>
                                            </div>
                                    </div>
                                    <div className="form-group">
                                        <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-user bigicon"></i></span>
                                        <div className="col-md-8">
                                            <input id="lname" name="name" type="text" placeholder="Punto Satelite" className="form-control">
                                            </input>
                                                </div>
                                        </div>

                                        <div className="form-group">
                                            <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-envelope-o bigicon"></i></span>
                                            <div className="col-md-8">
                                                <input id="email" name="email" type="text" placeholder="Programa" className="form-control">
                                                </input>
                                                    </div>
                                            </div>


                                                <div className="form-group">
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-pencil-square-o bigicon"></i></span>
                                                    <div className="col-md-8">
                                        <textarea placeholder="Observaciones"></textarea>
                                                    </div>
                                                </div>

                                                <div className="form-group">
                                                    <div className="col-md-12 text-center">
                                                        <button type="submit" className="btn btn-primary btn-lg">Guardar</button>
                                                    </div>
                                                </div>
                    </fieldset>
                 </form>
               </div>
                                </div>

    </div>
</div>;
    }
}