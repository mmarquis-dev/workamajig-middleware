// api/activities.js
import axios from 'axios';

export default async function handler(req, res) {
  const { mode, dateUpdated } = req.query;

  const headers = {
    APIAccessToken: process.env.API_ACCESS_TOKEN,
    UserToken: process.env.USER_TOKEN
  };

  const url = `https://www.app18.workamajig.com/api/beta1/activities/search`;

  try {
    const response = await axios.get(url, {
      params: { mode, dateUpdated },
      headers
    });
    res.status(200).json(response.data);
  } catch (error) {
    console.error(error.response?.data || error.message);
    res.status(500).json({ error: 'Something went wrong' });
  }
}
