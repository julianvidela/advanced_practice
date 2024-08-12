"use strict";
//$
//$
Object.defineProperty(exports, "__esModule", { value: true });
exports.ejerciciosHardocre = void 0;
const ejerciciosHardocre = () => {
    //% 1. Herencia
    //*1 Transfiere todas las propiedades de UserModel a AdminModel, y añade una propiedad adicional role que tenga estos valores posibles ("admin"| "user").
    //*2 En AdminModel la propiedad role debe ser dependiente de la propiedad isAdmin, solo sera true si la propiedad secret_key es igual a "secreto_jodido".
    //* En base a isAdmin deberías vincular el tipo de 'role' resultante.
    //* Un Resutaldos posible:
    //* Si imprimimos una instancias de AdminModel y el secret_key es correcto, esta debe retorntar toda las prop. de UserModel y la propiedad role deberá ser "admin"...
    //$ Reto!, utiliza una manera alterna para lograr que isAdmin no sea accesible en AdminModel, recuerda que una vez que se compila el código, se puede acceder incluso si usas private.
    //! Esta clase no puede ser modificada, solamente puedes cambiar el valor de secret_key.
    class Key {
        constructor() {
            this.secret_key = "secreto_jodido";
        }
    }
    class UserModel extends Key {
        constructor(username, password) {
            super();
            this.lenguage = "TS";
            this.getAdmin = () => this.isAdmin; //! no puedes modificar el acceso protegido ni tampoco usar setter.
            this.username = username;
            this.password = password;
            if (this.secret_key === "secreto_jodido") {
                this.isAdmin = true;
            }
        }
    }
    class AdminModel extends UserModel {
        constructor(username, password) {
            super(username, password);
            if (this.getAdmin)
                this.role = "admin";
            else
                this.role = "user";
        }
    }
    const media = { date: new Date("1232-13-23"), extension: "avi", size: 2, video_description: "askld", video_name: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", duration: 0o1 };
    console.log(media);
    //$ Consejo: presta atención a los errores que salen de sitaxis, también recuerda que al fucionar varias interfaces no se permite la duplicidad de propiedades.
};
exports.ejerciciosHardocre = ejerciciosHardocre;
//# sourceMappingURL=ejercicio.js.map