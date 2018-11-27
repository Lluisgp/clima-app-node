const axios = require('axios');

const getClima = async(lat, lng) => {


    let latEnc = encodeURI(lat);
    let lngEnc = encodeURI(lng);

    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latEnc}&lon=${lngEnc}&units=metric&appid=f369635965b00ad16ced5da4da4b9f3b`);


    if (resp.data.cod === '400') {
        throw new Error(`No hay resultados para las coordenadas ${resp.data.message}`);
    }

    let temp = resp.data.main.temp;

    return temp
}

module.exports = {
    getClima
}