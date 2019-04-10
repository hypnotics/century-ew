// Create all market tiles
let m1 = new MapTile('market', 'ginger', ['G'], ['R','Y','Y','Y','Y'])
let m2 = new MapTile('market', 'ginger', ['B'], ['R','R','Y','Y','Y'])
let m3 = new MapTile('market', 'ginger', ['B'], ['G','Y','Y','Y'])
let m4 = new MapTile('market', 'ginger', ['R','R'], ['G','Y','Y','Y'])
let m5 = new MapTile('market', 'ginger', ['R'],['Y','Y','Y'])
let m6 = new MapTile('market', 'ginger', ['R','R'], ['B','Y','Y'])
let m7 = new MapTile('market', 'chili', ['G','G'], ['B','R','R'])
let m8 = new MapTile('market', 'chili', ['G'], ['R','R'])
let m9 = new MapTile('market', 'chili', ['B'], ['R','R','R'])
let m10 = new MapTile('market', 'chili', ['Y','Y'], ['R','R'])
let m11 = new MapTile('market', 'chili', ['B','B'], ['G','G','R','R','R'])
let m12 = new MapTile('market', 'chili', ['Y','Y','Y'], ['G','R'])
let m13 = new MapTile('market', 'tea', ['B'], ['G','R','Y'])
let m14 = new MapTile('market', 'tea', ['Y','Y','Y','Y'], ['G','B'])
let m15 = new MapTile('market', 'tea', ['Y','Y','Y','Y','Y'], ['G','G','G'])
let m16 = new MapTile('market', 'tea', ['R','R'], ['G','G'])
let m17 = new MapTile('market', 'tea', ['B'], ['G','G'])
let m18 = new MapTile('market', 'tea', ['Y','Y'], ['G'])
let m19 = new MapTile('market', 'cloves', ['Y','Y','Y','Y','Y'], ['B','B'])
let m20 = new MapTile('market', 'cloves', ['R','Y'], ['B'])
let m21 = new MapTile('market', 'cloves', ['G','G'], ['B','B'])
let m22 = new MapTile('market', 'cloves', ['G','R','Y'], ['B','B'])
let m23 = new MapTile('market', 'cloves', ['Y','Y','Y'], ['B'])
let m24 = new MapTile('market', 'cloves', ['R','R','R'], ['B','B'])
let marketTiles = [m1,m2,m3,m4,m5,m6,m7,m8,m9,m10,m11,m12,m13,m14,m15,m16,m17,m18,m19,m20,m21,m22,m23,m24]

// Remove one tile of each spice from the map
let ginger = marketTiles.filter(function (el) {
    return el.spice === 'ginger'
  });
let chili = marketTiles.filter(function (el) {
    return el.spice === 'chili'
  });
let tea = marketTiles.filter(function (el) {
    return el.spice === 'tea'
  });
let cloves = marketTiles.filter(function (el) {
    return el.spice === 'cloves'
});
shuffle(ginger)
shuffle(chili)
shuffle(tea)
shuffle(cloves)
let mapTiles = marketTiles.filter(function( obj ) {
    return obj.id !== ginger[0].id &&
           obj.id !== tea[0].id &&
           obj.id !== cloves[0].id &&
           obj.id !== chili[0].id
})

let locations = ['A1','A2','A3','A4','B1','B2','B3','B4','B5','C1','C2','C3','C4','C5','C6','D1','D2','D3','D4','D5','E1','E2','E3','E4']               



// Place the remaining market tiles
shuffle(mapTiles)
let marketLocations = locations.filter(function( obj ) {
    return obj !== 'A1' && obj !== 'A4' && obj !== 'E1' && obj !== 'E4'
})
for (let i=0; i<marketLocations.length; i++){
    mapTiles[i].place(marketLocations[i])
}

// Create and place the ports
let port1 = new MapTile('port', null, null, null)
let port2 = new MapTile('port', null, null, null)
let port3 = new MapTile('port', null, null, null)
let port4 = new MapTile('port', null, null, null)
mapTiles.push(port1,port2,port3,port4)
port1.place('A1')
port2.place('A4')
port3.place('E1')
port4.place('E4')

