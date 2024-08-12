const main = () => {
  //% 1. Herencia:

  //* Se necesita transferir todas propiedades de UserModel a AdminModel, pero además se necesita agregar una propiedad "isAdmin" de tipo boolean.

  class UserModelH {
    name: string;
    nickname?: string;
    age: number;
    otherProducts: string[];
  }

  class AdminModelH extends UserModelH {
    nickname: string;
    isAdmin: boolean;
  }
  const admin = new AdminModelH();

  //? como se pueden ver todas las propiedades de UserModel en AdminModel.
  console.log(admin.isAdmin);

  //% 2. Polimorfismo:

  //* Se necesita crear una clase AdminModel que me diga si estoy escribiendo correctamente las propiedades de un usuario necesarías, y en caso de que hayan cambiado, se me avise. También se necesita agregar una propiedad "isAdmin" de tipo boolean.

  class UserModelP {
    name: string;
    nickname: number;
    age: number;
    otherProducts: string[];
  }

  class AdminModelP implements UserModelP {
    name: string;
    nickname: number;
    age: number;
    otherProducts: string[];
    isAdmin: boolean;
  }

  //% 3. Niveles de acceso:

  //* Se necesita una clase que tegna una propiedad "secret_key", que solo sea accesible en una herencia y dentro de la clase.

  class UserModelA {
    protected secret_key: string = "123456";
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

  //% 4. Herencias Selectivas:

  interface UserModelHE {
    id: string;
    name: string;
    nickname: string[];
    age: boolean;
    otherProducts: string[];
  }

  //* Se necesita una interfaz que solo herede las primeras dos propiedades de un usuario.

  // interface UserModelHE {
  //   id: string;
  //   name: string;
  //   nickname: number;
  //   age: boolean;
  //   otherProducts: string[];
  // }
  //  Pick<UserModelHE, K extends keyof UserModelHE>
  interface OtherModelHE extends Pick<UserModelHE, "name" | "nickname" | "age"> {}

  //! Estas propiedades no se pueden agregar, es una nueva interfaz que solo hereda las primeras dos propiedades de UserModel.
  const user1: OtherModelHE = {
    name: "alfonso",
    nickname: 123,

    // age: number,
    // otherProducts: string[],
  } as any;

  //* Se necesita una interfaz que herede todas las propiedades de un usuario, pero quitando la última otherProducts;

  interface OtherModelHE2 extends Omit<UserModelHE, "otherProducts"> {}

  const user2: OtherModelHE2 = {
    name: "alfonso",
    nickname: 123,
    age: 30,
    // otherProducts: string[],
  } as any;

  //* Se necesita ahora una interfaz que herede todas las propiedades de un usuario, pero todas sus propiedades se vuelven opcionales.

  interface UserModelHE2 {
    id: string;
    name: string;
    nickname: number;
    age: number;
    otherProducts: string[];
  }
  
  const updateUser = ({ age, id, name, nickname, otherProducts }: UserModelHE2) => {
    // ...
    const userGetting = {} as any;

    // const userGetting = user.findUserById(id);
    if (age) userGetting.update({ age });
    if (name) userGetting.update({ name });
    if (nickname) userGetting.update({ nickname });
    if (otherProducts) userGetting.update({ otherProducts });
  };

  const body = { name:"sd"} as UserModelHE2;

  
  updateUser(body);

  interface OtherModelHE3 extends Partial<UserModelHE> {}

  const user3: OtherModelHE3 = {
    name: "string",
    // nickname: 32,
    // age: 345,
  };

  //* Se necesita que una interfaz herede todas las propiedades de un usuario, menos la última "otherProducts", y todas sus propiedades se vuelven opcionales.

  interface OtherModelHE4 extends Partial<Omit<UserModelHE, "otherProducts">> {}

  const user4: OtherModelHE4 = {};

  //* Se necesita que una interfaz herede todas las propiedades de un usuario, pero solo la propiedad "nickname" se vuelva opcional.
  //! Además si cambio la propiedad "nickname" a otro tipo esta debe ser heredada sim tener que modificar nada en mi nueva interfaz.

  interface OtherModelHE5 extends Partial<Omit<UserModelHE, "nickname">> {
    // id: string;
    // name: string;
    // age: number;
    // otherProducts: string[];
    nickname?: UserModelHE["nickname"];
  }
  // const user45 = { age: true } as UserModelHE;

  const user5: OtherModelHE5 = {
    name: "string",
    // nickname: 32,
    age: 345,
    otherProducts: ["mouse", "keyboard"],
  } as any;

  //$ Yapa, alias de interfaces... También herencias multiples.
};
