let axios = require("axios")

//=====================getStates============================

let getStates = async function (req, res) {

    try {
        let options = {
            method: 'get',
            url: 'https://cdn-api.co-vin.in/api/v2/admin/location/states'
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
};

//=============getDistrict====================================

let getDistricts = async function (req, res) {
    try {
        let id = req.params.stateId
        let options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/admin/location/districts/${id}`
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
};

//==============================getByPin====================

let getByPin = async function (req, res) {
    try {
        let pin = req.query.pincode
        let date = req.query.date
        console.log(`query params are: ${pin} ${date}`)
        var options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pin}&date=${date}`
        }
        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
};
///=====================getByDistrict==============assignment

let getByDistrict = async function (req, res) {
    try {
        let district = req.query.district_id;
        let date = req.query.date;
        console.log(`query params are: ${district} ${date}`);
        var options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=
        ${district}&date=${date}`,
        };
        let result = await axios(options);
        res.status(200).send({ msg: result.data });
    } catch (err) {
        console.log(err);
        res.status(500).send({ msg: err.message });
    }
};


//=======================getOtp=================================

let getOtp = async function (req, res) {
    try {
        let blahhh = req.body

        console.log(`body is : ${blahhh} `)
        var options = {
            method: "post",
            url: `https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP`,
            data: blahhh
        }

        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
};

//========================sortedcities===================

/*let getsortedOfCities = async function (req, res) {
    try {
      let cities = [
        "Bengaluru",
        "Mumbai",
        "Delhi",
        "Kolkata",
        "Chennai",
        "London",
        "Moscow",
      ];
      let cityArray = [];
  
      for (let i of cities) {
        let obj = { city: i };
  
        let options = {
          method: "get",
          url: `http://api.openweathermap.org/data/2.5/weather?q=${i}&appid=ad93a5db69ff751f13d344e3950fbd0f`,
        };
        let resp = await axios(options);
  
        obj.temp = resp.data.main.temp;
        //{city:bemgulur, temp:520}
        cityArray.push(obj);
      }
      let sortedResult = cityArray.sort(function (a, b) {
        return a.temp - b.temp;
      });
      res.status(200).send({ data: sortedResult });
    } 
    catch (err) {
      // console.log(err.message);
      res.status(500).send({ msg: err.message });
    }
  };
  */

module.exports.getStates = getStates
module.exports.getDistricts = getDistricts
module.exports.getByPin = getByPin
module.exports.getByDistrict = getByDistrict
module.exports.getOtp = getOtp
//module.exports.getsortedOfCities=getsortedOfCities