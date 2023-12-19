module.exports = (sequelize, DataTypes) => {
    const Schedule = sequelize.define("Schedule", {
        date: DataTypes.DATE,
        canceled_at: DataTypes.DATE,
    });
    Schedule.associate = function(models) {
        Schedule.belongsTo(models.User, {as: 'user', foreignKey: 'user_id'})
    }

    return Schedule;
}