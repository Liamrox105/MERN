import express from 'express';
import { getAllBlogs, getBlog, createBlog, updateBlog, deleteBlog } from '../controllers/blogController.js';

const routes = express.Router();

// Definir las rutas para cada uno de los métodos
routes.get('/', getAllBlogs);
routes.get('/:id', getBlog);
routes.post('/', createBlog);
routes.put('/:id', updateBlog);
routes.delete('/:id', deleteBlog);

export default routes;