const displayMapLocations =()=>{
return `
                      ----                    
                    /      \\                  
               ----{   C1   }----             
             /      \\      /      \\           
        ----{   B1   }----{   D1   }----      
      /      \\      /      \\      /      \\    
     {   A1   }----{   C2   }----{   E1   }   
      \\      /      \\      /      \\      /    
        ----{   B2   }----{   D2   }----      
      /      \\      /      \\      /      \\    
     {   A2   }----{   C3   }----{   E2   }   
      \\      /      \\      /      \\      /    
        ----{   B3   }----{   D3   }----      
      /      \\      /      \\      /      \\    
     {   A3   }----{   C4   }----{   E3   }   
      \\      /      \\      /      \\      /    
        ----{   B4   }----{   D4   }----      
      /      \\      /      \\      /      \\    
     {   A4   }----{   C5   }----{   E4   }   
      \\      /      \\      /      \\      /    
        ----{   B5   }----{   D5   }----      
             \\      /      \\      /               
               ----{   C6   }----             
                    \\      /                  
                      ----                    `
}


let spice = (loc) => {
    let current = mapTiles.filter(function( obj ) {
        return obj.location == loc
    })
    return pad(current[0].spice.substring(0, 2), 6)
}
let give = (loc) => {
    let current = mapTiles.filter(function( obj ) {
        return obj.location == loc
    })
    return pad(current[0].give.join(''), 8)
}
let get = (loc) => {
    let current = mapTiles.filter(function( obj ) {
        return obj.location == loc
    })
    return pad(current[0].get.join(''), 6)
}

let displayMapResources = () => {

return `
                      ----                    
                    /${spice("C1")}\\                  
               ----{${give("C1")}}----             
             /${spice("B1")}\\${get("C1")}/${spice("D1")}\\           
        ----{${give("B1")}}----{${give("D1")}}----      
      /      \\${get("B1")}/${spice("C2")}\\${get("D1")}/      \\    
     {   PO   }----{${give("C2")}}----{   PO   }   
      \\      /${spice("B2")}\\${get("C2")}/${spice("D2")}\\      /    
        ----{${give("B2")}}----{${give("D2")}}----      
      /${spice("A2")}\\${get("B2")}/${spice("C3")}\\${get("D2")}/${spice("E2")}\\    
     {${give("A2")}}----{${give("C3")}}----{${give("E2")}}   
      \\${get("A2")}/${spice("B3")}\\${get("C3")}/${spice("D3")}\\${get("E2")}/    
        ----{${give("B3")}}----{${give("D3")}}----      
      /${spice("A3")}\\${get("B3")}/${spice("C4")}\\${get("D3")}/${spice("E3")}\\    
     {${give("A3")}}----{${give("C4")}}----{${give("E3")}}   
      \\${get("A3")}/${spice("B4")}\\${get("C4")}/${spice("D4")}\\${get("E3")}/    
        ----{${give("B4")}}----{${give("D4")}}----      
      /      \\${get("B4")}/${spice("C5")}\\${get("D4")}/      \\    
     {   PO   }----{${give("C5")}}----{   PO   }   
      \\      /${spice("B5")}\\${get("C5")}/${spice("D5")}\\      /    
        ----{${give("B5")}}----{${give("D5")}}----      
             \\${get("B5")}/${spice("C6")}\\${get("D5")}/               
               ----{${give("C6")}}----             
                    \\${get("C6")}/                  
                      ----                    `
}



    //                   ----
    //                 /      \
    //            ----{   C1   }----
    //          /      \      /      \
    //     ----{   B1   }----{   D1   }----
    //   /      \      /      \      /      \
    //  {   A1   }----{   C2   }----{   E1   }
    //   \      /      \      /      \      /
    //     ----{   B2   }----{   D2   }----
    //   /      \      /      \      /      \
    //  {   A2   }----{   C3   }----{   E2   }
    //   \      /      \      /      \      /
    //     ----{   B3   }----{   D3   }----
    //   /      \      /      \      /      \
    //  {   A3   }----{   C4   }----{   E3   }
    //   \      /      \      /      \      /
    //     ----{   B4   }----{   D4   }----
    //   /      \      /      \      /      \
    //  {   A4   }----{   C5   }----{   E4   }
    //   \      /      \      /      \      /
    //     ----{   B5   }----{   D5   }----
    //          \      /      \      /    
    //            ----|   C6   |----
    //                 \      /
    //                   ----