Recently I had to add Single Sign On **- SSO -** in a frontend project at work. I had absolutely no idea what OAuth is. I had to learn about it and I am here to share what I learned 😊

## What is OAuth

Well, lets start with the basics. OAuth stands for Open Authentication. It’s first version, **OAuth 1.0** was designed to handle the **Delegated authorization** problem. Imagine you need to let some service ‘X’ access some of your data located in service 'Y'. Before OAuth, You would have to give the password of service Y to service X. That bad! You are not just giving them access to some data. You are giving them full control of your account. Without a doubt, we needed a better way! ✋

Thats where **OAuth 1.0** protocol came in, It handled that problem by allowing service X to get access to certain data in service Y without compromising your password. 💪

Lets start by some terminology, just to make it clear for the rest of this post. These are also the different roles in an OAuth protocol.

- **Resource owner** : Thats basically you, you own the data in the resource server
- **Client** : Thats service X. In other words, The application that wants to access a resource in the resource server
- **Authorization server** : This server is responsible for authorizing access to the resource.
- **Resource server** : Thats service Y, In other words, The application that contains the resource.
- **Resource / Scope** : The requested resource. Could be some data, could be a permission to do some action.

Note that both the authorization server and resource server could be the same application, or they could be totally different ones.

## OAuth Flow ( authorization code type )

I created this diagram that shows the whole OAuth flow, have a quick look at it and we will go over every step after the diagram.

[](https://www.notion.so/c6e13afb485b44f1ab0e6ce0aeeaa0a7#4955a50f38cc4add8881e8c91969174d)

Is it overwhelming ? Maybe I am not that good with diagrams 🙄. Don’t worry, Let’s take this one step at a time.

Let’s do this with an example. Lets say that you want to create a Spotify account, But let’s face it. You are too lazy to add all your information 😞. You want Facebook to fill it all for you. So you clicked on that sign-up with facebook button. Let’s pause here and analyze this for a bit.

What is happening here ? According to OAuth terminology, Who’s whom ?

- The **resource / scope** is your profile information, the data that Spotify needs from facebook to sign you up.
- The **resource owner** is _you_ obviously 😒.
- _Spotify_ is the **client** application.
- _Facebook_ is acting as both the **resource server and the authorization server**.

Hold on! Before we dig into the diagram, OAuth depends on a one-time initial configuration step. Basically it is a way for the auth server to identify which client app is asking for the authorization. The auth server generates a client id and a client secret, both are unique to this client. They are then saved in the client, used in the next steps and must be kept secret.

Also each client needs to specify a redirect-url. This url is used by the auth server during the OAuth flow.

With that said, Lets dig into that diagram.

- **First of,** Clicking on “Sign up with facebook” button will redirect you to a login page from the auth server.
  - This step requires two parameters the client id and the scope.
  - The **client id** is used by the auth server to identify which client is requesting permission.
  - The **scope** is used to identify which data/permissions are being requested.
- **After Logging in,** The auth server will display the consent screen to the user
  - The consent screen asks the resource owner if he would allow the client to have access to data/permissions defined in the scope
- **Granting the permission,** The auth server will direct the browser to the redirect-url passing along the authorization code in the query params
- **Having the code,** The client would need to exchange the code and the client secret with the access token
- **Having the access token,** The client could finally access the resource from the resource server

Super cool! But, Why do we need that extra step where we exchange the authorization code with the access token ? Why don’t we just get the access token directly ? **Well,** It’s a security measure, It ensures that the access token is not exposed in the params of the redirect url. **Ummm,** But couldn’t a man in the middle just grab the authorization code somehow and beat the client to the exchange with the token ? **No,** because this exchange also requires the client secret, which is only known by the client application and the authorization server.

This flow is called the authorization code flow, there exists other types. Also, OAuth was misused after its initial release. Thats why there was a need for OAuth 2.0 and OpenID connect. I may talk more about this In a future post. 😌

If you liked this blog post. Please let me know and spread the word!

As always,

**Happy coding 🔥🔥**

“**كود بسعادة”**
