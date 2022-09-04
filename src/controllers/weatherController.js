let axios = require("axios")
let getsortedOfCities = async function (req, res) {
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
                            url: `http://api.openweathermap.org/data/2.5/weather?q=${i}&appid=
                            fbc346467aaa0b16ba20dedba4b16974`,
                     };
                     let resp = await axios(options);

                     obj.temp = resp.data.main.temp;
                     
                     cityArray.push(obj);
              }
              let sortedResult = cityArray.sort(function (a, b) {
                     return a.temp - b.temp;
              });
              res.status(200).send({ data: sortedResult });
       }
       catch (err) {
              console.log(err);
              res.status(500).send({ msg: err.message });
       }
};

//===============================memehandler============================

let createMeme =async function(req,res){
  try{
       let template_id=req.query.template_id
       let text0 =req.query.text0
       let text1=req.query.text1
       let username=req.query.username
       let password=req.query.password
       let options={
              method:"post",
              
              url:`https://api.imgflip.com/caption_image?template_id=${template_id}&test0=${text0}&text1=${text1}
              &username=chewie12345&password=meme@123`,
       };
let result=await axios(options)
  res.send({data:result.data})
           
  }
catch(error){
       console.log(error)
       res.status(500).send({status:false,msg:"server error"})
}
  }


module.exports.getsortedOfCities = getsortedOfCities
module.exports.createMeme=createMeme