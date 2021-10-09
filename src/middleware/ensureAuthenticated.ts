import { NextFunction, Request, Response } from "express";
import {verify} from 'jsonwebtoken';

export function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {
  const authToken = request.headers.authorization;

  if(!authToken) {
    return response.status(401).json({
      message: 'Token is missing'
    });
  }

  // Bearer 124124213e3eadasf31r3

  const [, token] = authToken.split(" ");

  try {
    verify(token, "166b71a1-bbf8-4d89-b0ab-0478236a7eda");

    return next();
  }
  catch (err){
    return response.status(401).json({
      message: 'Token invalid'
    });
  }
}