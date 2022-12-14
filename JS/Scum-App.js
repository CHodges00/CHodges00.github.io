let walls = function () {
    if (window.localStorage.getItem("walls") === null) {
        return [
            {id: 1, name: "wood", image: "./IMG/wood.jpg"},
            {id: 2, name: "wire", image: "./IMG/barbed.jpg"},
            {id: 3, name: "metal", image: "./IMG/metal.jpg"},
            {id: 4, name: "brick", image: "./IMG/brick2.jpg"},
            {id: 5, name: "concrete", image: "./IMG/concrete.jpg"},
            {id: 6, name: "sand bag", image:"./IMG/sand.png"},
            // {id: 7, name: "sm cabin", image:""},
            // {id: 8, name: "md cabin", image:""},
            // {id: 9, name: "lg cabin", image:""},
            // {id: 10, name: "foundation", image:""}
        ]
    } else {
        return JSON.parse(window.localStorage.getItem("walls"));
    }
}();


let weapons = function () {
    if (window.localStorage.getItem("weapons") === null) {
        return [
            {id: 1, name: 'Imp Mine', image: "./IMG/imp-mine.jpg", damage: 0},
            {id: 2, name: 'Imp Claymore', image: "./IMG/imp-claymore.jpg", damage: 0},
            {id: 3, name: 'Claymore', image: "./IMG/clay.jpg", damage: 0},
            {id: 4, name: 'AP Mine', image: "./IMG/ap.jpg", damage: 0},
            {id: 5, name: 'Small AP Mine', image: "./IMG/smallap.jpg", damage: 0},
            {id: 6, name: 'Prom-1', image: "./IMG/prom.jpg", damage: 0},
            {id: 7, name: 'M82', image: "./IMG/m82.jpg", damage: 0},
            {id: 8, name: 'C4', image: "./IMG/c4.png", damage: 0},
            {id: 9, name: 'Wood Bolt', image: "./IMG/crosswood.png", damage: 0},
            {id: 10, name: 'Metal Bolt', image: "./IMG/crossmetal.png", damage: 0}

        ]
    } else {
        return JSON.parse(window.localStorage.getItem("weapons"));
    }
}();

//WALLS START
function createWallColumns(walls) {
    let html = '';
    for (let i = 0; i < walls.length; i++) {
        html += createWallHTML(walls[i]);
    }
    return html;
};

function createWallHTML(wall) {

    let html = '<div class= "col-md-3 col-lg-3 m-3 p-3 wallsCard" style="text-align: center"><div><img style="width: 200px; height: 200px" src="';
    html += wall.image + '"></div><div><h2 class="mt-2">' + wall.name.toUpperCase() + '</h2></div><hr><div>Length of Structure: <select id="length'+ wall.id +'" class="lengthOfWall mb-2"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option></select><br># of Structures<select id="number'+ wall.id +'" class="numberOfWalls mb-2"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option></select><br><a href="#wallJump"><button class="btn btn-primary btn-dark" type="button" id="' + wall.id +' " onclick="wallLife('+ wall.id +')">Set Health</button></a></div></div>';

    return html;
};
//WALLS END

//WEAPONS START
function createWeaponColumns(weapons) {
    let html = '';
    for (let i = 0; i < weapons.length; i++) {
        html += createWeaponHTML(weapons[i]);
    }
    return html;
};

function createWeaponHTML(weapon) {

    let html = '<div class= "col-md-3 col-lg-3 m-3 p-3 weaponsCard" style="text-align: center"><div><img style="width: 200px; height: 200px" src="';
    html += weapon.image + '"></div><div><h2>' + weapon.name.toUpperCase() + '</h2></div><a href="#finalJump"><button type="button" id="'+ weapon.id +'" onclick="amountNeeded('+ weapon.id +')" class="btn btn-md btn-dark">SELECT</button></a></div>';

    return html;
};
//WEAPONS END

//WALL FUNCTIONALITY START


