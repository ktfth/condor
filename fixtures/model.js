'use strict';
const tf = require('@tensorflow/tfjs-node');

(async function () {
  const model = await tf.loadLayersModel('http://localhost:3030/chatbot-model/model.json');

  let val = () => Math.round(Math.random() * 100);
  let arr = (new Array(93)).fill(null).map(v => val());
  let ta = tf.tensor([arr]);

  console.log(model.predict([ta]));
})();
