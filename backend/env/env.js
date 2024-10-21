const mysql = require('mysql');
const mysqlConnection = mysql.createConnection({
    host: 'bmw8l2caouxpuiabmobg-mysql.services.clever-cloud.com',
    user: 'uzirxrdglwgikq66',
    password: 'Ia0QDek9c0VZpJhS3y1e',
    database: 'bmw8l2caouxpuiabmobg',
    multipleStatements: true
});

mysqlConnection.connect( function(err){
    if(err){
        console.error(err);
        return;
    } else {
        console.log('Base de datos conectada!');
    }
})

module.exports = mysqlConnection;