import { Component, OnInit } from '@angular/core';
import { PlaysService } from 'src/app/service/plays.service';
import { Play } from '../play';

//variable to set actions to, based on interface data
const emptyPlay: Play = {
  id: null,
  title: '',
  description: '',
  favorite: false,
}

@Component({
  selector: 'app-plays',
  templateUrl: './plays.component.html',
  styleUrls: ['./plays.component.scss']
})
export class PlaysComponent implements OnInit{
  plays = []; //base variable
  plays$: any; //?

  constructor(private playsService: PlaysService) { }

//Lifecycle hook to show all items based on current actions. 
//Referred to after every action that changes data
  ngOnInit(): void {
    this.fetchPlays();
  }

//other variables used to manipulate information
  selectedPlay = emptyPlay;
  originalTitle = '';

//DOM method to interact with UI
  selectPlay(play) {
    this.selectedPlay = {...play}; //creates replica to avoid shared-mutable
  }
  
//response method to reset form -- called with cancel button
  reset() {
    this.selectPlay({...emptyPlay})//creates blank replica to avoid shared-mutable
  }

//base method for lifecycle hook
  fetchPlays() {
    this.plays$ = this.playsService.all();
  }

//called with save button
  savePlay(play) {
    if(play.id) {
      this.updatePlay(play);
    } else {
      this.createPlay(play);
    }
  }

//used in form
  createPlay(play) {
    this.playsService.create(play)
    .subscribe(result => this.fetchPlays());
  }

//used in form
  updatePlay(play) {
    this.playsService.create(play)
    .subscribe(result => this.fetchPlays());
  }

//delete button
  deletePlay(id) {
    this.playsService.delete(id)
    .subscribe(result => this.fetchPlays());
  }

}