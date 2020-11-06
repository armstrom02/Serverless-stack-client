export default {
    MAX_ATTACHMENT_SIZE: 5000000,
    s3: {
        REGION: "us-east-2",
        BUCKET: "notes-app-vivek"
    },
    apiGateway: {
        REGION: "us-east-2",
        URL: "https://5cmtuejiki.execute-api.us-east-2.amazonaws.com/prod"
    },
    cognito: {
        REGION: "us-east-2",
        USER_POOL_ID: "us-east-2_KVcpswXsO",
        APP_CLIENT_ID: "74cjvsjj16abpuhkfjpblrb6j4",
        IDENTITY_POOL_ID: "us-east-2:55c5397e-ac46-4705-bd12-17306b6156f4"
    },
    STRIPE_KEY: "pk_test_Dys9puapakNqonoQdfTQj5IL00uEFRuiGk",
};