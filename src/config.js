const dev = {
  s3: {
    REGION: "eu-west-1",
    BUCKET: "bensaad-notes-app-2-api-dev-attachmentsbucket-2jszw64hm6al"
  },
  apiGateway: {
    REGION: "eu-west-1",
    URL: "https://t8fgn29yxh.execute-api.eu-west-1.amazonaws.com/dev"
  },
  cognito: {
    REGION: "eu-west-1",
    USER_POOL_ID: "eu-west-1_6Vil3T8U4",
    APP_CLIENT_ID: "4etnakkngvd6sj4arsgb1hfrsr",
    IDENTITY_POOL_ID: "eu-west-1:76a837de-c00a-430e-8be6-164c58e912d8"
  },
  STRIPE_KEY: "pk_test_cGI1K0HrckrFSBzZPPNPgxs100nh0Y6qG8",
};

const prod = {
  s3: {
    REGION: "eu-west-1",
    BUCKET: "bensaad-notes-app-2-api-prod-attachmentsbucket-j81hk8rgdilt"
  },
  apiGateway: {
    REGION: "eu-west-1",
    URL: "https://662k2u9bjd.execute-api.eu-west-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "eu-west-1",
    USER_POOL_ID: "eu-west-1_tQ4HPfDOY",
    APP_CLIENT_ID: "3n4r3s6jjctgbcp6p7l6oeb1mf",
    IDENTITY_POOL_ID: "eu-west-1:1242c9f6-1d0f-4aa9-baca-7bf03a35d665"
  },
  STRIPE_KEY: "pk_test_cGI1K0HrckrFSBzZPPNPgxs100nh0Y6qG8",
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};
