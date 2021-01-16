// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
const got = require('got');
module.exports = (options = {}) => {
  return async context => {
    let listOfIntents = require('../../chatbot-data/intents.json');

    if (!!context.data.sentence) {
      let { body } = await got.post('http://127.0.0.1:5001/katana-ml/api/v1.0/assistant', {
        json: {
          sentence: context.data.sentence
        },
        responseType: 'json'
      });
      let getRandomResponse = (v) => v[Math.round(Math.random() * (v.length - 1))];
      context.data.responses = listOfIntents.intents
                                 .filter(v => v.tag === body[0].intent)
                                 .map(v => getRandomResponse(v.responses));
    }
    return context;
  };
};
