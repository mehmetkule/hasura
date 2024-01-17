import { Controller, Get } from '@nestjs/common';
import { ApolloService } from './hasura.service';
import { checkEmailQueries } from '../queries/queries';

@Controller('hasura')
export class HasuraController {
  constructor(private readonly apolloService: ApolloService) {}

  @Get()
  async getDataFromHasura() {
    try {
      const { data } = await this.apolloService.client.query({
        query: checkEmailQueries,
      });

      return data.query;
    } catch (error) {
      // Handle errors
      console.error('Error:', error.message);
      throw new Error('Failed to fetch data from Hasura');
    }
  }
}
