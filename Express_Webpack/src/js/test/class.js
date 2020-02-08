class Model {
    constructor(){
        this.storage = [];
    }

    getStorage (){
        console.log(this.storage, "Msg from class.js");
        return this.storage
    }
    setStorage (dishes){
        this.storage = dishes
    }
}

export default Model;

