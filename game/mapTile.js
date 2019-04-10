class MapTile {
    constructor(type, spice, give, get) {
        this.id = "id" + Math.random().toString(16).slice(2)
        this.give = give
        this.get = get
        this.type = type
        this.spice = spice
    }
    place (location){
        this.location = location
    }
    addVictoryTile (victoryTile){
        this.victoryTile = victoryTile
    }
    addOutpost(outpost){
        this.outposts.push(outpost)
    }
    addShip(ship){
        this.ships.push(ship)
    }
}