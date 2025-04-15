const express = require("express");
const router = express.Router();
const axios = require("axios");

const BASE_URL = process.env.BASE_API_URL;

router.get("/users", async (req, res) => {
  try {
    const response = await axios.get(`${BASE_URL}/users`);
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching users:", error.message);
    res.status(500).json({ error: error });
  }
});

router.get("/users/:userId/posts", async (req, res) => {
  const { userId } = req.params;
  try {
    const response = await axios.get(`${BASE_URL}/users/${userId}/posts`);
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching posts:", error.message);
    res.status(500).json({ error: "Failed to fetch posts" });
  }
});

router.get("/posts/:postId/comments", async (req, res) => {
  const { postId } = req.params;
  try {
    const response = await axios.get(`${BASE_URL}/posts/${postId}/comments`);
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching comments:", error.message);
    res.status(500).json({ error: "Failed to fetch comments" });
  }
});

module.exports = router;