const ADMIN_USERS = ["Ada", "Greta" , "Vim" , "Tim"]
/*Si son Admin_users pueden pasar sino no autorizado*/
function adminUsers (req,res,next) {
    if(req.query.user == "Ada" || req.query.user == "Greta" || req.query.user == "Vim" || req.query.user == "Tim"){
next()
    }else{
        res.send("No autorizado")
    }
}

module.exports = adminUsers;