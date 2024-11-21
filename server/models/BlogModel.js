// Importar la base de datos
import db from '../database/db.js';

// Importar Sequelize
import { DataTypes } from 'sequelize';

// Definir el modelo Blog
const BlogModel = db.define('blogs', {
    title: {
        type: DataTypes.STRING,
        allowNull: false,  
    },
    content: {
        type: DataTypes.STRING,
        allowNull: false,  
    },
}, 
);

export default BlogModel;
