const conn = require('./conn');
const Sequelize = require('sequelize');

const attrs = {
  albumString: {
    type: Sequelize.STRING,
    defaultValue: '',
    get: function(){
      return this.getDataValue('albumString').split(',');
    },
    set: function(val){
      val = typeof Array.join === 'function' ? val.join(',') : val;
      return this.setDataValue('albumString', val);
    }
  },
  completedDate: Sequelize.DATE,
  orderPrice: Sequelize.DECIMAL,
  tax: Sequelize.DECIMAL,
  date: Sequelize.DATE
};

module.exports = conn.define('order', attrs);
