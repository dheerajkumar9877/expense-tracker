const bcrypt = require('bcrypt');
const db = require('../config/db')
class UserModels  {
    // Create User
    async createUser(name , email ,password ) {
        const hashedPassword = await bcrypt.hash(password, 10);
        const sql ="INSERT INTO login(name , email , password) VALUES(?,?,?)";
        const values = [
            name ,
            email ,
            hashedPassword ,
        ]
        db.query(sql,[values],(err,result) => {
            if(err){
                console.log(err);
                return;
            }
            console.log("Created Sussfully");
            console.log(result);
        });
    }
    // login User
   async login(email ,password) {

    const sql = "SELECT * FROM login WHERE email = ?"

    db.query(sql, [email], async(err,result) =>{

        if(err){
            console.log(err);
            return;
        }

        if(result.length===0){
            console.log("Invalid email pr Password");
            return ;
        }

        const user = result[0] ;

        const isMatch = await bcrypt.compare(
            password ,
            user.password
        );

        if(!isMatch){
            console.log("Invalid Email or Password");
            return;
        }

        console.log("Logined");
    });
   }
}
module.exports = UserModels ;