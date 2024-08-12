//$
//$

export const ejerciciosHardocre = () => {
    //% 1. Herencia
  
    //*1 Transfiere todas las propiedades de UserModel a AdminModel, y añade una propiedad adicional role que tenga estos valores posibles ("admin"| "user").
  
    //*2 En AdminModel la propiedad role debe ser dependiente de la propiedad isAdmin, solo sera true si la propiedad secret_key es igual a "secreto_jodido".
  
    //* En base a isAdmin deberías vincular el tipo de 'role' resultante.
  
    //* Un Resutaldos posible:
  
    //* Si imprimimos una instancias de AdminModel y el secret_key es correcto, esta debe retorntar toda las prop. de UserModel y la propiedad role deberá ser "admin"...
  
    //$ Reto!, utiliza una manera alterna para lograr que isAdmin no sea accesible en AdminModel, recuerda que una vez que se compila el código, se puede acceder incluso si usas private.
  
    //! Esta clase no puede ser modificada, solamente puedes cambiar el valor de secret_key.
    class Key {
      protected secret_key : string = "secreto_jodido";
    }
  
    class UserModel extends Key {
      username: string;
      password: string;
      lenguage: string = "TS";
      private isAdmin: boolean; //! no puedes modificar el acceso privado.
  
      constructor(username: string, password: string) {
        super();
        this.username = username;
        this.password = password;
  
        if (this.secret_key === "secreto_jodido") {
          this.isAdmin = true;
        }
      }
  
      protected getAdmin = (): boolean => this.isAdmin; //! no puedes modificar el acceso protegido ni tampoco usar setter.
    }
  
    class AdminModel extends UserModel {
  
      role: "user" | "admin";
  
      constructor(username: string, password: string) {
  
        super(username, password);
        
        if (this.getAdmin) this.role = "admin";
  
        else this.role = "user";
      }
      
    }
  
    // const admin = new AdminModel();
    // console.log(admin);
  
    //% 2. Polimorfismo y Herencias Selectivas:
  
    //* Crea intefaz Media que herede de IPhoto, IVideo y Size con las siguientes condiciones:
    //? Prueba usar varias estrategias si no puedes lograrlo con lo aprendido.
  
    //* Añadele una propiedad adicional "date" de tipo Date.
    //* Debes omitir de IPhoto las propiedades photo_name y photo_description.
    //* Debes reformular la propiedad extension, ahora tendrá que tener todas las extensiones de IPhoto y IVideo. No puedes añadirlas manualmente, deben depender de lo que esté declarado en IPhoto y IVideo.
    //* Debes reformular la propiedad duration de IVideo para que sea opcional y además pueda ser un string. Incluso si cambiarás el tipado de 'duration' de IVideo, esta también debe verse afectada en IMedia.
    //* De Size solo debes seleccionar las propiedades width y height, además deben ser todas opcionales. NO PODRÁS USAR OMIT.
  
    interface IPhoto {
      photo_name: string;
      photo_description: string;
      size: number;
      extension: "jpg" | "png" | "gif";
    }
  
    interface IVideo {
      video_name: string;
      video_description: string;
      duration: number | string;
      extension: "mp4" | "avi" | "mkv";
    }
  
    interface Size {
      color: string;
      width: number;
      height: number;
    }
  
    interface IMedia extends 
    Partial<Pick<Size, "width" | "height">>,
    Omit<IPhoto,  "photo_name" | "photo_description" | "extension">,
    Omit<IVideo, "extension" | "duration">
        {
      date: Date,
    extension: IPhoto["extension"] | IVideo["extension"],
    duration?: IVideo["duration"]
    }
  
    const media: IMedia = {date: new Date ("1232-13-23"), extension:"avi", size: 2, video_description: "askld", video_name: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", duration: 0o1 } ;
  
    console.log(media);
  
    //$ Consejo: presta atención a los errores que salen de sitaxis, también recuerda que al fucionar varias interfaces no se permite la duplicidad de propiedades.
  };
  