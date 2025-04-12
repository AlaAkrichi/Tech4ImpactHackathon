const test = (req,res)=>{

    res.json({message: "test is working"})
}
const registeruser = (req, res)=>{
try {
    const {firstname, lastname, email, password, institution, yearOfstudy, major} = req.body;
        if(!firstname) {
            return res.json({
                error: "firstname is required"
            });
        };
        if(!lastname) {
            return res.json({
                error: "lastname is required"
            });
        };
        if(!email) {
            return res.json({
                error: "email is required"
            });
        };
        if(!password || password.length < 6 ) {
            return res.json({
                error: "password is required and must be at least 6 characters long"
            });
        }
        if(!institution) {
            return res.json({
                error: "institution is required"
            });
        };
        if(!yearOfstudy) {
            return res.json({
                error: "yearOfstudy is required"
            });
        };
        if(!major) {
            return res.json({
                error: "major is required"
            });
        };
        
}    catch (error ){
}
} 

module.exports = {test,
                 registeruser}
