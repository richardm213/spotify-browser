# Spotify Browser

## App features

### Home

On the inital page, you can log in to your Spotify account and load some basic info from your Spotify profile.

<img width="700" alt="home" src="https://user-images.githubusercontent.com/92076990/190880512-efd34f25-f4c4-4793-a7b8-63bce1f139ff.png">

### Search

Once you have logged in, you can search up different Spotify artists, albums, and tracks. Here is an example:

<img width="700" alt="Screen Shot 2022-09-14 at 6 36 34 PM" src="https://user-images.githubusercontent.com/92076990/190880744-2381e012-6a16-4a16-b8e8-92b8d91e3f22.png">

### Artist, Album, and Track Pages

Finally, you can click on any of the search results to view that artist, album, or track in more detail. Here is an example of an album page:

<img width="700" alt="Screen Shot 2022-09-17 at 5 39 38 PM" src="https://user-images.githubusercontent.com/92076990/190880771-ce13b65a-c6db-466c-883a-0a1aff87f7ae.png">

## Demo

## How to Run Code

First, go to https://developer.spotify.com/dashboard and create an app.

<img width="650" alt="Screen Shot 2022-09-17 at 5 14 30 PM" src="https://user-images.githubusercontent.com/92076990/190880524-7c247f1c-58d9-41d7-a4e3-20b8a42376ad.png">

Next, go to the app settings and add http://localhost:8888/callback as a redirect URI.

<img width="355" alt="Screen Shot 2022-09-17 at 5 15 36 PM" src="https://user-images.githubusercontent.com/92076990/190880486-416872d4-ec12-4ff2-b1ae-0d45d2fc971a.png">

Now your Spotify app is ready to go. Once you clone the repository, you are going to need to create two files in the webserver folder called client_secret.json and tokens.json.

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
