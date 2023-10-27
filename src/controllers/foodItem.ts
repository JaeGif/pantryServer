import express, { NextFunction, Request, Response } from 'express';
import { prisma } from '../utils/prisma.service'; // current client

export const foodItem_get = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const foodItem = await prisma.foodItem.findFirst({
      where: { id: req.params.id },
    });
    return res.json({ foodItem }).status(200);
  } catch (error) {
    console.error(error);
    res.sendStatus(404);
  }
};

export const foodItems_get = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const foodItems = await prisma.user.findMany({});
    res.json({ foodItems }).status(200);
  } catch (error) {
    console.error(error);
    res.sendStatus(404);
  }
};

export const foodItem_put = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // params to put
  try {
    const foodItem = await prisma.foodItem.update({
      where: { id: req.params.id },
      data: {
        /* TBD */
      },
    });
    return res.json({ foodItem }).status(200);
  } catch (error) {
    console.error(error);
    res.sendStatus(404);
  }
};

export const foodItem_delete = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const foodItem = await prisma.foodItem.delete({
      where: { id: req.params.id },
    });
    return res.json({ foodItem }).status(200);
  } catch (error) {
    console.error(error);
    res.sendStatus(404);
  }
};
