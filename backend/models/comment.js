'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.User.belongsToMany(models.Article, {
        through: models.Comment,
        foreignKey: 'userId',
        otherKey: 'articleId',
      });
  
      models.Article.belongsToMany(models.User, {
        through: models.Comment,
        foreignKey: 'articleId',
        otherKey: 'userId',
      });
  
      models.Comment.belongsTo(models.User, {
        foreignKey: 'userId',
        as: 'user',
      });
  
      models.Comment.belongsTo(models.Article, {
        foreignKey: 'articleId',
        as: 'article',
      });
    }
  };
  Comment.init({
    articleId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    content: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Comment',
  });
  return Comment;
};