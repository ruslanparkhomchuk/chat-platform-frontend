import { getToken } from "./token";

export async function commonFetch(input: RequestInfo, init: RequestInit = {}) {
	return fetch(input, {
		...init,
		headers: {
			...(init.headers || {}),
			authorization: getToken(),
		},
	});
}
