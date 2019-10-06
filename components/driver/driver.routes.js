import express from 'express';
import helper from '../helper';
import ctrl from './driver.controller';
import ctrlAccount from './bank-account/bank-account.controller';

const router = new express.Router();

router.post('/register', helper.asyncMiddleware(async (req, res) => {
  await ctrl.registerDriver(req, res);
}));

router.get('/get-location', helper.asyncMiddleware(async (req, res) => {
  await ctrl.getLocation(req, res);
}));

router.post('/set-location', helper.asyncMiddleware(async (req, res) => {
  await ctrl.setLocation(req, res);
}));

router.post('/bank/add-account', helper.asyncMiddleware(async (req, res) => {
  await ctrlAccount.addAccount(req, res);
}));

router.get('/get-model-types', helper.asyncMiddleware(async (req, res) => {
  await ctrl.getModelTypes(req, res);
}));

export default router;
