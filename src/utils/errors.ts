import { CombinedGraphQLErrors } from "@apollo/client";

function extractErrorMessage(err: unknown) {
	let errorMessage: string | string[] | undefined;

	if (CombinedGraphQLErrors.is(err)) {
		const firstError = err.errors[0];
		const originalError = firstError?.extensions?.originalError as
			{ message?: string | string[] } | undefined;

		errorMessage = originalError?.message ?? firstError?.message;
	} else if (err instanceof Error) {
		errorMessage = err.message;
	}

	if (!errorMessage) {
		return;
	}
	if (Array.isArray(errorMessage)) {
		return formatErrorMessage(errorMessage[0]);
	} else {
		return formatErrorMessage(errorMessage);
	}
}

function formatErrorMessage(errorMessage: string) {
	return errorMessage.charAt(0).toUpperCase() + errorMessage.slice(1);
}

export { extractErrorMessage };
