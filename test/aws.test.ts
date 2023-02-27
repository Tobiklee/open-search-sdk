import * as config from './test-env.json';
import * as aws from '../src/aws';

const {
  Service,
  Region,
  SecretAccessKey,
  AccessKeyId,
  URL,
} = config;

const signature = () => aws.createSignature({
  service: Service,
  region: Region,
  accessKeyId: AccessKeyId,
  secretAccessKey: SecretAccessKey,
});

const signedRequest = async () => aws.createSignedRequest({
  method: 'POST',
  url: URL,
  body: {
    query: {
      match: {
        Type: 'USER',
      },
    },
  },
  signature: signature(),
});

describe('aws', () => {
  test('create signature', () => {
    expect(signature()).toBeTruthy();
  });

  test('create signed request', async () => {
    const request = await signedRequest();
    expect(request.headers['x-amz-date']).toBeTruthy();
    expect(request.headers['x-amz-content-sha256']).toBeTruthy();
    expect(request.headers.authorization).toBeTruthy();
  });

  xtest('create axios request', async () => {
    const axiosRequest = await aws.toAxios(await signedRequest(), URL);
    expect(axiosRequest.status).toBe(200);
  });
});
