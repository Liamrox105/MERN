// Importar el modelo
import BlogModel from "../models/BlogModel.js";

// **Métodos para el CRUD**

// **Mostrar todos los registros**
export const getAllBlogs = async (req, res) => {
    try {
        const blogs = await BlogModel.findAll();
        res.json(blogs);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// **Mostrar un registro por ID**
export const getBlog = async (req, res) => {
    try {
        const blog = await BlogModel.findAll({ 
            where: { id: req.params.id } 
        })
        if (blog) {
            res.json(blog[0]);
        } else {
            res.status(404).json({ message: "Registro no encontrado" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// **Crear un registro**
export const createBlog = async (req, res) => {
    try {
        await BlogModel.create(req.body);
        res.status(201).json({ message: "Registro creado correctamente!" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// **Actualizar un registro**
export const updateBlog = async (req, res) => {
    try {
        const [updated] = await BlogModel.update(req.body, { 
            where: { id: req.params.id },
        });
        if (updated) {
            res.json({ message: "Registro actualizado correctamente!" });
        } else {
            res.status(404).json({ message: "Registro no encontrado" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// **Eliminar un registro**
export const deleteBlog = async (req, res) => {
    try {
        const deleted = await BlogModel.destroy({
            where: { id: req.params.id },
        });
        if (deleted) {
            res.json({ message: "Registro eliminado correctamente!" });
        } else {
            res.status(404).json({ message: "Registro no encontrado" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
