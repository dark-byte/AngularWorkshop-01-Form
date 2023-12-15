const {verify} = require('hcaptcha');

const token = '5d0ca651-ad1c-4462-adc8-a67a3ece695c';
const secret = 'ES_3c95dd0aa5a34b07a94419799bf6d8a0';

verify(secret, token)
  .then((data) => {
    if (data.success === true) {
      console.log('success!', data);
    } else {
      console.log('verification failed');
    }
  })
  .catch(console.error);