import { db, Professional } from "../db";
import { ProfessionalService } from "./professional.service";

export class CompanyService {






  //% todas las propiedades que pertenezcan a otro servicio deberían ser privadas, no tinene sentido usarlas fuera de la clase.
  //? example: si tengo Si quiero usar los servicios PropSerivce en está clase
  //? => private _prop: PropService;

  //% encuentrá la forma desde el CONSTRUCTOR de recibir los servicios de otro lado, y poder igualarlos a alguna propiedad de la clase. NO OLIVDES USAR 'this'.
  constructor( private professinalService : ProfessionalService) {
    
    this.professinalService = professinalService;
    
  }


  //% deberás obtener una lista de profesionales asociados a la compania que reciba, recuerda que las empresas tienen un listado de profesionales que trabajan en ella (ver db.ts).
  //$ getProfessionalByCompanyName(companyName: string): Professional[] {
  //$ }
}
