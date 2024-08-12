//$
//$
const ejerciciosAvanzados = () => {
    //% 1. Deduce una interfaz para este objeto para aplicar en una lista de más productos así.
    const product = {
        name: "monitor",
        price: 200,
        isAvailable: true,
        userInfo: {
            name: "alfonso",
            nickname: "alf",
            age: 30,
            otherProducts: ["mouse", "keyboard"],
        },
    };
    const productList = [
        product, // Add the product object to the productList array
    ];
    const company = {
        id: 123,
        name: "coto",
        password: "4321",
        professional_list: ["julian", "pancho"],
    };
    const profesionalList = [
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
    const getProfessionalList = (company) => {
        return profesionalList.filter((professional) => company.professional_list.includes(professional.username));
    };
    const professionals = getProfessionalList(company);
    console.log(professionals);
    //% 3. Ahora quiero una función sin sentido pero con todas estás opciones:
    // - 1er argumento el nombre de la empresa, pero también podrá ser un numero.
    // - 2do argumento la interfaz de la empresa,
    // - 3ro el profesional destructurado.
    // - 4to argumento que sea un objeto explicito tipo opcional y tenga 2 propiedades, un randomName y un randomAge.
    //? - Al final retornar un array de 3 posibles tipos, Professional, Company y null.
    const getSomething = (NombredeEmpresa, company, { id, username, password, primary_skill, company_list }, { randomName, randomAge }) => {
        return [
            company,
            {
                id: 12,
                username: "holi",
                password: "holi",
                primary_skill: "tipazo",
                company_list: ["coto"],
            },
            null,
        ];
    };
    const getSomething_2 = (NombredeEmpresa, company, profesional, random) => {
        return [company, profesional, null];
    };
    const getSomething_3 = (NombredeEmpresa, company, profesional, random) => {
        return [company, profesional, null];
    };
};
// getSomething(arg1,arg2,arg3,arg4)
// getSomething_2(arg)
//# sourceMappingURL=practicas.js.map