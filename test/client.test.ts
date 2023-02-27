import * as config from './test-env.json';
import { Client, SearchCommand } from '../src';

const {
  Service,
  Region,
  SecretAccessKey,
  AccessKeyId,
  URL,
  Index,
} = config;

xdescribe('client', () => {
  test('client with signed search request', async () => {
    const client = new Client({
      endpoint: URL,
      fetchOptions: {
        signOptions: {
          accessKeyId: AccessKeyId,
          secretAccessKey: SecretAccessKey,
          region: Region,
          service: Service,
        },
      },
    });
    const response = await client.execute(new SearchCommand({
      query: {
        match: {
          Type: 'USER',
        },
      },
      index: Index,
    }));
    console.info(response);
  });
});
