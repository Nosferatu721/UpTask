import type { Request, Response } from 'express';
import Project from '../models/Proejct';

export class ProjectController {
  static createProject = async (req: Request, res: Response) => {
    console.log(req.body);
    const project = new Project(req.body);

    try {
      await project.save();
      res.send('Proyecto Creado Correctamente');
    } catch (error) {
      console.log(error);
    }
  };

  static getAllProjects = async (req: Request, res: Response) => {
    try {
      const projects = await Project.find({});
      res.json(projects);
    } catch (error) {
      console.log(error);
    }
  };

  static getProjectById = async (req: Request, res: Response) => {
    try {
      const projects = await Project.find({});
      res.json(projects);
    } catch (error) {
      console.log(error);
    }
  };
}
