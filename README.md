# open search sdk
_minimalistic open search sdk_

This is actively developed and **not** production ready. <br>
Use at your own risk.

### example

```ts
import { Client, SearchCommand } from '@tobiklee/open-search-sdk';

const search = async () => {
	// replace values
    const id = '<awsAccessKeyId>';
    const key = '<awsSecretAccessKey>';
    const endpoint = '<url>';

    const client = new Client({
        endpoint,
		// remove or change options
        fetchOptions: {
            signOptions: {
                region: 'eu-central-1',
                accessKeyId: id,
                secretAccessKey: key,
                service: 'es',
            },
        },
    });
    try {
        const response = await client.execute(new SearchCommand({
            index: '<indexName>',
            query: {
                match: {
                    fieldName: '<value>',
                },
            },
        }));
        console.info('response', response);
    } catch (e) {
        console.error('request failed', JSON.stringify(e, null, 2));
    }
};

search();
```
