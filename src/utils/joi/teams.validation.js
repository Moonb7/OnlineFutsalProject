import joi from "joi";

const teamIdParam = joi.object({
  teamId: joi.number().positive().integer().required(),
});

const teamIdOptionalParam = joi.object({
  teamId: joi.number().positive().integer(),
});

const teamIdBody = joi.object({
  enemyTeamId: joi.number().positive().integer().required(),
});

// 팀 선수 선발 등록 body
const teamInfoBody = joi.object({
  userPlayerId: joi.number().positive().integer().required(),
  position: joi.number().min(1).max(3).integer().required(),
});

// 팀 선수 후보 등록 body
const positionBody = joi.object({
  position: joi.number().min(1).max(3).integer().required(),
});

export async function teamIdParamValidate(params) {
  return await teamIdParam.validateAsync(params);
}

export async function teamIdOptionalParamValidate(params) {
  return await teamIdOptionalParam.validateAsync(params);
}

export async function teamIdBodyValidate(body) {
  return await teamIdBody.validateAsync(body);
}

export async function teamInfoBodyValidate(body) {
  return await teamInfoBody.validateAsync(body);
}

export async function positionBodyValidate(body) {
  return await positionBody.validateAsync(body);
}
