import { use } from "passport";
import {
  Company,
  CompanyName,
  Professional,
  ProfessionalName,
} from "./db.interface";
import { getDB, getDbFunction } from "./fetch";

//$ IMPORTANTE LEER:
//$ getDB internamente trabaja con axios, trabaja con un recurso externo, no estamos usando el archivo db.json.
//$ Cualquier restricción solamente aplica para la función o parte donde se indica el ejercicio, no por fuera en la función main06.

//? getDB: Es una promesa (getDB: Promise<DB>) que trae de un json online la base de datos. (url "https://raw.githubusercontent.com/finstory/practicas_codexpert/main/src/pruebas/p_06/db.json")
//? interfaces: Comprueba db.interface.ts, donde se encuentran las interfaces de la base de datos, professional y company.

export const main06 = async () => {
  // //% 1. Debes obtener la empresa de nombre "GamingSoft" y también funciorar para "TechInnovators".

  // //% a. Libertad de implementarlo como sea. (getDB)

  // //?opcion 1

  // // const getCompanyByName1_ = async (companyName: CompanyName): Promise<Company> => {
  // //     const db = await getDB;
  // //     return db.companies.find(c => c.name === companyName);
  // // };

  // //?opcion 2

  // // const getCompanyByName1 = async (companyName: CompanyName): Promise<Company> => {
  // //     const companiesDB: Company[] = (await getDB).companies;
  // //     const result: Company[] = companiesDB.filter((comp: Company) => comp.name === companyName)

  // //     return result[0]
  // // };

  // //% .b Solo puedes usar promesas, está prohibido async/await (getDB)

   const getCompanyByName02 = (companyName: CompanyName): Promise<Company> => {

  //     //? opcion mas simple para este caso.

  //     // return getDB.then(({ companies }) => companies.find(company => company.name === companyName));

  //     //? opcion ideal para manejar observables o funciones que manejen un callback
       return new Promise<Company>((resolve, reject) =>

          getDB
               .then(db => {
                   const company = db.companies.find(c => c.name === companyName)

                  if (company) resolve(company)
                    
                   else { reject(new Error("no esta")) }
               })
               .catch(error => {
                   console.log(error)
              })

       )
   }

  // //Activado en la consola
  // // console.log(await getCompanyByName02("FoodiesHub"))

  // //% .c Usar solo getDbFunction para obtener la db, vale todo:
   const getCompanyByName3 = async (companyName: CompanyName): Promise<Company> => {

       const db = await getDbFunction();
       return db.companies.find(company => company.name === companyName)
   }

   console.log(await getCompanyByName3("EduTech"))

  // //% .d Usar solo getDbFunction para obtener la db y sin async | await:

   const getCompanyByName4 = (companyName: CompanyName): Promise<Company> => {

       return getDbFunction().then(({ companies }) => companies.find(company => company.name === companyName));

   }

  // //! De aquí para abajo, en todos los ejercicios, esta prohibido "getDbFunction".

  // //% 2. Debes construir una función en la que se recibirá el nombre de una empresa y retornará todos los profesiales (Professional[]) que trabrabajen en ella.

  // //%. a. Libertad de implentarlo como sea.

   const getAllProfessional1 = async (companyName: CompanyName) => {

      const db = await getDB;

      // return company.professional_list.map(name => {
      //   return db.professionals.find(prof => prof.username === name)

      const company = db.companies.find(c => c.name === companyName);

      return company.professional_list.filter(name => db.professionals.filter(p => p.username === name));

   };

   console.log(await getAllProfessional1("GamingSoft"))

   //% b. No puedes usar async | await. (piensa en trabajar la promesa)

    const getAllProfessional2 = (companyName: CompanyName): Promise<Professional[]> => {

          return getDB.then(({ companies, professionals }) => {

              const company = companies.find(c => c.name === companyName);

              return company.professional_list.map(name => professionals.find(p => p.username === name));

          });

    };

  // //% a. "Before to Start" => Necesitamos primero crear una función para obtener un profesional por su nombre, para evitar saturar el back, se necesita esperar 1 segundo antes de devolver el resultado.

  const getProfessionalByName = async (username: ProfessionalName): Promise<Professional> => {

    const db = await getDB;

    return new Promise<Professional>((resolve) => {

      const professional = db.professionals.find(
        (prof) => prof.username === username
      );
      setTimeout( () => {

        resolve(professional);

      }, 1000);
    });
  };

  console.log(getProfessionalByName("alex_smith"));

  //% b. Necesitamos obtener todos los profesionales que llegan de getAllProfessionalByName lo más rápido posible.
  //% Además queremos que se notifique cada vez que se obtenga un profesional.

  const getProfessionalByListName1 = async (listName: ProfessionalName[]) => {
    
    let usersList: Professional[] = [];

    console.time("Execution Time");
    await Promise.all(
      listName.map(async (name) => {
        const user = await getProfessionalByName(name);

        usersList.push(user);
        console.log(`Profesional obtenido: ${user.username}`);
      })
    );

    console.log(usersList);
  };

  console.log(
    getProfessionalByListName1([
      "alex_smith",
      "ava_silver",
      "charlotte_gray",
      "charlie_black",
    ])
  );

  //% c. Ahora preferimos hacerlo con más tiempo porque necesitamos evitar que se filtre información de estás 2 personas, sus nicknames son "john_doe" y "jane23". En especial para las empresas GamingSoft y ReadStong.
  //% Además queremos que se notifique cada vez que se obtenga un profesional, si fue bloqueado u obtenido.

  //$ No puedes usar promesas en paralelo, solo en serie. Debes esperar que termines una para empezar la otra.
  //$ No puedes editar "listName", estás obligado a hacer una promesa para cada nombre de la lista del profesional que recibas.

   const getProfessionalByListName2 = async (listName: ProfessionalName[]) => {
    const getProfessionalByListName2 = async (listName: ProfessionalName[]) => {

      const result = [];
      const blackList = ["john_doe", "alex_smith"];

      for (const name of listName) {


          const pro = await getProfessionalByName(name);
          if (blackList.includes(name)) {
              console.log("Profesional bloqueado:", name);
               continue;
          }

          else result.push(pro);
          console.log("Profesional obtenido:", name);

      }
      return result;
  }
    
     

    
   }
};
