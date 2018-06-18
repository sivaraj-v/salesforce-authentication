
// // Username and Password Login
// var jsforce = require('jsforce');
// var conn = new jsforce.Connection({
//   // you can change loginUrl to connect to sandbox or prerelease env.
//    loginUrl : 'https://test.salesforce.com'
// });
// conn.login('test-dt3gldnzeagq@example.com', 'wh]x2)[XF8w2jc5ABXD3RS7nrVEv111VstQ', function(err, userInfo) {
//   if (err) { return console.error(err); }
//   // Now you can get the access token and instance URL information.
//   // Save them to establish connection next time.
//   console.log(conn.accessToken);
//   console.log(conn.instanceUrl);
//   // logged in user property
//   console.log("User ID: " + userInfo.id);
//   console.log("Org ID: " + userInfo.organizationId);
//   // ...
// });

var jsforce = require('jsforce');
var conn = new jsforce.Connection({
  oauth2 : {
    // you can change loginUrl to connect to sandbox or prerelease env.
    loginUrl : 'https://test.salesforce.com',
    clientId : '3MVG92u_V3UMpV.hQHi5jeUtfhql5voQwOPh.JE0fpg.IKDqTrqxKB1.oIJWnEP_K55QeciYkkEsijuVGwISx',
    clientSecret : '535823897945177751',
    redirectUri : 'http://localhost:8080'
  }
});
conn.login('test-dt3gldnzeagq@example.com', 'wh]x2)[XF8w2jc5ABXD3RS7nrVEv111VstQ', function(err, userInfo) {
  if (err) { return console.error(err); }
  // Now you can get the access token and instance URL information.
  // Save them to establish connection next time.
  console.log(conn.accessToken);
  console.log(conn.instanceUrl);
  // logged in user property
  console.log("User ID: " + userInfo.id);
  console.log("Org ID: " + userInfo.organizationId);

  conn.chatter.resource('/users/me').retrieve(function(err, res) {
    if (err) { return console.error(err); }
    console.log("username: "+ res.username);
    console.log("email: "+ res.email);
    console.log("small photo url: "+ res.photo.smallPhotoUrl);
  });
});
