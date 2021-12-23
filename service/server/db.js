const mariadb = require("mariadb");

const pool = mariadb.createPool({
  host: "mariadb",
  user: "admin",
  password: "pass123",
  database: "beekeeping",
});

module.exports = {
  getConnection: function () {
    return new Promise(function (resolve, reject) {
      pool
        .getConnection()
        .then(function (connection) {
          resolve(connection);
        })
        .catch(function (error) {
          reject(error);
        });
    });
  },
};
