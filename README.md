# Spotify Browser

## App features

### Home

On the inital page, you can log in to your Spotify account and load some basic info from your Spotify profile.

![image info](media/home.png)

### Search

Once you have logged in, you can search up different Spotify artists, albums, and tracks. Here is an example:

![image info](media/demo1.gif)

### Artist, Album, and Track Pages

Finally, you can click on any of the search results to view that artist, album, or track in more detail. Here are some demos:

![image info](media/demo2.gif)

![image info](media/demo3.gif)

## How to Run Code

First, go to https://developer.spotify.com/dashboard and create an app.

Next, go to the app settings and add http://localhost:8888/callback as a redirect URI.

Now your Spotify app is ready to go. Once you clone the repository, you are going to need to create two files called client_secret.json and tokens.json.

client_secret.json - add your own credentials

```json
{
  "client_id": "Your Client Key",
  "client_secret": "Your Client Secret"
}
```

tokens.json - leave this file as is

```json
{
  "access_token": null,
  "refresh_token": null
}
```

Then, you need to install the Angular CLI.

```sh
npm install -g @angular/cli
```

Next, start the webserver

```sh
cd webserver
npm start
```

Finally, run the client

```sh
cd client
ng serve
```
