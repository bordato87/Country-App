const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('season', {
        name: {
            type: DataTypes.STRING,
            primaryKey: true,
            allowNull: false
        },
    },{
        updatedAt: false
    });
};