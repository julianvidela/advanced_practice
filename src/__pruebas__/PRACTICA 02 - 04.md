# DE LA PRÁCTICA 02 a 04 => Injección de dependecia.

## Qué se soluciona con esto?
nos permitirá evitar inistancias multiples insecesarías y además de ahorrar importaciones evita la dependencia cirular de js. 

### RECUERDA QUE IMPORTAR CLASES Y USARLAS SOLO COMO INTERFACES O TIPOS ENTRE SI, NO GENERARÁ NINGÚN PROBLEMA, DE HECHO LO VAS A NECESITAR.

## Problematica:
Tenemos 2 clases que ofrecerán servicios, de profesionales y companias. La idea es lograr que las dos clases se puedan usar sus métodos entre sin ningún tipo de error.

Ejemplo : 

```typescript
// Archivo company.service.ts
export class CompanyService {

//{... Aquí iría las propiedades y el constructor para la injección ...}

  public company_method = () => {...}

  private methodRandom => {
        this.profesional_method();
    }
}

// Archivo profesional.service.ts
export class ProfesionalService {

//{... Aquí iría las propiedades y el constructor para la injección ...}

   public profesional_method = () => {...}

    private methodRandom => {
        this.company_method();
    }
}

```
