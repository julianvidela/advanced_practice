"use strict";
//$
//$
Object.defineProperty(exports, "__esModule", { value: true });
exports.main = void 0;
const main = () => {
    //% Typescript - tipados más comunes :
    //% 1- tipados de varaibles nativos : number, string, boolean, any, null, undefined.
    const a = 1;
    const b = "hola";
    const c = true;
    const d = null;
    const e = undefined;
    //% 2- tipados de varaibles compuestos : array, object.
    const f = [1, 2, 3];
    const i = { a: 1, b: "hola" };
    const g = ["hola", "mundo"];
    //? Si se quiere tipar un array con varios tipos de datos:
    const h = [1, "hola", 2, "mundo"];
    //? Si se quiere tipar un array de objetos:
    const arrayA = [{ name: "hola" }, { name: "mundo" }];
    const arrayB = [{ name: "hola" }, { name: "mundo" }];
    //@ts-ignore
    const arrayC = [{ name: "test" }, { name: "hola", age: 20 }, { name: "facu", age: 50 }];
    //% 5 tipado de funciones:
    //? tipado explicito:
    const contact_1 = (argumentA, argumentB) => {
        return argumentA + argumentB;
    };
    const contact_2 = (argumentA, argumentB) => {
        return argumentA + argumentB;
    };
    const contact_3 = (argumentA, argumentB) => {
        return argumentA + argumentB;
    };
    // const contact_sub_number: Methods["contact2"] = (arg1, arg2) => {
    //   const result = arg1 + arg2;
    //   return Number(result);
    // };
    //$ Recuerda que void es un tipo de dato que no retorna nada.
    //? argumentos opcionales:
    const contact_4 = (argumentA, argumentB) => {
        return argumentA + argumentB;
    };
    //! Nunca puedes tener un argumento opcional antes de uno obligatorio.
    //@ts-ignore
    //! Esto lanzará un error:
    const contact_5 = (argumentA, argumentB) => {
        return argumentA + argumentB;
    };
    //$ Fijate como tiene sentido el porque de la regla anterior:
    contact_4("mundo");
    contact_5(undefined, "mundo");
    const getUser = (user) => {
        //...
    };
    //? ahora lo quiero destructurar dentro de la función:
    const getUser_2 = (user) => {
        const { name, age } = user;
        //...
    };
    //? ahora lo quiero destructurar en los argumentos de la función:
    const getUser_3 = ({ name, age }) => {
        //...
    };
    //! Practica que no tiene sentido, pero posiblemente pase:
    //? Recuerda que no debes nunca tipar un objeto destructurado, no se tomará como válido y tenrdás problemas de sintaxis.
    const getUser_5 = ({ name: stirng, age: string }) => {
        //...
    };
    //% 2 . Ahora necesito lo mismo, pero mi 1er argumento será un nombre de empresa y el 2do un objeto "MyUser".
    const getUser_4 = (companyName, { age, name }) => {
        //...
    };
    //% 3. Ahora quiero lo mismo que el punto 2, pero quiero que el 2do argumento sea opcional y además sea un listado de objetos pero debes tiparlos sin usar interfaces o types.
    const getUser_6 = (companyName, user) => {
        //...
    };
    const userFreeList = [
        { name: "Facu", age: 20 },
        { name: "Juan", age: 25 },
        { name: "Pedro", age: 30 },
    ];
    const getUser_7 = (age) => {
        if (age < 18)
            return "No puedes jugar, eres menor aún.";
        else {
            const randomPosition = Math.floor(Math.random() * userFreeList.length);
            return userFreeList[randomPosition];
        }
    };
};
exports.main = main;
//# sourceMappingURL=p_03.js.map