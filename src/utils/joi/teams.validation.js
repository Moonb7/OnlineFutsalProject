import joi from "joi";

const teamIdParam = joi.object({
  teamId: joi.number().positive().integer().required(),
});

const teamIdBody = joi.object({
  enemyTeamId: joi.number().positive().integer().required(),
});

export async function teamIdParamValidate(params) {
  return await teamIdParam.validateAsync(params);
}

export async function teamIdBodyValidate(body) {
  return await teamIdBody.validateAsync(body);
}
