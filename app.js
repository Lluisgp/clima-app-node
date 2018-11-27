//const axios = require('axios');
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

// lugar.getLugarLatLng(argv.direccion).then(resp => {
//         console.log(resp);
//     })
//     .catch(e => console.log(e));

// clima.getClima(41.4399495, 2.1861877).then(temp => {
//         console.log(temp);
//     })
//     .catch(e => {
//         console.log(e);
//     })

let getInfo = async() => {
    try {
        let coors = await lugar.getLugarLatLng(argv.direccion);
        let temp = await clima.getClima(coors.lat, coors.lng);

        return `La temperatura en ${coors.direccion} es de ${temp}`;
    } catch (error) {
        return `No se pudo determinar la temperatura en ${argv.direccion}`;
    }
}

getInfo(argv.direccion).then(mensaje => {
    console.log(mensaje);
}).catch(err => {
    console.log(err);
})