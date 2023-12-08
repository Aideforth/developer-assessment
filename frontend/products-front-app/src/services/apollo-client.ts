import { ApolloClient, InMemoryCache } from "@apollo/client";

const gqlClient = new ApolloClient({
    uri: process.env.REACT_APP_GRAPH_QL_BASE_URL,
    cache: new InMemoryCache(),
});

export default gqlClient;