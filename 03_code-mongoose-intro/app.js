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