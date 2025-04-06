"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class StatusCode {
}
StatusCode[200] = {
    code: 200,
    message: "Request successfully processed.",
};
StatusCode[201] = {
    code: 201,
    message: "Resource successfully created.",
};
StatusCode[202] = {
    code: 202,
    message: "Request accepted but not yet processed.",
};
StatusCode[204] = {
    code: 204,
    message: "Request successfully processed, no content to return.",
};
StatusCode[400] = {
    code: 400,
    message: "Bad request, please check the input.",
};
StatusCode[401] = {
    code: 401,
    message: "Unauthorized, please login first.",
};
StatusCode[403] = {
    code: 403,
    message: "Forbidden, you do not have access to this resource.",
};
StatusCode[404] = {
    code: 404,
    message: "Resource not found.",
};
StatusCode[500] = {
    code: 500,
    message: "Internal server error.",
};
StatusCode[503] = {
    code: 503,
    message: "Service unavailable, please try again later.",
};
StatusCode[504] = {
    code: 504,
    message: "Gateway timeout, please try again later.",
};
exports.default = StatusCode;
