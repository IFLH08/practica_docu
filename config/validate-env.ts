import { z } from 'zod';
import dotenv from 'dotenv';

dotenv.config();

const envSchema = z.object({
  VITE_APP_NAME: z.string().min(1, 'Falta VITE_APP_NAME'),
  VITE_PORT: z.string().regex(/^\d+$/, 'El puerto debe ser un n�mero'),
  VITE_NODE_ENV: z.string().min(1),
  DB_PASSWORD: z.string().min(5, 'El password debe tener al menos 5 caracteres'),
  API_KEY: z.string().min(1, 'Falta la API_KEY'),
});

try {
  envSchema.parse(process.env);
  console.log(' Variables de entorno validadas correctamente.');
} catch (error) {
  console.error(' Error crtico: Faltan variables de entorno o son invlidas.');
  if (error instanceof z.ZodError) {
    console.error(error.errors.map(e => '- ' + e.message).join('\n'));
  }
  process.exit(1);
}
