const db = require('../config/db');

class UserModels {
    static createUser(name , email ,password , callback) {
        const mysql = "INSERT INTO expense_tracker(name , email, password) VALUES (?) ";
        const value = [
            name,
            email,
            password
        ]
        db.query(sql,value,(err,result) => {
            if(err){
                return callback(err , null);
            }
            callback(null, result);
        });
    }
    static findUser(email,password,callback){
        const mysql = "SELECT * FROM expense_tracker WHERE email = ?" ;
        db.query(sql , [email] , (err,result) =>{
            if (err) {
                return callback(err, null);
            }

            callback(null, result);
        })
    }
}

module.exports = UserModels;