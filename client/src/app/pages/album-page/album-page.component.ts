import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ArtistData } from "../../data/artist-data";
import { TrackData } from "../../data/track-data";
import { AlbumData } from "../../data/album-data";
import { SpotifyService } from "src/app/services/spotify.service";

@Component({
  selector: "app-album-page",
  templateUrl: "./album-page.component.html",
  styleUrls: ["./album-page.component.css"],
})
export class AlbumPageComponent implements OnInit {
  albumId: string;
  album: AlbumData;
  tracks: TrackData[];
  link: string = "https://open.spotify.com/embed/album/3SpBlxme9WbeQdI9kx7KAV";

  constructor(private route: ActivatedRoute, private service: SpotifyService) {}

  ngOnInit() {
    this.albumId = this.route.snapshot.paramMap.get("id");
    //TODO: inject spotifyService and use it to get the album data and the tracks for the album
    this.service.getAlbum(this.albumId).then((r) => {
      this.album = r;
    });
    this.service.getTracksForAlbum(this.albumId).then((r) => {
      this.tracks = r;
    });
    //this.link = "https://open.spotify.com/embed/album/3SpBlxme9WbeQdI9kx7KAV";
    //this.link = "https://open.spotify.com/embed/album/" + this.album.id;
  }
}
