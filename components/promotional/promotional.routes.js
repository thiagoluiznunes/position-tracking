import express from 'express';
import helper from '../helper';
import ctrl from './promotional.controller';

const router = new express.Router();

router.post('/create', helper.asyncMiddleware(async (req, res) => {
  await ctrl.createPromotionalCode(req, res);
}));

router.post('/validate', helper.asyncMiddleware(async (req, res) => {
  await ctrl.validatePromotionalCode(req, res);
}));

export default router;