function wallLife(id){
    var wall =  walls[id -1];
    var wallLength = document.getElementById('length' + wall.id +'');
    var numberOfWalls = document.getElementById('number' + wall.id + '')
    var numberValue = numberOfWalls.options[numberOfWalls.selectedIndex].value;
    var lengthValue = wallLength.options[wallLength.selectedIndex].value;

    //WOOD START

    if (wall.id === 1 && lengthValue === '1') {
        lengthValue = '175';
    } else if (wall.id === 1 && lengthValue === '2') {
        lengthValue = '200';
    } else if (wall.id === 1 && lengthValue === '3') {
        lengthValue = '225';
    } else if (wall.id === 1 && lengthValue === '4') {
        lengthValue = '250';
    } else if (wall.id === 1 && lengthValue === '5') {
        lengthValue = '275';
    }

    //WOOD END

    //==============================================================================================

    //WIRE START

    if (wall.id === 2 && lengthValue === '1') {
        lengthValue = '525';
    } else if (wall.id === 2 && lengthValue === '2') {
        lengthValue = '600';
    } else if (wall.id === 2 && lengthValue === '3') {
        lengthValue = '675';
    } else if (wall.id === 2 && lengthValue === '4') {
        lengthValue = '750';
    } else if (wall.id === 2 && lengthValue === '5') {
        lengthValue = '825';
    }

    //WIRE END

    //==============================================================================================

    //METAL START

    //==============================================================================================


    if (wall.id === 3 && lengthValue === '1') {
        lengthValue = '875';
    } else if (wall.id === 3 && lengthValue === '2') {
        lengthValue = '1000';
    } else if (wall.id === 3 && lengthValue === '3') {
        lengthValue = '1125';
    } else if (wall.id === 3 && lengthValue === '4') {
        lengthValue = '1250';
    } else if (wall.id === 3 && lengthValue === '5') {
        lengthValue = '1325';
    }

    //METAL END

    //==============================================================================================


    //BRICK START

    if (wall.id === 4 && lengthValue === '1') {
        lengthValue = '1650';
    } else if (wall.id === 4 && lengthValue === '2') {
        lengthValue = '1725';
    } else if (wall.id === 4 && lengthValue === '3') {
        lengthValue = '1800';
    } else if (wall.id === 4 && lengthValue === '4') {
        lengthValue = '1875';
    } else if (wall.id === 4 && lengthValue === '5') {
        lengthValue = '1950';
    }

    //BRICK END

    //==============================================================================================

    //CONCRETE START

    if (wall.id === 5 && lengthValue === '1') {
        lengthValue = '2150';
    } else if (wall.id === 5 && lengthValue === '2') {
        lengthValue = '2225';
    } else if (wall.id === 5 && lengthValue === '3') {
        lengthValue = '2300';
    } else if (wall.id === 5 && lengthValue === '4') {
        lengthValue = '2375';
    } else if (wall.id === 5 && lengthValue === '5') {
        lengthValue = '2450';
    }

    //CONCRETE END

    //==============================================================================================

    //CABIN START

    // if (wall.id === 6 && lengthValue === '1') {
    //     lengthValue = '2150';
    // } else if (wall.id === 6 && lengthValue === '2') {
    //     lengthValue = '2225';
    // } else if (wall.id === 6 && lengthValue === '3') {
    //     lengthValue = '2300';
    // } else if (wall.id === 6 && lengthValue === '4') {
    //     lengthValue = '2375';
    // } else if (wall.id === 6 && lengthValue === '5') {
    //     lengthValue = '2450';
    // }
    //
    // if (wall.id === 7 && lengthValue === '1') {
    //     lengthValue = '2150';
    // } else if (wall.id === 7 && lengthValue === '2') {
    //     lengthValue = '2225';
    // } else if (wall.id === 7 && lengthValue === '3') {
    //     lengthValue = '2300';
    // } else if (wall.id === 7 && lengthValue === '4') {
    //     lengthValue = '2375';
    // } else if (wall.id === 7 && lengthValue === '5') {
    //     lengthValue = '2450';
    // }
    //
    // if (wall.id === 8 && lengthValue === '1') {
    //     lengthValue = '2150';
    // } else if (wall.id === 8 && lengthValue === '2') {
    //     lengthValue = '2225';
    // } else if (wall.id === 8 && lengthValue === '3') {
    //     lengthValue = '2300';
    // } else if (wall.id === 8 && lengthValue === '4') {
    //     lengthValue = '2375';
    // } else if (wall.id === 8 && lengthValue === '5') {
    //     lengthValue = '2450';
    // }



    //CABIN END

    //==============================================================================================

    //FOUNDATION START

    // if (wall.id === 9 && lengthValue === '1') {
    //     lengthValue = '3000';
    // } else if (wall.id === 9 && lengthValue === '2') {
    //     lengthValue = '3000';
    // } else if (wall.id === 9 && lengthValue === '3') {
    //     lengthValue = '3000';
    // } else if (wall.id === 9 && lengthValue === '4') {
    //     lengthValue = '3000';
    // } else if (wall.id === 9 && lengthValue === '5') {
    //     lengthValue = '3000';
    // }

    //FOUNDATION END

    //==============================================================================================

    //SANDBAG START

    if (wall.id === 6 && lengthValue === '1') {
        lengthValue = '1200';
    } else if (wall.id === 6 && lengthValue === '2') {
        lengthValue = '1200';
    } else if (wall.id === 6 && lengthValue === '3') {
        lengthValue = '1200';
    } else if (wall.id === 6 && lengthValue === '4') {
        lengthValue = '1200';
    } else if (wall.id === 6 && lengthValue === '5') {
        lengthValue = '1200';
    }

    //SANDBAG END

    //==============================================================================================





    function wallTotalHealth(lengthValue, numberValue){
        return Math.round(lengthValue * numberValue);
    }


    let html = '<div class="col bg-dark text-white"><h3 hidden id="wllLength">'+ wallLength.options[wallLength.selectedIndex].value +'</h3><h3 hidden id="wllId">'+ id +'</h3><h3 hidden id="number">'+ numberOfWalls.options[numberOfWalls.selectedIndex].value +'</h3><h1>Type = <span style="color: green">'+ walls[wall.id - 1].name.toUpperCase() +'</span></h1><h1>Length = <span style="color: green">'+ wallLength.options[wallLength.selectedIndex].value +'</span></h1><h1>Number = <span style="color: green">'+ numberOfWalls.options[numberOfWalls.selectedIndex].value +'</span></h1><h1>Total Health = <span id="ttlHlth" style="color: red">'+ wallTotalHealth(lengthValue, numberValue)+'</span></h1></div>'

    let wallHealthArea = document.querySelector('.total');
    wallHealthArea.innerHTML = html;
}
//WALL FUNCTIONALITY END

