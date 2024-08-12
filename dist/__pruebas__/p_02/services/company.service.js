"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyService = void 0;
class CompanyService {
    //% todas las propiedades que pertenezcan a otro servicio deberían ser privadas, no tinene sentido usarlas fuera de la clase.
    //? example: si tengo Si quiero usar los servicios PropSerivce en está clase
    //? => private _prop: PropService;
    //% encuentrá la forma desde el CONSTRUCTOR de recibir los servicios de otro lado, y poder igualarlos a alguna propiedad de la clase. NO OLIVDES USAR 'this'.
    constructor(professinalService) {
        this.professinalService = professinalService;
        this.professinalService = professinalService;
    }
}
exports.CompanyService = CompanyService;
//# sourceMappingURL=company.service.js.map