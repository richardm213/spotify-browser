import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ArtistData } from "../../data/artist-data";
import { TrackData } from "../../data/track-data";
import { AlbumData } from "../../data/album-data";
import { SpotifyService } from "src/app/services/spotify.service";

@Component({
  selector: "app-artist-page",
  templateUrl: "./artist-page.component.html",
  styleUrls: ["./artist-page.component.css"],
})
export class ArtistPageComponent implements OnInit {
  artistId: string;
  artist: ArtistData;
  relatedArtists: ArtistData[];
  topTracks: TrackData[];
  albums: AlbumData[];

  constructor(private route: ActivatedRoute, private service: SpotifyService) {}

  ngOnInit() {
    this.artistId = this.route.snapshot.paramMap.get("id");
    //TODO: Inject the spotifyService and use it to get the artist data, related artists, top tracks for the artist, and the artist's albums
    this.service.getArtist(this.artistId).then((r) => {
      this.artist = r;
    });
    this.service.getRelatedArtists(this.artistId).then((r) => {
      this.relatedArtists = r;
    });
    this.service.getTopTracksForArtist(this.artistId).then((r) => {
      this.topTracks = r;
    });
    this.service.getAlbumsForArtist(this.artistId).then((r) => {
      this.albums = r;
    });
  }
}
