class Player {
    constructor(name, order) {
        this.id = "id" + Math.random().toString(16).slice(2)
        this.name = name
        this.order = order
        this.outposts = {
             ginger: 5 ,
             chili: 5 ,
             tea: 5 ,
             cloves: 5 
        }
        this.resources = []
        this.score = 0
    }
    placeShip (location){
        this.location = location
    }
    buildOutpost(spice){
        switch (spice){
            case 'ginger': this.outposts.ginger--;
            case 'chili': this.outposts.chili--; 
            case 'tea': this.outposts.tea--; 
            case 'cloves': this.outposts.cloves--; 
        }  
    }
    addSpice(spiceId){
        this.resources.push(spiceId)
    }
    removeSpice(spiceId){
        let index = this.resources.indexOf(spiceId);
        if (index > -1) {
            this.resources.splice(index, 1);
        }
    }
    incScore(value){
        this.score += value
    }
    calcScore(){
        let valuableSpice = this.resources.filter(function( obj ) {
            return obj !== 'Y'
        })
        // Error on 5 outposts left
        let outpostScore = 4-(this.outposts.ginger) + 
            4-(this.outposts.chili) + 
            4-(this.outposts.tea) +
            4-(this.outposts.cloves)
        return valuableSpice.length + outpostScore + score;
    }

    start(){
        let set = pickRandom(startingResources)
        console.log(set)
        for (let el of set){
            this.addSpice(el)
        }
        let startspace = pickRandom(marketLocations)
        this.placeShip(startspace)
    }
    doAction(){


    }

}