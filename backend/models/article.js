'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Article extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.Article.belongsTo(models.User, {
        foreignKey: {
          allowNull: false
        }
      });

      models.Article.hasMany(models.Comment,
        { onDelete: 'cascade' });
      
      models.Article.hasMany(models.Like,
        { onDelete: 'cascade' });
    }
  };
  Article.init({
    userId: DataTypes.INTEGER,
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    articleUrl: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Article',
  });
  return Article;
};