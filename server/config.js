module.exports = {
  host: process.env.CLEARDB_DATABASE_URL || '',
  user: process.env.CLEARDB_DATABASE_USER || '',
  password: process.env.CLEARDB_DATABASE_PASS || '',
  database: process.env.CLEARDB_DATABASE || ''
};
