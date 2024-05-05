//Inportar Multer
const multer = require ('multer')

const storage = multer.diskStorage({
    //se define la ubicación
  destination: function (req, file, cb) {
    cb(null, "src/public/img")
  },
  //se define el nombre, agregando un timestamp al nombre original
  filename: function (req, file, cb) {
    const originalName = file.originalname.replace(/\s/g, "")
    cb(null, Date.now() + "-" + originalName)
  },
  
})

const upload = multer({ storage: storage })

//se exporta la funcion upload para usar como middleware
module.exports = upload