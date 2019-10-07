import express from 'express';
import helper from '../helper';
import ctrl from './plate.controller';

const router = new express.Router();

router.get('/get-model-types', helper.asyncMiddleware(async (req, res) => {
  await ctrl.getModelTypes(req, res);
}));

export default router;
