const express = require("express");
const router = express.Router();
const axios = require("axios");
const dotenv = require("dotenv");
dotenv.config();

const BASE_URL = process.env.BASE_API_URL;
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzQ0NzA0NjM0LCJpYXQiOjE3NDQ3MDQzMzQsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjEwMDQzMTRlLTQ5ZTAtNDdkMC1iMzYzLTUxMDk4OTA1NTA0YSIsInN1YiI6ImFtYW4xMDQ2LmJlMjJAY2hpdGthcmF1bml2ZXJzaXR5LmVkdS5pbiJ9LCJlbWFpbCI6ImFtYW4xMDQ2LmJlMjJAY2hpdGthcmF1bml2ZXJzaXR5LmVkdS5pbiIsIm5hbWUiOiJhbWFuIGt1bWFyIGd1cHRhIiwicm9sbE5vIjoiMjIxMTk4MTA0NiIsImFjY2Vzc0NvZGUiOiJQd3p1ZkciLCJjbGllbnRJRCI6IjEwMDQzMTRlLTQ5ZTAtNDdkMC1iMzYzLTUxMDk4OTA1NTA0YSIsImNsaWVudFNlY3JldCI6Im5RV0FFcGR3a3RkZ1dkYnMifQ.vj8YmfsjdljY2RTgRb1ob7KXMPxlaXnx4RYp-39y4f8"

router.get("/users", async (req, res) => {
  try {
    const response = await axios.get(`${BASE_URL}/users`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching users:", error.message);
    res.status(500).json({ error: error });
  }
});

router.get("/users/:userId/posts", async (req, res) => {
  const { userId } = req.params;
  try {
    const response = await axios.get(`${BASE_URL}/users/${userId}/posts`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching posts:", error.message);
    res.status(500).json({ error: "Failed to fetch posts" });
  }
});

router.get("/posts/:postId/comments", async (req, res) => {
  const { postId } = req.params;
  try {
    const response = await axios.get(`${BASE_URL}/posts/${postId}/comments`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching comments:", error.message);
    res.status(500).json({ error: "Failed to fetch comments" });
  }
});

module.exports = router;