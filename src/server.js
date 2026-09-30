import { app } from './app.js';
import dotenv from 'dotenv';

dotenv.config();
const PORT = process.env.PORT || 8080;

console.log('Aplicación inicializada');

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});


