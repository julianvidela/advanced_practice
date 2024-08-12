//$
//$
const ejerciciosSencillos = () => {
    //% 1. Herencia
    //* Descripción: Transfiere todas las propiedades de UserModelH a AdminModelH, y añade propiedades adicionales role (string), permissions(string[]), y lastLogin (Date).
    class UserModelX1 {
    }
    class AdminModelX1 extends UserModelX1 {
    }
    class AdminModelX2 {
    }
    //% 3. Niveles de acceso
    //* Descripción: Crea una clase con una propiedad apiKey, secretToken, y encryptionKey (todas son string) que solo sean accesibles en la clase y sus herencias.
    class ServiceModelA {
    }
    class SubServiceModelA extends ServiceModelA {
        constructor() {
            super();
            console.log(this.secretToken);
            console.log(this.apiKey);
            console.log(this.encryptionKey);
        }
    }
    class AnotherServiceModelA extends SubServiceModelA {
        constructor() {
            super();
            console.log(this.secretToken);
            console.log(this.apiKey);
            console.log(this.encryptionKey);
        }
    }
    const person1 = {
        firstName: "mati",
        lastName: "wyso",
        middleName: "notengo",
    };
    const person2 = {
        firstName: "pepito",
        phone: "45613",
        address: "avenida ALCORTA",
    };
    const person3 = {
        firstName: "Alice",
        lastName: "Smith",
        middleName: "Marie",
        dateOfBirth: new Date("1985-05-15"),
        address: "1010 Maple Ave",
        email: "lsakjd"
    };
    const person4 = {
        firstName: "Alice",
        lastName: "Smith",
        middleName: "Marie",
        dateOfBirth: new Date("1985-05-15"),
        address: "1010 Maple Ave",
    };
    const person4HC = { firstName: "juli", lastName: "videla", passportNumber: 123, driverLicense: "asldkj", dateOfBirth: new Date("1988-03-05"), address: "9 de julio" };
};
//# sourceMappingURL=ejercicios.js.map