//$
//$

export const main = () => {
    //% Typescript - tipados más comunes :
  
    //% 1- tipados de varaibles nativos : number, string, boolean, any, null, undefined.
    const a: number = 1;
    const b: string = "hola";
    const c: boolean = true;
    const d: any = null;
    const e: any = undefined;
  
    //% 2- tipados de varaibles compuestos : array, object.
  
    const f: number[] = [1, 2, 3];
    const i: object = { a: 1, b: "hola" };
    const g: string[] = ["hola", "mundo"];
  
    //? Si se quiere tipar un array con varios tipos de datos:
    const h: (number | string)[] = [1, "hola", 2, "mundo"];
  
    //? Si se quiere tipar un array de objetos:
    const arrayA: { name: string }[] = [{ name: "hola" }, { name: "mundo" }];
  
    //? Otra forma de tipar un array de objetos:
    interface User {
      name: string;
    }
    const arrayB: User[] = [{ name: "hola" }, { name: "mundo" }];
  
    //? Si quiero tipar varios posibles objetos:
  
    interface User {
      name: string;
    }
    interface Employee {
      name: string;
      age: number;
    }
    //@ts-ignore
    const arrayC: (User | Employee)[] = [{ name: "test" }, { name: "hola", age: 20 }, { name: "facu", age: 50 }];
  
    //% 3- interfaces, se usan para tipar objetos o conjuntos de cosas.
  
    interface DBUserModel {
      name: string;
      age: number;
    }
  
    //? propiedades opcionales:
  
    interface BissnesModel {
      name: string;
      country: string;
      CBU: boolean;
    }
    interface ExternalBissnesModel {
      name: string;
      country: string;
      CVU: boolean;
    }
  
    interface UserModel {
      bissnes: BissnesModel | ExternalBissnesModel;
      age: number | string;
    }
  
    //% 4 otra forma de tipar objetos:
  
    interface YourUser {
      address: {
        street: string;
        number: number;
      };
      age: number;
    }
    //? su equivalente en hacerlo en otra interface:
  
    interface Address {
      street: string;
      number: number;
    }
  
    interface YourUser {
      address: Address;
      age: number;
    }
  
    //% 5 tipado de funciones:
  
    //? tipado explicito:
    const contact_1 = (argumentA: string, argumentB: string): string => {
      return argumentA + argumentB;
    };
    //? tipado externo:
    type ContactType = (argumentA: string, argumentB: string) => string;
  
    const contact_2: ContactType = (argumentA, argumentB) => {
      return argumentA + argumentB;
    };
  
    //? otra posibilidad:
  
    interface Methods {
      contact: (argumentA: string, argumentB: string) => string;
  
      contact2: (argumentA: boolean, argumentB: string) => number;
    }
    const contact_3: Methods["contact"] = (argumentA, argumentB) => {
      return argumentA + argumentB;
    };
  
    // const contact_sub_number: Methods["contact2"] = (arg1, arg2) => {
    //   const result = arg1 + arg2;
    //   return Number(result);
    // };
  
    //$ Recuerda que void es un tipo de dato que no retorna nada.
  
    //? argumentos opcionales:
    const contact_4 = (argumentA: string, argumentB?: string): string => {
      return argumentA + argumentB;
    };
  
    //! Nunca puedes tener un argumento opcional antes de uno obligatorio.
    //@ts-ignore
    //! Esto lanzará un error:
    const contact_5 = (argumentA?: string, argumentB?: string): string => {
      return argumentA + argumentB;
    };
  
    //$ Fijate como tiene sentido el porque de la regla anterior:
    contact_4("mundo");
    contact_5(undefined, "mundo");
  
    //_______________________________________________
  
    //% Argumentos en funciones:
  
    //% 1. Quiero ingresar en el primer argumento un objeto "MyUser" con las propiedades name y age.
    interface MyUser {
      name: string;
      age: number;
    }
    const getUser = (user: MyUser) => {
      //...
    };
    //? ahora lo quiero destructurar dentro de la función:
    const getUser_2 = (user: MyUser) => {
      const { name, age } = user;
      //...
    };
  
    //? ahora lo quiero destructurar en los argumentos de la función:
    const getUser_3 = ({ name, age }: MyUser) => {
      //...
    };
  
    //! Practica que no tiene sentido, pero posiblemente pase:
    //? Recuerda que no debes nunca tipar un objeto destructurado, no se tomará como válido y tenrdás problemas de sintaxis.
    const getUser_5 = ({ name: stirng, age: string }: MyUser) => {
      //...
    };
  
    //% 2 . Ahora necesito lo mismo, pero mi 1er argumento será un nombre de empresa y el 2do un objeto "MyUser".
  
    const getUser_4 = (companyName: string, { age, name }: MyUser) => {
      //...
    };
  
    //% 3. Ahora quiero lo mismo que el punto 2, pero quiero que el 2do argumento sea opcional y además sea un listado de objetos pero debes tiparlos sin usar interfaces o types.
  
    const getUser_6 = (companyName: string, user?: { name: string; age: string }[]) => {
      //...
    };
  
    //% 4. Hagamos una función matcheadora para jugar de a 2 al tenis, que reciba la de edad de un usuario, que nos retorne un mensaje de error si es menor a 18 años y si es mayor a 18 años retorne un usuario random (Declaremos también el tipo de retorno).
  
    interface MyUser {
      name: string;
      age: number;
    }
  
    const userFreeList: MyUser[] = [
      { name: "Facu", age: 20 },
      { name: "Juan", age: 25 },
      { name: "Pedro", age: 30 },
    ];
  
    const getUser_7 = (age: number): string | MyUser => {
      if (age < 18) return "No puedes jugar, eres menor aún.";
      else {
        const randomPosition = Math.floor(Math.random() * userFreeList.length);
        return userFreeList[randomPosition];
      }
    };
  };