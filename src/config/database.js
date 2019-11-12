module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'donationCRM',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
