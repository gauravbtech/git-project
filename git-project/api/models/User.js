/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
	attributes: {
      userFirstName: {
        type: 'string'
      },
      userLastName: {
        type: 'string'
      },
      companyName: {
        type: 'string'
      },
      phone:{
        type: 'string'
      },
      email: {
        type: 'string'
      },  
      password: {
        type: 'string'
      }
  }  
};

