let controller = {
    index: (req,res) => {
        res.render("index")
    },
    admin: (req,res) => {
       res.send("bienvenido") 
    }
}

module.exports = controller 

