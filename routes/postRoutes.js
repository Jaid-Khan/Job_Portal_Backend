const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware");

const {
  createPost,
  getAllPosts,
  getPost,
  updatePost,
  deletePost,
} = require("../controllers/postController");

// CRUD APIs
router.post("/", protect, createPost);
router.get("/", getAllPosts);
router.get("/:id", getPost);
router.put("/:id", protect, updatePost);
router.delete("/:id", protect, deletePost);

module.exports = router;