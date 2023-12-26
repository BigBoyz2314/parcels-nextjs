

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

export default async function handler(req, res) {
  const { phoneNumber } = req.body;

  try {
    const verification = await client.verify.v2.services('VA8086bc17bf72c7de31f7e827e6c2a5cc') // Replace with your Verify Service SID
      .verifications
      .create({ to: phoneNumber, channel: 'sms' });

    console.log(verification.sid); // Optionally log verification SID for testing

    res.status(200).json({ success: true, message: 'OTP sent successfully', verification });
  } catch (error) {
    console.error('Error sending OTP:', error);
    res.status(500).json({ success: false, error: 'Failed to send OTP' });
  }
}
