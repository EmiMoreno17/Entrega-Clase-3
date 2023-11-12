let mensaje: string = "hola mundo"

mensaje = "chanchito feliz"

mensaje = "chau mundo"
console.log(mensaje)

console.log(typeof [])


let extincionDinosaurios = 76_000_000
let dinosaurioFavorito = "t-rex"
let extintos = true

function chanchitoFeliz(config: any){
    return config
}

let animales: string[] = ['chanchito', 'feliz', 'felipe']
let numeros: number[] = [1, 2, 3]
let checks: boolean[] = []
let numeros2: Array<number> = []

//  numeros.map(x => x.)

let tupla: [number, string[]] = [1, ['chanchito feliz', 'chanchito felipe']]

enum Talla {Chica = 's', Mediana ='m', Grande = 'l', ExtraGrande ='xl'}

const variable1: any = Talla.Grande
console.log(variable1)

const enum LoadingState {Idle, Loading, Succes, Error }

const estado = LoadingState.Succes
type Direccion =  {
    numero: number,
    calle: string,
    pais: string
}
type Persona = {

        readonly id: number,
        nombre: string,
        talla: Talla,   
        direccion: Direccion
        
    }

const objeto: Persona = {
     id: 1,
     nombre: 'chanchito feliz',
     talla: Talla.Mediana,
     direccion: {
        numero: 1,
        calle: 'Siempre Viva',
        pais: 'Chacnchitolandia'
     }
    }