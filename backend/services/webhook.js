const axios = require('axios')

const WEBHOOK_URL = 'https://webhook.site/your-webhook-url'

module.exports = async payload => {
  try {
    await axios.post(WEBHOOK_URL, payload)
    console.log('Webhook sent')
  } catch (error) {
    console.error('Webhook failed')
  }
}
