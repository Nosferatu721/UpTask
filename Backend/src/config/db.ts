import mongoose from 'mongoose';
import { exit } from 'node:process';
import colors from 'colors';

export const connectDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.DATABASE_URL);
    console.log(colors.magenta.bold('Conectado a DB'));
  } catch (error) {
    // console.log(error.message);
    console.log(colors.red.bold('Error al conectar a MongoBD'));
    exit(1);
  }
};
