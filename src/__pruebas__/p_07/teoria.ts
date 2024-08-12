export const main06 = async () => {
    try {
        //% 1. Promesas:

        //$ Una promesa es un objeto que representa la terminación o el fracaso de una operación asíncrona. Una promesa puede ser enfocada de distintas maneras, tanto como editar un objeto/valor externo a futuro, formar parte de un evento, o simplemente para realizar una tarea asíncrona. Incluso para funcionar de manera sincrona teniendo que esperar un resultado en un tiempo determinado. (la gran diferencia con un observable es que su naturaleza está enfocada a un solo uso, no ha verficar cambios constantementes).

        //* Crea una promesa que se resuelva en 3 segundos y devuelva un objeto con las propiedades name (string), age (number), y email (string).

        interface User {
            name: string;
            age: number;
            email: string;
        }


        // console.log(new Date().toLocaleTimeString());
        const first_promise = new Promise<User>((resolve, reject) => {

            console.log("arranco la jugada");

            const userGetting: User = {
                name: "John",
                age: 1,
                email: "facu@hotmail.com",
            };

            const seconds = 3;

            setTimeout(() => {
                resolve(userGetting);
            }, 1000 * seconds);

        })

        // const first_promise = {...User};
        // console.log("first_promise", first_promise);
        // console.log(new Date().toLocaleTimeString());

        //* Continua la promesa anterior y ahora al resolverla, imprime el usuario obtenido:

        // await first_promise.then((user: User) => {
        //     console.log("then", user);
        // });

        // console.log("termino la jugada");

        //* Continua la promesa y ahora guarda el usuario obtenido en una variable llamada result:

        // let result = {};

        // await first_promise.then((user: User) => {
        //     result = user;
        //     console.log("sadsds")
        // });


        // console.log("result", result);


        //* Ahora apliquemos una logica de negocios, si el usuario es mayor de 18 años, entonces se imprimirá en consola "El usuario es mayor de edad", de lo contrario, no arrogara un error, que tendrá un mensaje que nos negara el acceso.

        // const first_promise2 = await new Promise<User>((resolve, reject) => {

        //     console.log("arranco la jugada");

        //     const userGetting: User = {
        //         name: "John",
        //         age: 1,
        //         email: "facu@hotmail.com",
        //     };

        //     const seconds = 3;

        //     setTimeout(() => {
        //         resolve(userGetting);
        //     }, 1000 * seconds);

        // }).then((user: User) => {
        //     if (user.age > 18) {
        //         console.log("El usuario es mayor de edad");
        //     } else {
        //         throw new Error("No tienes acceso");
        //     }
        // }).catch((error) => {
        //     throw new Error("No tienes acceso x23");

        // }).catch((error) => {
        //     console.log("error", error);
        // });


        // console.log("se termino la promesa");

        //% 2. Funciones asíncronas:

        //$ Las funciones asíncronas son funciones consideradas una promesa, es decir, que si tu esperas que la función haga un cambio a futuro o devuelva algo, necesariamente debes ser esperarda si estás involucrando código sincrono o dependiente de ella.

        //* Crea una función asíncrona que espere 2 segundos y devuelva un objeto User.

        const createUser = async (user: User): Promise<User> => {
            const seconds = 2;

            return await new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(user);
                }, 1000 * seconds);
            }).then((user: User) => {
                if (user.age > 18) {
                    console.log("El usuario es mayor de edad");
                } else {
                    throw new Error("No tienes acceso");
                }
                return user;
            });
        };

        //  console.log(await createUser({ name: "John", age: 198, email: "" }))


        //* Comprobemos que si no esperamos a la función asíncrona, no obtendremos el resultado esperado, esto no obliga la mayoría de veces que nuestro función que utilize alguna otra promesa (o función asíncrona).

        const otherFunction = async () => {
            const user = createUser({ name: "John", age: 19, email: "" });
            console.log(user);
        };

        //  await otherFunction();

        //% 3. Forma de resolver promesas que no puedes esperarla con await:

        //$ Explicar que pasa sin deja la promesa en memoria.
        //$ Explicar opción alternativa para resolverse con un timeout.

        //% 3.a:

        const getUserWithoutAwaiting = async () => {
            console.log("getUserWithoutAwaiting");
            let interval: NodeJS.Timeout;
            let userResult: User;

            await new Promise<void>((resolve, reject) => {

                interval = setInterval(() => {
                    console.log("me sigo ejecutando");
                }, 100);

                setTimeout(() => {
                    reject();
                    console.log("me detengo");
                }, 5000);

                createUser({ name: "John", age: 50, email: "er" })
                    .then((user) => {
                        userResult = user;
                        // resolve();
                    })
                    .catch((error) => {
                        reject();
                    });
            })
                .then(() => clearInterval(interval))
                .catch((error) => { clearInterval(interval) });


            console.log("ACA", userResult);
        };


        // getUserWithoutAwaiting();
        // await getUserWithoutAwaiting();

        //% 3.b forEach/map son méetodos sincrono que permiten ejecutar funciones asincronas, pero no puede esperarlas.
        //    [1,2,3,4].map(async () => { })
        //$ Mostrar formas alternas (promiseAll y for).

        //* debes recorrer una lista de nombre de usuarios y crear usuarios con sus nombres (la edad y email no importan), solo puedes usar un forEach.

        //! Ejemplo para ver como surgue el problema y como se puede solucionar.

        const createFastUsers1 = async (nameList: string[] = ["facu", "pepe"]) => {
            console.log("getUAllUser");

            let usersList: User[] = [];

            await nameList.forEach(async (name) => {
                const user = await createUser({ name, age: 20, email: "er" });
                usersList.push(user);
            });

            console.log(usersList);
        };

        // createFastUsers1();

        //# Ejecuta promesas en PARALELO:
        const createFastUsers2 = async (nameList: string[] = ["facu", "pepe"]) => {
            console.log("getUAllUser");

            let usersList: User[] = [];
            let count = 0;

            console.time("Execution Time");
            await new Promise<void>((resolve, reject) => {

                nameList.forEach(async (name) => {
                    const user = await createUser({ name, age: 20, email: "er" });
                    usersList.push(user);
                    count++;

                    if (count === nameList.length) resolve();
                });
            });

            console.log(usersList);

            console.timeEnd("Execution Time");
        };
        // createFastUsers2();

        //# Ejecuta promesas en PARALELO:
        const createFastUsers3 = async (nameList: string[] = ["facu", "pepe"]) => {
            console.log("getUAllUser");

            let usersList: User[] = [];

            console.time("Execution Time");
            await Promise.all(
                nameList.map(async (name) => {
                    const user = await createUser({ name, age: 20, email: "er" });
                    usersList.push(user);
                })
            )

            console.log(usersList);

            console.timeEnd("Execution Time");
        };

        // createFastUsers3();

        //# Ejecuta promesas en SERIE:
        const createFastUsers4 = async (nameList: string[] = ["facu", "pepe"]) => {
            console.log("getUAllUser");

            let usersList: User[] = [];

            console.time("Execution Time");

            for (let name of nameList) {
                const user = await createUser({ name, age: 20, email: "er" });
                usersList.push(user);
            }

            console.log(usersList);

            console.timeEnd("Execution Time");
        };

        //  createFastUsers4();
    } catch (error) {
        console.log(error);
    }
};

//$ Necesito 100 productos pero cada producto me consume una petición al back (un axios), y esa petición tarda 0.3s.

//$ Necesito 5 usuarios importantes y además tengo que hacerles una verificación exahutiva.
