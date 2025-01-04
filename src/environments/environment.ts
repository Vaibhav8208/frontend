// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiUrl: "http://localhost:8080/api",
 twilio: {
    accountSid: 'AC4a501f2f526aed532865420e09cecf2f',     // Replace with your Twilio SID
    authToken:'fe815941c2db48e55054a47558de9496',       // Replace with your Twilio Auth Token
    phoneNumber:  '+18302613167',  // Replace with your Twilio phone number
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
