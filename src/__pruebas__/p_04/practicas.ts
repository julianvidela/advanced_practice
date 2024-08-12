//$
//$

const ejerciciosAvanzados = () => {
  //% 1. Deduce una interfaz para este objeto para aplicar en una lista de más productos así.

  const product = {
    name: "monitor",
    price: 200, // también puede ser un texto
    isAvailable: true,
    userInfo: {
      name: "alfonso",
      nickname: "alf", //opcional
      age: 30,
      otherProducts: ["mouse", "keyboard"],
    },
  };

  interface IUserInfo {
    name: string;
    nickname?: string;
    age: number;
    otherProducts: string[];
  }

  interface IProduct {
    name: string;
    price: number | string;
    isAvailable: boolean;
    userInfo: IUserInfo;
  }

  const productList: IProduct[] = [
    product, // Add the product object to the productList array
  ];









  

  //% 2. Necesito una función que reciba un objeto de tipo "Company" y me devuelva un listado de objetos de tipo "Professional".

  interface Company {
    id: number;
    name: string;
    password: string;
    professional_list: string[];
  }

  interface Professional {
    id: number;
    username: string;
    password: string;
    primary_skill: string;
    company_list: string[];
  }

  const company: Company = {
    id: 123,
    name: "coto",
    password: "4321",
    professional_list: ["julian", "pancho"],
  };

  const profesionalList: Professional[] = [
    {
      id: 123,
      username: "julian",
      password: "4321",
      primary_skill: "tipazo",
      company_list: ["coto"],
    },
    {
      id: 124,
      username: "pancho",
      password: "4321",
      primary_skill: "tipazo",
      company_list: ["coto"],
    },
  ];

  const getProfessionalList = (company: Company): Professional[] => {
    return profesionalList.filter((professional) =>
      company.professional_list.includes(professional.username)
    );
  };

  const professionals = getProfessionalList(company);

  console.log(professionals);













  //% 3. Ahora quiero una función sin sentido pero con todas estás opciones:

  // - 1er argumento el nombre de la empresa, pero también podrá ser un numero.
  // - 2do argumento la interfaz de la empresa,
  // - 3ro el profesional destructurado.
  // - 4to argumento que sea un objeto explicito tipo opcional y tenga 2 propiedades, un randomName y un randomAge.
  //? - Al final retornar un array de 3 posibles tipos, Professional, Company y null.

  const getSomething = (
    NombredeEmpresa: string | number,
    company: Company,
    { id, username, password, primary_skill, company_list }: Professional,
    { randomName, randomAge }: { randomName?: string; randomAge?: number }
  ): (Professional | Company | null)[] => {
    return [
      company,
      {
        id: 12,
        username: "holi",
        password: "holi",
        primary_skill: "tipazo",
        company_list: ["coto"],
      } as Professional,
      null,
    ];
  };










  //% 4. Por último, haz una tipado externo para la función anterior y apliquemoslo, pero quitale todo el tipado a la función. (Solo dejalo con su tipado externo).

  interface randomOptions {
    randomName: string;
    randomAge: number;
  }

  type GetSomethingType = (
    NombredeEmpresa: string | number,
    company: Company,
    { id, username, password, primary_skill, company_list }: Professional,
    { randomName, randomAge }: { randomName?: string; randomAge?: number }
  ) => (Professional | Company | null)[];

  interface MethodsList {
    GetSomethingType: (
      NombredeEmpresa: string | number,
      company: Company,
      { id, username, password, primary_skill, company_list }: Professional,
      { randomName, randomAge }: { randomName?: string; randomAge?: number }
    ) => (Professional | Company | null)[];
  }

  const getSomething_2: MethodsList["GetSomethingType"] = (
    NombredeEmpresa,company, profesional,random
) => {
    return [company, profesional, null];
  };

  const getSomething_3: GetSomethingType = (
    NombredeEmpresa,
    company,
    profesional,
    random
  ) => {
    return [company, profesional, null];
  };
};

// getSomething(arg1,arg2,arg3,arg4)
// getSomething_2(arg)