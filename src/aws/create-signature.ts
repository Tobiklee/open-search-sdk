import { Sha256 } from '@aws-crypto/sha256-js';
import { SignatureV4 } from '@aws-sdk/signature-v4';

export type CreateSignatureProps = {
  service: string;
  region: string;
  accessKeyId: string;
  secretAccessKey: string;
  sessionToken?: string;
}

export const createSignature = (props: CreateSignatureProps): SignatureV4 => {
  const {
    service,
    region,
    accessKeyId,
    secretAccessKey,
    sessionToken,
  } = props;
  return new SignatureV4({
    service,
    region,
    credentials: {
      accessKeyId,
      secretAccessKey,
      sessionToken,
    },
    sha256: Sha256,
  });
};
