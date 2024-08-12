const main = () => {
    //% 1. Herencia:
    //* Se necesita transferir todas propiedades de UserModel a AdminModel, pero además se necesita agregar una propiedad "isAdmin" de tipo boolean.
    class UserModelH {
    }
    class AdminModelH extends UserModelH {
    }
    const admin = new AdminModelH();
    //? como se pueden ver todas las propiedades de UserModel en AdminModel.
    console.log(admin.isAdmin);
    //% 2. Polimorfismo:
    //* Se necesita crear una clase AdminModel que me diga si estoy escribiendo correctamente las propiedades de un usuario necesarías, y en caso de que hayan cambiado, se me avise. También se necesita agregar una propiedad "isAdmin" de tipo boolean.
    class UserModelP {
    }
    class AdminModelP {
    }
    //% 3. Niveles de acceso:
    //* Se necesita una clase que tegna una propiedad "secret_key", que solo sea accesible en una herencia y dentro de la clase.
    class UserModelA {
        constructor() {
            this.secret_key = "123456";
        }
    }
    //caso accesible
    class AdminModelA extends UserModelA {
        constructor() {
            super();
            console.log(this.secret_key);
        }
    }
    //? todas las herencias subsiguientes.
    class AdminModelC extends AdminModelA {
        constructor() {
            super();
            console.log(this.secret_key);
        }
    }
    //casos no accesible
    //@ts-ignore
    //? desde la instancia de la calse.
    const user = new UserModelA().secret_key;
    //! Estas propiedades no se pueden agregar, es una nueva interfaz que solo hereda las primeras dos propiedades de UserModel.
    const user1 = {
        name: "alfonso",
        nickname: 123,
        // age: number,
        // otherProducts: string[],
    };
    const user2 = {
        name: "alfonso",
        nickname: 123,
        age: 30,
        // otherProducts: string[],
    };
    const updateUser = ({ age, id, name, nickname, otherProducts }) => {
        // ...
        const userGetting = {};
        // const userGetting = user.findUserById(id);
        if (age)
            userGetting.update({ age });
        if (name)
            userGetting.update({ name });
        if (nickname)
            userGetting.update({ nickname });
        if (otherProducts)
            userGetting.update({ otherProducts });
    };
    const body = { name: "sd" };
    updateUser(body);
    const user3 = {
        name: "string",
        // nickname: 32,
        // age: 345,
    };
    const user4 = {};
    // const user45 = { age: true } as UserModelHE;
    const user5 = {
        name: "string",
        // nickname: 32,
        age: 345,
        otherProducts: ["mouse", "keyboard"],
    };
    //$ Yapa, alias de interfaces... También herencias multiples.
};
//# sourceMappingURL=teoria.js.map