import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { COMPOSITION_BUFFER_MODE } from '@angular/forms';

export interface Composer {
  name: string;
  complete_name: string;
  epoch: string;
  birth: string;
  death: string;
  works: Work[];
}

export interface Work {
  title: string;
  subtitle?: string;
  searchterms?: any;
  genre: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  inputValue = '';

  composersList: any = [];

  composers: any;

  composer: Composer = {
    name: '',
    complete_name: '',
    epoch: '',
    birth: '',
    death: '',
    works: [],
  };

  search = '';

  searchWorks = '';

  works: Work[] = [];

  work: Work = {
    title: '',
    subtitle: '',
    genre: '',
  };

  worksByGenre: Work[] = [];

 
   
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http
      .get('https://api.openopus.org/work/dump.json')
      .subscribe((response) => {
        this.composersList = response;

        this.composers = this.composersList.composers;
       
      });
      
  }

  showComposer(id: string) {

    setTimeout(()=> {this.composer = this.composers?.find((x: any) => x.complete_name === id);
    this.search = '';
    this.works = this.composer.works, 100})

    
  }

  selectStage() {
    
    this.worksByGenre = this.composer.works && this.composer.works.filter((w: Work) => w.genre === 'Stage');
    this.works = this.worksByGenre
  }

  selectOrchestral(){
    
    this.worksByGenre = this.composer.works && this.composer.works.filter((w: Work) => w.genre === 'Orchestral');    
    this.works = this.worksByGenre 
  }

  selectChamber(){
    
    this.worksByGenre = this.composer.works && this.composer.works.filter((w: Work) => w.genre === 'Chamber');    
    this.works = this.worksByGenre  
  }

  selectKeyboard(){
    this.worksByGenre = this.composer.works && this.composer.works.filter((w: Work) => w.genre === 'Keyboard');    
    this.works = this.worksByGenre  
    
  }

  selectVocal(){
    this.worksByGenre = this.composer.works && this.composer.works.filter((w: Work) => w.genre === 'Vocal');    
    this.works = this.worksByGenre  
    
  }

  resetWorks() { 
    
    this.works = this.composer.works
    this.searchWorks = '';
  }

  resetPage() {
    window.location.reload();
  }
}
