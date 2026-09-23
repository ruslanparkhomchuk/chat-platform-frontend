import { useQuery } from "@apollo/client/react";
import { graphql } from "../gql";

const getMeDocument = graphql(`
	query Me {
		me {
			...UserFragment
		}
	}
`);

function useGetMe() {
	return useQuery(getMeDocument);
}

export { useGetMe };
