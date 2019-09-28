import express from 'express';
import helper from '../helper';
import ctrl from './driver.controller';
import ctrlAccount from './bank-account/bank-account.controller';

const router = new express.Router();

router.post('/register', helper.asyncMiddleware(async (req, res) => {
  await ctrl.registerDriver(req, res);
}));

router.post('/bank/add-account', helper.asyncMiddleware(async (req, res) => {
  await ctrlAccount.addAccount(req, res);
}));

export default router;
