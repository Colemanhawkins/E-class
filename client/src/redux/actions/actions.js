import * as types from './actionTypes.js';

export const createCode = (code) => ({
   type : types.CREATE_CODE,
   payload:  code
})

