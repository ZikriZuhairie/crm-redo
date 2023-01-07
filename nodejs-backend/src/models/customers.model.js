// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
    const modelName = 'customers';
    const mongooseClient = app.get('mongooseClient');
    const { Schema } = mongooseClient;
    const schema = new Schema(
      // ~cb-read-start~
      {
       custname: { type: String },
       custphonenumber: { type: String, required: false },
       custemail: { type: String },
       custcompany: { type: String },
       addcustname: { type: String },
       addcustphonenumber: { type: String },
       addcustemail: { type: String },
       addcustcompany: { type: String },

    }
      // ~cb-read-end~
      , 
      {
      timestamps: true
    });
  
    // This is necessary to avoid model compilation errors in watch mode
    // see https://mongoosejs.com/docs/api/connection.html#connection_Connection-deleteModel
    if (mongooseClient.modelNames().includes(modelName)) {
      mongooseClient.deleteModel(modelName);
    }
    return mongooseClient.model(modelName, schema);
    
  };