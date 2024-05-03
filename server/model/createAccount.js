// const database = require("../config/DBConfig");

// const createAccount = async (accountData) => {
//   const query = `INSERT INTO Account (email, password, token) 
//       VALUES (
//         '${accountData.email}', 
//         '${accountData.password}',
//         '${accountData.token}'
//         )
//     `;
//   const uid = await new Promise((resolve) => {
//     database.query(query, (error, result) => {
//       if (error) throw error;
//       // id = result.insertId;
//       resolve(result.insertId);
//     });
//   });
//   return uid;
// };

// module.exports = createAccount;

const database = require("../config/DBConfig");

const createAccount = async (accountData) => {
  try {
    const query = `INSERT INTO Account (email, password, token)
    VALUES (
      '${accountData.email}', 
      '${accountData.password}',
      '${accountData.token}'
      )`;
    const result = await database.query(query);
    return result.insertId;
  } catch (error) {
    console.error("Error creating account:", error);
  }
};

module.exports = createAccount;
