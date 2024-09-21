import joi from "joi";

const teamIdParam = joi.object({
  teamId: joi.number().positive().integer().required(),
});

const teamIdBody = joi.object({
  enemyTeamId: joi.number().positive().integer().required(),
});

// 이거 얘기해보자
const teamInfoBody = joi.object({
  userPlayerId: joi.number().positive().integer().required(),
  position: joi.number().min(1).max(3).integer(),
});

export async function teamIdParamValidate(params) {
  return await teamIdParam.validateAsync(params);
}

export async function teamIdBodyValidate(body) {
  return await teamIdBody.validateAsync(body);
}

export async function teamInfoBodyValidate(body) {
  return await teamInfoBody.validateAsync(body);
}
