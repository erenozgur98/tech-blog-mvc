const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {}

Comment.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'user',
                key: 'id'
            }
        },
        comment_text: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        post_id: {
            type: DataTypes.STRING,
            allowNull: false,
            references: {
                model: 'post',
                key: 'id'
            }
        },
        user_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        comment_date: {
            type: DataTypes.DATE,
            allowNull: false
        },

    }, 
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'comment'
    }
);

module.exports = Comment;