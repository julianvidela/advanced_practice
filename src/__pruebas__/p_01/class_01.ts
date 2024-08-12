export class User {

  id: number;
  username: string;
  private _password: string;
  hobbies: string[];
  age: number;
  private _adult: boolean;


  constructor(
    id: number,
    username: string,
    password: string,
    hobbies: string[],
    age: number,
  ) {

    this.id = id;
    this.username = username;
    this._password = password;
    this.hobbies = hobbies;
    this.age = age;
    this._adult = false;

    if (this.age >= 18) this._adult = true;
  }

  getUsername() : string {
    return this.username;
  }

  setUsername(un: string) {
    this.username = un;

    return this.username;
  }

  getPasswordBySecretPassword(secret: string) {
    if (secret === "secret") {
      return this._password;
    } else {
      return "No tienes acceso a la contraseña";
    }
  }
}

export const main = () => {

  let user = new User(1, "julian", "123Qwer", ["futbol", "juegos"], 17);
  // console.log(user)
   console.log(user.getPasswordBySecretPassword("secret"));

  //console.log(user.getPasswordBySecretPassword("secretMy"))
};

// main();

//* Pruebas simples sobre bases de clases, tipos de accesos y manejo del constructor.*/

//% Instrucciones:

//% se debe crear una clase User con las siguientes propiedades:
//% - id: number
//% - username: string
//% - _password: string (privada)
//% - hobbies: array de string
//% - age: number
//% - _adult: boolean (privada)

//% desde el constructor, se debe declarar una regla (lógica de negocio):
//% - la propiedad _adult debe ser true si la edad es mayor o igual a 18, de lo contrario false.

//% se debe crear un getter llamado => getUsername que retorne el nombre de usuario.
//% se debe crear un setter llamado => setUsername que recibirá un argumento 'username' y cambiará el nombre de usuario.

//% se debe crear un método 'getPasswordBySecretPassword' con el argumento 'secret', que retorne la contraseña del usuario si el argumnto secret es igual a "secret", de lo contrario debe retornar "No tienes acceso a la contraseña".

//% dentro de 'main' se debe crear una instancia de la clase User, donde obligatoriamente la password debe ser asignada como "123Qwer".

//% main unicamente deberá imprimir en un console.log de la contraseña tal cuál "123Qwer", nada de de palabras extras. Y para eso debes valerte de obtener la password a través de 'getPasswordBySecretPassword'.
