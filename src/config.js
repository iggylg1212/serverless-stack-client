const config = {
    s3: {
      REGION: "us-east-1",
      BUCKET: "notes-app-upload1212",
    },
    apiGateway: {
      REGION: "us-east-1",
      URL: "https://q45gucd6z7.execute-api.us-east-1.amazonaws.com",
    },
    cognito: {
      REGION: "us-east-1",
      USER_POOL_ID: "us-east-1_nn6VRVURE",
      APP_CLIENT_ID: "5je8emr09n9cmmi3pjg2b4krho",
      IDENTITY_POOL_ID: "us-east-1:2e9c910f-5f41-4b76-aff6-ad2331f0fc40",
    },
  };
  
  export default config;