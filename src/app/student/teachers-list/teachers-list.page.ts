import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teachers-list',
  templateUrl: './teachers-list.page.html',
  styleUrls: ['./teachers-list.page.scss'],
})
export class TeachersListPage implements OnInit {
  counter(i: number){
    return new Array(i);
  }
  teachers = [
    {
      img: 'assets/icon/ali.jpg',
      user_id: 1,
      name: 'Aliu Adedigba',
      online: 'no',
      rating: 2

    },
    {
      img: 'assets/icon/ali.jpg',
      user_id: 1,
      name: 'Aliu Adedigba',
      online: 'no',
      rating: 3

    },
    {
      img: 'assets/icon/ali.jpg',
      user_id: 1,
      name: 'Aliu Adedigba',
      online: 'no',
      rating: 4

    }
  ]


  constructor() { }

  ngOnInit() {
  }

}
