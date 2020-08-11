import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.page.html',
  styleUrls: ['./chat-list.page.scss'],
})
export class ChatListPage implements OnInit {

  chats = [
    {
      img: 'assets/icon/ali.jpg',
      user_id: 1,
      name: 'Aliu Adedigba',
      unread_chats: 2,
      online: 'no',
      lastOnline: 1554090856000

    },
    {
      img: 'assets/icon/ali.jpg',
      user_id: 1,
      name: 'Aliu Adedigba',
      unread_chats: 2,
      online: 'yes',
      lastOnline: 1554090856000

    },
    {
      img: 'assets/icon/ali.jpg',
      user_id: 1,
      name: 'Aliu Adedigba',
      unread_chats: 2,
      online: 'no',
      lastOnline: 1554090856000

    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
