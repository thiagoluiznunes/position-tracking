import express from 'express';
import helper from '../helper';
import ctrl from './order.controller';

const router = new express.Router();

router.post('/create', helper.asyncMiddleware(async (req, res) => {
  await ctrl.createOrder(req, res);
}));

router.get('/get-model-types', helper.asyncMiddleware(async (req, res) => {
  await ctrl.getModelTypes(req, res);
}));

export default router;
