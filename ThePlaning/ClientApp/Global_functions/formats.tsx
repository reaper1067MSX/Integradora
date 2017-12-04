export const formatearFecha = (fecha) => {
    var partes_fecha = '';
    var temp = '';
    var partefecha2 = ''
    partes_fecha = fecha.split("-");
    temp = partes_fecha[2];
    partefecha2 = temp.substring(0, 2);

    fecha = partefecha2 + '/' + partes_fecha[1] + '/' + partes_fecha[0];
    return fecha;
}