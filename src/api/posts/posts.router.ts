import bodyParser from "body-parser";
import express from "express";
import { createPost } from "./posts.controller";
export const router = express.Router();

router.use(bodyParser.json());

/**
 * @swagger
 * /api/posts:
 *   post:
 *     summary: Create a new post
 *     description: Create a new post with a title and content
 *     tags:
 *       - posts
 *     parameters:
 *       - name: post
 *         in: body
 *         description: The post object
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             title:
 *               type: string
 *             content:
 *               type: string
 *           example:
 *             title: My First Post
 *             content: This is the content of my first post.
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 title:
 *                   type: string
 *                 content:
 *                   type: string
 *               example:
 *                 id: 1
 *                 title: My First Post
 *                 content: This is the content of my first post.
 */
