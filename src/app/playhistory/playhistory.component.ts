import { Component, Input, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-playhistory',
  templateUrl: './playhistory.component.html',
  styleUrls: ['./playhistory.component.scss']
})
export class PlayhistoryComponent implements OnInit {

  @Input()
  gettitle: any;

  @Input()
  getduration: any;

  @Input()
  getgen: any={};
  constructor(public database: DatabaseService) {

   }

  ngOnInit(): void {
    //for fetch playlist from service
    this.fetchplaylist();
  }

  fetchplaylist(){
    this.database.fetchplaylist();
  }

  remove(id){
    this.database.removePlaylist(id);
  }

}
