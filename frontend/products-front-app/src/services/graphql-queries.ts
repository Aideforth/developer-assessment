import { gql } from "@apollo/client";

export const GET_PRODUCTS = gql`
query {
  allProducts {
    id
    name
    description
    sku
    price
    image
  }
}
`;