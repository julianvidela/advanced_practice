"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.main06 = void 0;
const main06 = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // console.log(new Date().toLocaleTimeString());
        const first_promise = new Promise((resolve, reject) => {
            console.log("arranco la jugada");
            const userGetting = {
                name: "John",
                age: 1,
                email: "facu@hotmail.com",
            };
            const seconds = 3;
            setTimeout(() => {
                resolve(userGetting);
            }, 1000 * seconds);
        });
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
        const createUser = (user) => __awaiter(void 0, void 0, void 0, function* () {
            const seconds = 2;
            return yield new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(user);
                }, 1000 * seconds);
            }).then((user) => {
                if (user.age > 18) {
                    console.log("El usuario es mayor de edad");
                }
                else {
                    throw new Error("No tienes acceso");
                }
                return user;
            });
        });
        //  console.log(await createUser({ name: "John", age: 198, email: "" }))
        //* Comprobemos que si no esperamos a la función asíncrona, no obtendremos el resultado esperado, esto no obliga la mayoría de veces que nuestro función que utilize alguna otra promesa (o función asíncrona).
        const otherFunction = () => __awaiter(void 0, void 0, void 0, function* () {
            const user = createUser({ name: "John", age: 19, email: "" });
            console.log(user);
        });
        //  await otherFunction();
        //% 3. Forma de resolver promesas que no puedes esperarla con await:
        //$ Explicar que pasa sin deja la promesa en memoria.
        //$ Explicar opción alternativa para resolverse con un timeout.
        //% 3.a:
        const getUserWithoutAwaiting = () => __awaiter(void 0, void 0, void 0, function* () {
            console.log("getUserWithoutAwaiting");
            let interval;
            let userResult;
            yield new Promise((resolve, reject) => {
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
                .catch((error) => { clearInterval(interval); });
            console.log("ACA", userResult);
        });
        // getUserWithoutAwaiting();
        // await getUserWithoutAwaiting();
        //% 3.b forEach/map son méetodos sincrono que permiten ejecutar funciones asincronas, pero no puede esperarlas.
        //    [1,2,3,4].map(async () => { })
        //$ Mostrar formas alternas (promiseAll y for).
        //* debes recorrer una lista de nombre de usuarios y crear usuarios con sus nombres (la edad y email no importan), solo puedes usar un forEach.
        //! Ejemplo para ver como surgue el problema y como se puede solucionar.
        const createFastUsers1 = (nameList = ["facu", "pepe"]) => __awaiter(void 0, void 0, void 0, function* () {
            console.log("getUAllUser");
            let usersList = [];
            yield nameList.forEach((name) => __awaiter(void 0, void 0, void 0, function* () {
                const user = yield createUser({ name, age: 20, email: "er" });
                usersList.push(user);
            }));
            console.log(usersList);
        });
        // createFastUsers1();
        //# Ejecuta promesas en PARALELO:
        const createFastUsers2 = (nameList = ["facu", "pepe"]) => __awaiter(void 0, void 0, void 0, function* () {
            console.log("getUAllUser");
            let usersList = [];
            let count = 0;
            console.time("Execution Time");
            yield new Promise((resolve, reject) => {
                nameList.forEach((name) => __awaiter(void 0, void 0, void 0, function* () {
                    const user = yield createUser({ name, age: 20, email: "er" });
                    usersList.push(user);
                    count++;
                    if (count === nameList.length)
                        resolve();
                }));
            });
            console.log(usersList);
            console.timeEnd("Execution Time");
        });
        // createFastUsers2();
        //# Ejecuta promesas en PARALELO:
        const createFastUsers3 = (nameList = ["facu", "pepe"]) => __awaiter(void 0, void 0, void 0, function* () {
            console.log("getUAllUser");
            let usersList = [];
            console.time("Execution Time");
            yield Promise.all(nameList.map((name) => __awaiter(void 0, void 0, void 0, function* () {
                const user = yield createUser({ name, age: 20, email: "er" });
                usersList.push(user);
            })));
            console.log(usersList);
            console.timeEnd("Execution Time");
        });
        // createFastUsers3();
        //# Ejecuta promesas en SERIE:
        const createFastUsers4 = (nameList = ["facu", "pepe"]) => __awaiter(void 0, void 0, void 0, function* () {
            console.log("getUAllUser");
            let usersList = [];
            console.time("Execution Time");
            for (let name of nameList) {
                const user = yield createUser({ name, age: 20, email: "er" });
                usersList.push(user);
            }
            console.log(usersList);
            console.timeEnd("Execution Time");
        });
        //  createFastUsers4();
    }
    catch (error) {
        console.log(error);
    }
});
exports.main06 = main06;
//$ Necesito 100 productos pero cada producto me consume una petición al back (un axios), y esa petición tarda 0.3s.
//$ Necesito 5 usuarios importantes y además tengo que hacerles una verificación exahutiva.
//# sourceMappingURL=teoria.js.map