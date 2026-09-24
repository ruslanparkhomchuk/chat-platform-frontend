import { getToken } from "./token";

export async function commonFetch(input: RequestInfo, init: RequestInit = {}) {
	return fetch(input, {
		...init,
		credentials: "include",
		headers: {
			...(init.headers || {}),
			authorization: getToken(),
		},
	});
}
