class Usuario {
     
    constructor (nombre, apellido, libros, mascotas) {
        this.nombre = nombre
        this.apellido = apellido
        this.libros = libros
        this.mascotas = mascotas
      }

      getFullName () {
        return (`${this.nombre}, ${this.apellido}`)
    }
    addMascotas (mascota){
        this.mascotas.push(mascota)
    }
    countMascotas () {
        return this.mascotas.length
    }
    addBook (nombreLibro, autorLibro) {
        this.libros.push({nombre:nombreLibro, autor:autorLibro})
    }
    getBookNames() {
        return Array.from(this.libros, libro => libro.nombre)
    }
    
}
const usuario = new Usuario ('Rocio', 'Diaz', [{nombre:'El señor de las moscas', autor:'William Golding'}, {nombre:'Fundación', autor:'Isaac Asimov'}], ['perro','gato'])

console.log(usuario.getFullName())
usuario.addMascotas('conejo')
console.log(usuario.mascotas)
 console.log(usuario.countMascotas())
 usuario.addBook('La Bestia', 'Carmen Mola')
console.log(usuario.getBookNames())