import { Company, CompanyName, Professional, ProfessionalName } from "./db.interface";
import { getDB, getDbFunction } from "./fetch";

//$ IMPORTANTE LEER:
//$ getDB internamente trabaja con axios, trabaja con un recurso externo, no estamos usando el archivo db.json.
//$ Cualquier restricción solamente aplica para la función o parte donde se indica el ejercicio, no por fuera en la función main06.

//? getDB: Es una promesa (getDB: Promise<DB>) que trae de un json online la base de datos. (url "https://raw.githubusercontent.com/finstory/practicas_codexpert/main/src/pruebas/p_06/db.json")
//? interfaces: Comprueba db.interface.ts, donde se encuentran las interfaces de la base de datos, professional y company.


export const main_rama = async () => {

    //% 1. Debes obtener la empresa de nombre "GamingSoft" y también funciorar para "TechInnovators".

    //% a. Libertad de implementarlo como sea. (getDB)
    const getCompanyByName1 = async (companyName: CompanyName): Promise<Company> => {
        const companiesDB: Company[] = (await getDB).companies;
        const result:Company[] = companiesDB.filter((comp :Company) => comp.name === companyName)
    
        return  result[0]  
         };

    const test_rama_01 = await getCompanyByName1("GamingSoft")
    console.log(test_rama_01)

// const test01 = await getCompanyByName01("EduTech")
//     console.log(test01)

    //% .b Solo puedes usar promesas, está prohibido async/await (getDB)
    const getCompanyByName2 = (companyName: CompanyName): any => {
        
    };

    //% .c Con getDbFunction como sea:
    // const getCompanyByName3 = (companyName: CompanyName): Promise<Company> => {}

    //% .d Con getDbFunction y sin async | await:
    // const getCompanyByName4 = (companyName: CompanyName): Promise<Company> => {}

    //! De aquí para abajo, en todos los ejercicios, esta prohibido "getDbFunction".


    //% 2. Debes construir una función en la que se recibirá el nombre de una empresa y retornará todos los profesiales (Professional[]) que trabrabajen en ella.

    //%. a. Libertad de implentarlo como sea.
    const getAllProfessional1 = async (companyName: CompanyName) => { };

    //% b. No puedes usar async | await. (piensa en trabajar la promesa)
    // const getAllProfessional2 = (companyName: CompanyName): Promise<Professional[]> => {};


    //% a. "Before to Start" => Necesitamos primero crear una función para obtener un profesional por su nombre, para evitar saturar el back, se necesita esperar 1 segundo antes de devolver el resultado.

    // const getProfessionalByName = async (username: ProfessionalName) => { }

    //% b. Necesitamos obtener todos los profesionales que llegan de getAllProfessionalByName lo más rápido posible.
    //% Además queremos que se notifique cada vez que se obtenga un profesional.

    // const getProfessionalByListName1 = async (listName: ProfessionalName[]) => {}

    //% c. Ahora preferimos hacerlo con más tiempo porque necesitamos evitar que se filtre información de estás 2 personas, sus nicknames son "john_doe" y "jane23". En especial para las empresas GamingSoft y ReadStong.
    //% Además queremos que se notifique cada vez que se obtenga un profesional, si fue bloqueado u obtenido.

    //$ No puedes usar promesas en paralelo, solo en serie. Debes esperar que termines una para empezar la otra.
    //$ No puedes editar "listName", estás obligado a hacer una promesa para cada nombre de la lista del profesional que recibas.

    // const getProfessionalByListName2 = async (listName: ProfessionalName[]) => {}

};
