import { Injectable } from '@angular/core';
import { Playlist } from '../app/playlist';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  playlists: Playlist[];
  url: string;
  httpOptions: object;
  genData: any;
  constructor(private http: HttpClient, private toastr: ToastrService) {
    this.playlists = [];
    this.url = 'http://localhost:3000/playlists';
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
  }

  fetchplaylist() {
    this.http.get<Playlist[]>(this.url).subscribe((playlists: Playlist[]) => {
      //debugger;
      this.playlists = playlists;
    });
  }

  addSongs(title: any, duration: any, gen: any) {
    if(gen.slow){
      var slow = 'slow';
    } else {
      var slow = '';
    }
    if(gen.romance){
      var romance = 'romance';
    } else {
      var romance = '';
    }
    if(gen.remixed){
      var remixed = 'remixed';
    } else {
      var remixed = '';
    }
    this.genData = slow+','+romance+','+remixed; 
    const playlist: Playlist = new Playlist(title, duration, this.genData);
    this.http.post<Playlist>(this.url, {
      title: playlist.title,
      duration: playlist.duration,
      gen: playlist.gen
    }, this.httpOptions).subscribe((playlist: Playlist) => {
      this.playlists.push(playlist);
    });  
    // debugger;
  }


  removePlaylist(id){
    this.http.delete(this.url+'/'+id).subscribe((playlists: Playlist[]) => {
     // debugger;
     this.toastr.success('Playlist Deleted Successfully!!', 'Alert');
    this.fetchplaylist();
    });
  }
  // addSongs(title: any, duration: any, gen: any): Playlist {
  //   const playlist: Playlist = new Playlist(title, duration, gen);
  //   this.http.post<Playlist>(this.url, playlist, this.httpOptions).subscribe((playlist: Playlist) => {
  //     this.playlists.push(playlist);
  //   });  
  //   // debugger;
  //   return playlist;
  // }
}
