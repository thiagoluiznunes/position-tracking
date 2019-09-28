import express from 'express';
import helper from '../helper';
import service from './promotional.service';

const router = new express.Router();

router.post('/create', helper.asyncMiddleware(async (req, res) => {
  await service.createPromotionalCode(req, res);
}));

router.post('/validate', helper.asyncMiddleware(async (req, res) => {
  await service.validatePromotionalCode(req, res);
}));

export default router;