//==============================================================================================

//WEAPON FUNCTIONALITY START


function amountNeeded(id){
    var weapon = weapons[id - 1];
    var damage = weapon.damage;
    var wallHealth = document.querySelector('#ttlHlth').innerHTML;
    var wallLength = document.querySelector('#wllLength').innerHTML;
    var wallId =  document.querySelector('#wllId').innerHTML;
    var numberOfWalls = document.querySelector('#number').innerHTML


    //==============================================================================================

    //IMP MINE START

    //imp mine on wood

    if (id === 1 && parseInt(wallId) === 1 && parseInt(wallLength) === 1){
        damage = 11
    }else if (id === 1 && parseInt(wallId) === 1 && parseInt(wallLength) === 2){
        damage = 11
    }
    else if (id === 1 && parseInt(wallId) === 1 && parseInt(wallLength) === 3){
        damage = 11
    }
    else if (id === 1 && parseInt(wallId) === 1 && parseInt(wallLength) === 4){
        damage = 11
    }
    else if (id === 1 && parseInt(wallId) === 1 && parseInt(wallLength) === 5){
        damage = 12
    }

    // imp mine on wire
    else if (id === 1 && parseInt(wallId) === 2 && parseInt(wallLength) === 1){
        damage = 9
    }
    else if (id === 1 && parseInt(wallId) === 2 && parseInt(wallLength) === 2){
        damage = 9
    }
    else if (id === 1 && parseInt(wallId) === 2 && parseInt(wallLength) === 3){
        damage = 10
    }
    else if (id === 1 && parseInt(wallId) === 2 && parseInt(wallLength) === 4){
        damage = 9
    }
    else if (id === 1 && parseInt(wallId) === 2 && parseInt(wallLength) === 5){
        damage = 9
    }

    //imp mine on metal
    else if (id === 1 && parseInt(wallId) === 3 && parseInt(wallLength) === 1){
        damage = 8
    }
    else if (id === 1 && parseInt(wallId) === 3 && parseInt(wallLength) === 2){
        damage = 7
    }
    else if (id === 1 && parseInt(wallId) === 3 && parseInt(wallLength) === 3){
        damage = 8
    }
    else if (id === 1 && parseInt(wallId) === 3 && parseInt(wallLength) === 4){
        damage = 11
    }
    else if (id === 1 && parseInt(wallId) === 3 && parseInt(wallLength) === 5){
        damage = 7
    }

    //imp mine on brick
    else if (id === 1 && parseInt(wallId) === 4 && parseInt(wallLength) === 1){
        damage = 4
    }
    else if (id === 1 && parseInt(wallId) === 4 && parseInt(wallLength) === 2){
        damage = 4
    }
    else if (id === 1 && parseInt(wallId) === 4 && parseInt(wallLength) === 3){
        damage = 4
    }
    else if (id === 1 && parseInt(wallId) === 4 && parseInt(wallLength) === 4){
        damage = 4
    }
    else if (id === 1 && parseInt(wallId) === 4 && parseInt(wallLength) === 5){
        damage = 4
    }

    //imp mine on concrete
    else if (id === 1 && parseInt(wallId) === 5 && parseInt(wallLength) === 1){
        damage = 3
    }
    else if (id === 1 && parseInt(wallId) === 5 && parseInt(wallLength) === 2){
        damage = 3
    }
    else if (id === 1 && parseInt(wallId) === 5 && parseInt(wallLength) === 3){
        damage = 3
    }
    else if (id === 1 && parseInt(wallId) === 5 && parseInt(wallLength) === 4){
        damage = 3
    }
    else if (id === 1 && parseInt(wallId) === 5 && parseInt(wallLength) === 5){
        damage = 3
    }

    //imp mine on sandbag
    else if (id === 1 && parseInt(wallId) === 6 && parseInt(wallLength) < 6){
        damage = 11
    }


    //IMP MINE END

        //==============================================================================================

    //IMP CLAYMORE START

    //imp clay on wood
    if(id === 2 && parseInt(wallId) === 1 && parseInt(wallLength) < 6){
        damage = 31
    }
    //imp clay on wire
    else if(id === 2 && parseInt(wallId) === 2 && parseInt(wallLength) < 6){
        damage = 26
    }
    //imp clay on metal
    else if(id === 2 && parseInt(wallId) === 3 && parseInt(wallLength) === 1){
        damage = 21
    }
    else if(id === 2 && parseInt(wallId) === 3 && parseInt(wallLength) === 2){
        damage = 21
    }
    else if(id === 2 && parseInt(wallId) === 3 && parseInt(wallLength) === 3){
        damage = 18
    }
    else if(id === 2 && parseInt(wallId) === 3 && parseInt(wallLength) === 4){
        damage = 17
    }
    else if(id === 2 && parseInt(wallId) === 3 && parseInt(wallLength) === 5){
        damage = 21
    }
    //imp clay on brick
    else if(id === 2 && parseInt(wallId) === 4 && parseInt(wallLength) < 6){
        damage = 10
    }
    // imp clay on concrete
    else if(id === 2 && parseInt(wallId) === 5 && parseInt(wallLength) < 6) {
        damage = 8
    }
    //imp clay on sandbag
    else if (id === 2 && parseInt(wallId) === 6 && parseInt(wallLength) < 6){
        damage = 43
    }


    //IMP CLAYMORE END

        //==============================================================================================

    //CLAYMORE START

    //clay on wood
    if(id === 3 && parseInt(wallId) === 1 && parseInt(wallLength) < 3){
        damage = 52
    }
    else if(id === 3 && parseInt(wallId) === 1 && parseInt(wallLength) === 3) {
        damage = 51
    }
    else if(id === 3 && parseInt(wallId) === 1 && parseInt(wallLength) === 4) {
        damage = 52
    }
    else if(id === 3 && parseInt(wallId) === 1 && parseInt(wallLength) === 5) {
        damage = 51
    }
    //clay on wire
    else if(id === 3 && parseInt(wallId) === 2 && parseInt(wallLength) === 1) {
        damage = 46
    }
    else if(id === 3 && parseInt(wallId) === 2 && parseInt(wallLength) === 2) {
        damage = 44
    }
    else if(id === 3 && parseInt(wallId) === 2 && parseInt(wallLength) === 3) {
        damage = 45
    }
    else if(id === 3 && parseInt(wallId) === 2 && parseInt(wallLength) === 4) {
        damage = 47
    }
    else if(id === 3 && parseInt(wallId) === 2 && parseInt(wallLength) === 5) {
        damage = 41
    }
    //clay on metal
    else if(id === 3 && parseInt(wallId) === 3 && parseInt(wallLength) === 1) {
        damage = 36
    }
    else if(id === 3 && parseInt(wallId) === 3 && parseInt(wallLength) === 2) {
        damage = 35
    }
    else if(id === 3 && parseInt(wallId) === 3 && parseInt(wallLength) === 3) {
        damage = 35
    }
    else if(id === 3 && parseInt(wallId) === 3 && parseInt(wallLength) === 4) {
        damage = 36
    }
    else if(id === 3 && parseInt(wallId) === 3 && parseInt(wallLength) === 5) {
        damage = 34
    }
    //clay on brick
    else if(id === 3 && parseInt(wallId) === 4 && parseInt(wallLength) === 1) {
        damage = 19
    }
    else if(id === 3 && parseInt(wallId) === 4 && parseInt(wallLength) === 2) {
        damage = 18
    }
    else if(id === 3 && parseInt(wallId) === 4 && parseInt(wallLength) === 3) {
        damage = 18
    }
    else if(id === 3 && parseInt(wallId) === 4 && parseInt(wallLength) === 4) {
        damage = 20
    }
    else if(id === 3 && parseInt(wallId) === 4 && parseInt(wallLength) === 5) {
        damage = 18
    }
    //clay on concrete
    else if(id === 3 && parseInt(wallId) === 5 && parseInt(wallLength) < 5) {
        damage = 15
    }
    else if(id === 3 && parseInt(wallId) === 5 && parseInt(wallLength) === 5) {
        damage = 14
    }
    //clay on sandbag
    else if (id === 3 && parseInt(wallId) === 6 && parseInt(wallLength) < 6){
        damage = 56
    }


    //CLAYMORE END

        //==============================================================================================

    //SMALL AP MINE START

    //small ap on wood
    if(id === 4 && parseInt(wallId) === 1 && parseInt(wallLength) < 6){
        damage = 11
    }
    //small ap on wire
    else if(id === 4 && parseInt(wallId) === 2 && parseInt(wallLength) < 6) {
        damage = 9
    }
    //small ap on metal
    else if(id === 4 && parseInt(wallId) === 3 && parseInt(wallLength) < 6) {
        damage = 7
    }
    //small ap on brick
    else if(id === 4 && parseInt(wallId) === 4 && parseInt(wallLength) < 6) {
        damage = 3
    }
    //small ap on concrete
    else if(id === 4 && parseInt(wallId) === 5 && parseInt(wallLength) < 6) {
        damage = 3
    }
    //small ap on sandbag
    else if (id === 4 && parseInt(wallId) === 6 && parseInt(wallLength) < 6){
        damage = 11
    }


    //SMALL AP MINE END

    //==============================================================================================

    //AP MINE START
    //ap on wood
    if(id === 5 && parseInt(wallId) === 1 && parseInt(wallLength) < 6){
        damage = 11
    }
    //ap on wire
    else if(id === 5 && parseInt(wallId) === 2 && parseInt(wallLength) < 6) {
        damage = 9
    }
    //ap on metal
    else if(id === 5 && parseInt(wallId) === 3 && parseInt(wallLength) < 6) {
        damage = 7
    }
    //ap on brick
    else if(id === 5 && parseInt(wallId) === 4 && parseInt(wallLength) < 6) {
        damage = 3
    }
    //ap on concrete
    else if(id === 5 && parseInt(wallId) === 5 && parseInt(wallLength) < 6) {
        damage = 3
    }
    //ap on sandbag
    else if (id === 5 && parseInt(wallId) === 6 && parseInt(wallLength) < 6){
        damage = 10
    }

    //AP MINE END

    //==============================================================================================

    //PROM 1 START

    //prom 1 on wood
    if(id === 6 && parseInt(wallId) === 1 && parseInt(wallLength) < 6){
        damage = 11
    }
    //prom 1 on wire
    else if(id === 6 && parseInt(wallId) === 2 && parseInt(wallLength) < 6) {
        damage = 9
    }
    //prom 1 on metal
    else if(id === 6 && parseInt(wallId) === 3 && parseInt(wallLength) < 6) {
        damage = 7
    }
    //prom 1 on brick
    else if(id === 6 && parseInt(wallId) === 4 && parseInt(wallLength) < 6) {
        damage = 3
    }
    //prom 1 on concrete
    else if(id === 6 && parseInt(wallId) === 5 && parseInt(wallLength) < 6) {
        damage = 3
    }
    //prom 1 on sandbag
    else if (id === 6 && parseInt(wallId) === 6 && parseInt(wallLength) < 6){
        damage = 11
    }

    //PROM 1 END

    //==============================================================================================

    //M82 START

    //M82 on wood
    if(id === 7 && parseInt(wallId) === 1 && parseInt(wallLength) < 6){
        damage = 16
    }
    //M82 on wire
    else if(id === 7 && parseInt(wallId) === 2 && parseInt(wallLength) < 6) {
        damage = 16
    }
    //M82 on metal
    else if(id === 7 && parseInt(wallId) === 3 && parseInt(wallLength) < 6) {
        damage = 16
    }
    //M82 on brick
    else if(id === 7 && parseInt(wallId) === 4 && parseInt(wallLength) < 6) {
        damage = 11
    }
    //M82 on concrete
    else if(id === 7 && parseInt(wallId) === 5 && parseInt(wallLength) < 6) {
        damage = 9
    }
    //M82 on sandbag
    else if (id === 7 && parseInt(wallId) === 6 && parseInt(wallLength) < 6){
        damage = 10.5
    }

    //M82 END

    //==============================================================================================

    //C4 START

    //C4 on wood
    if(id === 8 && parseInt(wallId) === 1 && parseInt(wallLength) < 6){
        damage = 1600
    }
    //C4 on wire
    else if(id === 8 && parseInt(wallId) === 2 && parseInt(wallLength) < 6) {
        damage = 1600
    }
    //C4 on metal
    else if(id === 8 && parseInt(wallId) === 3 && parseInt(wallLength) < 6) {
        damage = 1350
    }
    //C4 on brick
    else if(id === 8 && parseInt(wallId) === 4 && parseInt(wallLength) < 6) {
        damage = 1350
    }
    //C4 on concrete
    else if(id === 8 && parseInt(wallId) === 5 && parseInt(wallLength) < 6) {
        damage = 1070
    }
    //C4 on sandbag
    else if (id === 8 && parseInt(wallId) === 6 && parseInt(wallLength) < 6){
        damage = 1600
    }

    //C4 END

    //==============================================================================================

    //WOOD ARROW START

    //wood arrow on wood
    if(id === 9 && parseInt(wallId) === 1 && parseInt(wallLength) < 6){
        damage = 1.4
    }
    //wood arrow on wire
    else if(id === 9 && parseInt(wallId) === 2 && parseInt(wallLength) < 6) {
        damage = 1.4
    }
    //wood arrow on metal
    else if(id === 9 && parseInt(wallId) === 3 && parseInt(wallLength) < 6) {
        damage = 1.4
    }
    //wood arrow on brick
    else if(id === 9 && parseInt(wallId) === 4 && parseInt(wallLength) < 6) {
        damage = 1.4
    }
    //wood arrow on concrete
    else if(id === 9 && parseInt(wallId) === 5 && parseInt(wallLength) < 6) {
        damage = 1.4
    }
    //wood arrow on sandbag
    else if (id === 9 && parseInt(wallId) === 6 && parseInt(wallLength) < 6){
        damage = 1.4
    }

    //WOOD ARROW END

    //==============================================================================================

    //METAL ARROW START

    //metal arrow on wood
    if(id === 10 && parseInt(wallId) === 1 && parseInt(wallLength) < 6){
        damage = 2.1
    }
    //metal arrow on wire
    else if(id === 10 && parseInt(wallId) === 2 && parseInt(wallLength) < 6) {
        damage = 2.1
    }
    //metal arrow on metal
    else if(id === 10 && parseInt(wallId) === 3 && parseInt(wallLength) < 6) {
        damage = 2.1
    }
    //metal arrow on brick
    else if(id === 10 && parseInt(wallId) === 4 && parseInt(wallLength) < 6) {
        damage = 2.1
    }
    //metal arrow on concrete
    else if(id === 10 && parseInt(wallId) === 5 && parseInt(wallLength) < 6) {
        damage = 2.1
    }
    //metal arrow on sandbag
    else if (id === 10 && parseInt(wallId) === 6 && parseInt(wallLength) < 6){
        damage = 2.1
    }

    //METAL ARROW END

    //==============================================================================================



    function weaponsNeeded(wallHealth, damage){
        return Math.round(wallHealth / damage);
    }


    let Finalhtml = '<div class="col bg-dark text-white"><h5> ** Each <span style="color: red; font-weight: bold">'+ weapon.name +'</span> will do <span style="color: red; font-weight: bold">'+ damage +'</span> damage to a <span style="color: green; font-weight: bold">'+ wallLength +'m '+ walls[wallId - 1].name +'</span> structure **</h5><h1>You need<br> <span id="numberNeeded" style="color: red; font-weight: bold">'+ weaponsNeeded(wallHealth, damage) +'</span> - <span style="color: red; font-weight: bold">'+ weapon.name +'</span><br> to destroy <span style="color: green; font-weight: bold">'+ numberOfWalls +'</span><br> <span style="color: green; font-weight: bold">'+ wallLength +'m '+ walls[wallId - 1].name.toUpperCase() +'</span> structure(s)</h1></div>'

    let playerBoltsHtml = '<div class="col bg-dark text-white"><h4 class="mt-5">** USE TO SEE HOW MANY BOLTS EACH PLAYER NEEDS TO FIRE **</h4><br><div>Select number of attackers: <select id="players" class="boltsNeeded mb-2"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option></select></div><a href="#numberJump"><button class="btn btn-success mb-5" id="playerBolts" onclick="numberOfBolts()">CALCULATE</button></a></div>';

    let finalArea = document.querySelector('.final');
    finalArea.innerHTML = Finalhtml;

    if(weapon.id === 9 || weapon.id === 10){
        let boltsArea = document.querySelector('.bolts');
        boltsArea.innerHTML = playerBoltsHtml;
    }




}

//WEAPON FUNCTIONALITY END

//NUMBER OF BOLTS START
function numberOfBolts(){

    var numberOfPlayers = document.getElementById('players');
    var playersValue = numberOfPlayers.options[numberOfPlayers.selectedIndex].value;

    function bolts(){
        return (Math.round(parseInt(document.getElementById('numberNeeded').innerHTML) / playersValue));
    }

    let boltsHtml = '<div id="numberJump" class="col bg-dark text-white pb-5"><h3 style="text-align: center">With <span style="color: green">'+ playersValue +'</span> player(s), each will need to fire <span style="color: red">'+ bolts() +'</span> bolts to destroy the structure.</h3></div>';

    let playerAmounts = document.querySelector('.playerBolts');
    playerAmounts.innerHTML = boltsHtml;
}



//NUMBER OF BOLTS END




//WALLS START
let wallContentArea = document.querySelector('.walls');
wallContentArea.innerHTML = createWallColumns(walls);
//WALLS END

//WEAPONS START
let weaponContentArea = document.querySelector('.weapons');
weaponContentArea.innerHTML = createWeaponColumns(weapons);
//WEAPONS END
