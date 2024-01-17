import { Injectable } from '@nestjs/common';
import { ApolloClient, InMemoryCache } from '@apollo/client';

@Injectable()
export class ApolloService {
  public readonly client: ApolloClient<any>;

  constructor() {
    this.client = new ApolloClient({
      uri: 'https://smiling-robin-94.hasura.app/v1/graphql',
      cache: new InMemoryCache(),
    });
  }
}
