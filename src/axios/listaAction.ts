import httpCliente from '../helpers/httpClient';

export const listaTotal = () => {
    return new Promise ((resolve, eject):any => {
        httpCliente.get("/departamentos").then((response:any) =>
        {
            resolve(response);
        }).catch((error):any=>{
            resolve(error.response);
        })
    })
}

export const paginacion = (request:any) => {
    return new Promise ((resolve:any, eject) => {
        console.log({request})
        // httpCliente.get(`/departamentos/lista?Buscar=${request.buscar}&NumeroElementos=${request.cantidadElementos}&NumeroPagina=${request.numeroPagina}`).then((response:any) =>
        httpCliente.get(`/departamentos/lista?Buscar=${request.buscar}&NumeroElementos=${request.cantidadElementos}&NumeroPagina=${request.numeroPagina}&FiltroDepartamento=${request.filtroDepartamento}&tipoFiltroDepartamento=${request.tipoFiltroDepartamento}&FiltroNombre=${request.filtroNombre}&TipoFiltroNombre=${request.tipoFiltroNombre}`).then((response:any) =>
        {
            resolve(response);
        }).catch((error):any=>{
            if (error instanceof Error) {
                // ✅ TypeScript knows err is Error
                resolve(error.message);
              } else {
                resolve(error);
              }
        })
    })
}