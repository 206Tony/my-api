'use strict';
module.exports = (sequelize, DataTypes) => {
  const car = sequelize.define('car', {
    make: DataTypes.STRING,
    model: DataTypes.STRING,
    year: DataTypes.INTEGER,
    engine: DataTypes.STRING
  }, {});
  car.associate = function(models) {
    // associations can be defined here
  };
  return car;
};