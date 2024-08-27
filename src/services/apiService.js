// const axios = require("axios");
import axios from "axios";

async function fetchDataFromAPI() {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    return response.data;
  } catch (error) {
    throw new Error("Error fetching data from API");
  }
}

export { fetchDataFromAPI };
