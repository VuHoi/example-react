/* eslint-disable import/no-anonymous-default-export */
export default {
  API_URL: process.env.REACT_APP_BASE_URL || 'http://localhost:5000/v1',
  GOOGLE_CLIENT_ID: process.env.REACT_APP_GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET: process.env.REACT_APP_GOOGLE_CLIENT_SECRET,
  LINKED_IN_CLIENT_ID: process.env.REACT_APP_LINKED_IN_CLIENT_ID,
  LINKED_IN_CLIENT_SECRET: process.env.REACT_APP_LINKED_IN_CLIENT_SECRET,
  GITHUB_CLIENT_ID: process.env.REACT_APP_GITHUB_CLIENT_ID,
  GITHUB_CLIENT_SECRET: process.env.REACT_APP_GITHUB_CLIENT_SECRET,
  HOME: process.env.REACT_APP_HOME,
}
