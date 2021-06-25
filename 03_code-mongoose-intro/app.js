/**
 *  TOC
 * 
 * 
 * require the library (mongoose) and the databse DB_NAME
 */

const mongoose = require ('mongoose')

const DB_NAME = "mongoose-intro"

mongoose.connect(`mongodb://localhost:27017/${DB_NAME}`,
{useNewUrlParser: true, useUnifiedTopology: true}
)

//mongo returns a promise because is asynchronous, needs a then and a catch 

.then(x => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`))
.catch(err => console.error('Error connecting to mongo', err));

//mongodb has a schema, a simplified way to tell mongoose how the documents should be
//(name, schema)const Cat = mongoose.model("Cat" , schema)
//the model is the name that mongoose uses to define classes of the documents
//Cat is a name of the collection

/*
const Cat = mongoose.model(  
    "Cat" , 
    {
        name: String,
        color: String,
        age: Number
    } //not js primitives, they are mongoose classes form the library 
    )

    //we create the documents

    Cat.create(
        {
        name: "Marco",
        color:"carrot", 
        age: 3, 
        meouwsLoudly: true,
        sex: "M"
        }
    ) 
.then(cat=> console.log(cat)) // in this callback you will do something meaninful for yout app
//f.ex if you are in Express you will res.render() a new template that contaons the new cat data
.catch(err=> console.log(err))

//i have to read from the data base:

Cat.find(
{
    name: "Marco"
}
)
.then(cats=> console.log('Cat find() results', cats))
.catch(err=> console.log('Cat find() returned an error:',err))
*/


//you chain creations, a final promise creating and array of them together 

const createCatPromise = Cat.create(
    {
      name: "Marco",
      color: "carrot",
      age: 3,
      meowsLoudly: true,
      sex: "M"
    }
  )
  
  const createDogPromise =  Dog.create(
    {
      name: "Fuffy",
      color: "white",
      age: 2,
      barksLoudly: false,
      sex: "M"
    }
  )
  
  //GROUPING we create a method "promise.all" who waits to both promises to be created, it's faster than one by one promises 
  Promise.all([createCatPromise, createDogPromise])
  .then(catsAndDogsArray => console.log(catsAndDogsArray) )

  // and then we find it 

  const catFindPromise = Cat.find(
    {
      name: "Marco"
    }
  )
  
  const dogFindPromise = Dog.find(
    {
      name: "Fuffy"
    }
  )
  
  Promise.all([catFindPromise, dogFindPromise])
  .then(catsAndDogsArray => console.log("This is all the cats and dogs I have found", catsAndDogsArray))
//events listeners to de connection events
mongoose.connection.on('connected', ()=> console.log('Mongoose connected (coming from the connection event listener)'))
mongoose.connection.on('disconnected', () => console.log ('Mongoose disconnected'))