import express from 'express';
import helper from '../helper';
import service from './promotional.service';

const router = new express.Router();

router.post('/', helper.asyncMiddleware(async (req, res) => {
  await service.createPromotion(req, res);
}));

export default router;
