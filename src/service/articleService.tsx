import axios from "axios";
import Article from "../interface/Article";


export async function fetchArticles(): Promise<Article[]> {
  try {
    const response = await axios.get<Article[]>("http://localhost:5000/api/v1/Article");
    return response.data;
  } catch (error) {
    console.error("Error fetching articles:", error);
    throw error;
  }
}
