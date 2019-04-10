

console.log('Welcome to Century: Eastern Wonders!');

console.log(displayMapLocations())
console.log(displayMapResources())

let p1 = new Player('dumb', 1)
let p2 = new Player('dumb', 2)
let p3 = new Player('dumb', 3)
let p4 = new Player('dumb', 4)
let players = [p1,p2,p3,p4]

let startingResources = [['Y','Y','R'],['Y','G'],['R','R'],['Y','Y','Y','Y']]

p1.start()

console.log(players)