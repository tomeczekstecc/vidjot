if (process.env.NODE_ENV === 'production') {
  module.exports = {
    mongoURI:
      'mongodb+srv://tomeczekstecc:A61MSGHhG09M2sDc@vis-jotcluster-dpat3.mongodb.net/test?retryWrites=true&w=majority'
  };
} else {
  module.exports = {
    mongoURI: 'mongodb://localhost/vidjot-dev'
  };
}
