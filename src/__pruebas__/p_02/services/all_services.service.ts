
class AllServices {
  //% define las propiedades de la clase en base a los otros servicios, no deben ser de tipo any, sino de la instancia de servicio correspondiente.
   
  
// public porp : PropService;
// public porp2 : Prop2Service;


  constructor() {
    //% inicializa las propiedades de la clase con las instancias de los servicios correspondientes.
    // this.prop = new PropService();

    //? recuerda que a veces las instancias pueden necesitar que le pases un objeto con las instancias de otros servicios.
    //? example => this.prop = new PropService({other: Other});

    //! debes instanciar primero los profesionales para está práctica, y luego probar que pasa si se instancia luego.
  }
}

export default AllServices;
