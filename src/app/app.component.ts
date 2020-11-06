import { Component } from '@angular/core';
import { Playlist } from '../app/playlist';
import { DatabaseService } from '../app/database.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  playlists: Playlist[];
  title: any;
  duration: any;
  gen: any={};
  constructor( private database: DatabaseService, private toastr: ToastrService){

  }

  addSong(){
    if(this.title == '' || this.duration == '' || this.title == null || this.duration == null){
      this.toastr.error('Please Fill all the Fields!!', 'Alert');
    } else {
      const {title, duration, gen} = this;
      this.database.addSongs(title, duration, gen);
      this.toastr.success('Playlist Added Successfully!!', 'Alert');
      this.title = null;
      this.duration = null;
      this.gen = [];
    }
  // this.playlists = [
  //   new Playlist(this.title, this.duration, this.gen)
  // ]
  //  debugger;
  }
}
