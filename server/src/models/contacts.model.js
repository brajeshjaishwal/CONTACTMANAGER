// contacts-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
require('mongoose-type-email')
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const contacts = new Schema({
    name: {
      first: {type: String, required: [true, 'First is a required field.']},
      last:  {type: String, required: false}
    },
    email: {
      type: mongooseClient.SchemaTypes.Email,
      required: [true, 'Email is a required field.']
    },
    phone : {
      type: String,
      required: [true, 'phone number is a required field.'],
      validate: {
        validator: function(v) {
          return /^\+(?:[0-9] ?){6,14}[0-9]$/.test(v)
        },
        message: '{VALUE} is not a valid international phone number !'
      }
    },
    createdAt: {type: Date, 'default': Date.now},
    updatedAt: {type: Date, 'default': Date.now}
  }, {
    timestamps: true
  });

  return mongooseClient.model('contacts', contacts);
};
