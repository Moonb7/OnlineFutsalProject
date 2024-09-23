import joi from "joi";

const upgradeParam = joi.object({
  playerId: joi.number().positive().integer().required(),
});

const upgradeBody = joi.object({
  upgradeLevel: joi.number().min(0).max(3).integer().required(),
  materialPlayerId: joi.number().positive().integer(),
});

export async function upgradeParamValidate(param) {
  return await upgradeParam.validateAsync(param);
}

export async function upgradeBodyValidate(body) {
  return await upgradeBody.validateAsync(body);
}
