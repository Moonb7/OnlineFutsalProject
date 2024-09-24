import joi from "joi";

const gachaBody = joi.object({
  gachaCount: joi.number().positive().integer().required(),
});

export async function gachaBodyValidate(body) {
  return await gachaBody.validateAsync(body);
}
