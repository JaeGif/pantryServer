import express, { NextFunction, Request, Response } from 'express';
import { prisma } from '../utils/prisma.service'; // current client

export const pantry_get = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const pantry = await prisma.pantry.findFirst({
      where: { id: req.params.id },
    });
    return res.json({ pantry }).status(200);
  } catch (error) {
    console.error(error);
    res.sendStatus(404);
  }
};

export const pantries_get = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const pantries = await prisma.user.findMany({});
    res.json({ pantries }).status(200);
  } catch (error) {
    console.error(error);
    res.sendStatus(404);
  }
};

export const pantry_put = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // params to put
  try {
    const pantry = await prisma.pantry.update({
      where: { id: req.params.id },
      data: {
        /* TBD */
      },
    });
    return res.json({ pantry }).status(200);
  } catch (error) {
    console.error(error);
    res.sendStatus(404);
  }
};

export const pantry_delete = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const pantry = await prisma.pantry.delete({ where: { id: req.params.id } });
    return res.json({ pantry }).status(200);
  } catch (error) {
    console.error(error);
    res.sendStatus(404);
  }
};
