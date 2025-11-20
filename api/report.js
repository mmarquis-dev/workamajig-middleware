// api/report.js
import axios from 'axios';

export default async function handler(req, res) {
  const reportKey = process.env.REPORT_KEY;

  try {
    const response = await axios.post(
      'https://app18.workamajig.com/api/beta1/report',
      { reportKey },
      {
        headers: {
          APIAccessToken: process.env.API_ACCESS_TOKEN,
          UserToken: process.env.USER_TOKEN
        }
      }
    );
    res.status(200).json(response.data);
  } catch (error) {
    console.error('Report error:', error?.response?.data || error.message);
    res.status(500).json({
      error: 'Failed to fetch report',
      detail: error?.response?.data || error.message
    });
  }
}
