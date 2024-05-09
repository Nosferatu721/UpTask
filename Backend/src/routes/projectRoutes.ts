import { Router } from 'express';
import { body } from 'express-validator';
import { ProjectController } from '../controllers/ProjectController';
import { handleInputErrores } from '../middleware/validation';

const router = Router();

router.post(
  '/',
  body('projectName').notEmpty().withMessage('El nombre del Proyecto es obligatorio'),
  body('clientName').notEmpty().withMessage('El nombre del Cliente es obligatorio'),
  body('description').notEmpty().withMessage('La description del Proyecto es obligatorio'),
  handleInputErrores,
  ProjectController.createProject
);
router.get('/', ProjectController.getAllProjects);
router.get('/:id', ProjectController.getProjectById);

export default router;
