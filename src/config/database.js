module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'donation',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
