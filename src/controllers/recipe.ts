import express, { NextFunction, Request, Response } from 'express';
import { prisma } from '../utils/prisma.service'; // current client

export const recipe_get = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const recipe = await prisma.recipe.findFirst({
      where: { id: req.params.id },
    });
    return res.json({ recipe }).status(200);
  } catch (error) {
    console.error(error);
    res.sendStatus(404);
  }
};

export const recipes_get = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const recipes = await prisma.user.findMany({});
    res.json({ recipes }).status(200);
  } catch (error) {
    console.error(error);
    res.sendStatus(404);
  }
};

export const recipe_put = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // params to put
  try {
    const recipe = await prisma.recipe.update({
      where: { id: req.params.id },
      data: {
        /* TBD */
      },
    });
    return res.json({ recipe }).status(200);
  } catch (error) {
    console.error(error);
    res.sendStatus(404);
  }
};

export const recipe_delete = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const recipe = await prisma.recipe.delete({
      where: { id: req.params.id },
    });
    return res.json({ recipe }).status(200);
  } catch (error) {
    console.error(error);
    res.sendStatus(404);
  }
};
