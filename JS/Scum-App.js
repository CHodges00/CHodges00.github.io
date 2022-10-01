let walls = function () {
    if (window.localStorage.getItem("walls") === null) {
        return [
            {id: 1, name: "wood", image: "./IMG/wood.jpg"},
            {id: 2, name: "wire", image: "./IMG/barbed.jpg"},
            {id: 3, name: "metal", image: "./IMG/metal.jpg"},
            {id: 4, name: "brick", image: "./IMG/brick.jpg"},
            {id: 5, name: "concrete", image: "./IMG/concrete.jpg"}
        ]
    } else {
        return JSON.parse(window.localStorage.getItem("walls"));
    }
}();


let weapons = function () {
    if (window.localStorage.getItem("walls") === null) {
        return [
            {id: 1, name: 'Improvised Mine', image: "./IMG/imp-mine.jpg"},
            {id: 2, name: 'Improvised Claymore', image: "./IMG/imp-claymore.jpg"},
            {id: 3, name: 'Claymore', image: "./IMG/claymore.jpg"},
            {id: 4, name: 'Anti-personnel Mine', image: "./IMG/anti.jpg"},
            {id: 5, name: 'Small Anti-personnel Mine', image: "./IMG/small-anti-personnel.jpg"},
            {id: 6, name: 'Prom-1', image: "./IMG/prom.jpg"},
            {id: 7, name: 'M82', image: "./IMG/m82.jpg"},
        ]
    } else {
        return JSON.parse(window.localStorage.getItem("walls"));
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

    let html = '<div class= "col-md-2 col-lg-2 m-1 walls" style="text-align: center"><div><img style="width: 200px; height: 200px" src="';
    html += wall.image + '"></div><div><h2 class="mt-2">' + wall.name.toUpperCase() + '</h2></div><hr><div>Length of Wall: <select id="length'+ wall.id +'" class="lengthOfWall mb-2"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option></select><br># of walls<select id="number'+ wall.id +'" class="numberOfWalls mb-2"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option></select><br><button class="btn btn-primary btn-dark" type="button" id="' + wall.id +' " onclick="wallLife('+ wall.id +')">Set Wall Health</button></div></div>';

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

    let html = '<div class= "col-md-4 col-lg-4 weapons" style="text-align: center"><div><img style="width: 200px; height: 200px" src="';
    html += weapon.image + '"></div><div><h2>' + weapon.name.toUpperCase() + '</h2></div><button type="button" id="'+ weapon.id +'" onclick="amountNeeded()" class="btn btn-md btn-primary">SELECT</button><hr></div>';

    return html;
};
//WEAPONS END

//FUNCTIONALITY START


function wallLife(id){
    var wall =  walls[id -1];
    var wallLength = document.getElementById('length' + wall.id +'');
    var numberOfWalls = document.getElementById('number' + wall.id + '')
    var numberValue = numberOfWalls.options[numberOfWalls.selectedIndex].value;
    var lengthValue = wallLength.options[wallLength.selectedIndex].value;

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


    function wallTotalHealth(lengthValue, numberValue){
        return lengthValue * numberValue;
    }


    let html = '<div class="col bg-dark"><h3 hidden id="wllLength">'+ wallLength.options[wallLength.selectedIndex].value +'</h3><h3 hidden id="wllId">'+ id +'</h3><h3 hidden id="number">'+ numberOfWalls.options[numberOfWalls.selectedIndex].value +'</h3><h1 style="color: red">Type = '+ walls[wall.id - 1].name.toUpperCase() +'</h1><h1 style="color: red">Length = '+ wallLength.options[wallLength.selectedIndex].value +'</h1><h1 style="color: red">Number = '+ numberOfWalls.options[numberOfWalls.selectedIndex].value +'</h1><h1 style="color: red">Total Health = <span id="ttlHlth">'+ wallTotalHealth(lengthValue, numberValue)+'</span></h1></div>'

    let wallHealthArea = document.querySelector('.total');
    wallHealthArea.innerHTML = html;
}


function amountNeeded(){
    var wallHealth = document.querySelector('#ttlHlth').innerHTML;
    var wallLength = document.querySelector('#wllLength').innerHTML;
    var wallId =  document.querySelector('#wllId').innerHTML;
    var numberOfWalls = document.querySelector('#number').innerHTML
    console.log('# of walls: '+ numberOfWalls);
    console.log('wall id: ' + wallId);
    console.log('length: ' + wallLength);
    console.log('health: ' + wallHealth);
}




//WALLS START
let wallContentArea = document.querySelector('.walls');
wallContentArea.innerHTML = createWallColumns(walls);
//WALLS END
//WEAPONS START
let weaponContentArea = document.querySelector('.weapons');
weaponContentArea.innerHTML = createWeaponColumns(weapons);
//WEAPONS END
