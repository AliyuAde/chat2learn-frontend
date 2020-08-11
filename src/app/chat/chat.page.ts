import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {


  
    img = '../assets/icon/ali.jpg';
    name = 'Adedigba Aliu';
  

  messages = [
    {
      user: 'Aliy',
      createdAt: 1554090856000,
      msg: 'Hey This is Aliy how are you?'
    },

    {
      user: 'Kewu',
      createdAt: 1554090756000,
      msg: 'Hey This is Kewu how are you?'
    },

    {
      user: 'Ola',
      createdAt: 1554090656000,
      msg: 'Hey This is Ola how are you?'
    },
    {
      user: 'Aliy',
      createdAt: 1554090856000,
      msg: 'Hey This is Aliy how are you?'
    },

    {
      user: 'Kewu',
      createdAt: 1554090756000,
      msg: 'Hey This is Kewu how are you?'
    },

    {
      user: 'Ola',
      createdAt: 1554090656000,
      msg: 'Hey This is Ola how are you?'
    },
    {
      user: 'Aliy',
      createdAt: 1554090856000,
      msg: 'Hey This is Aliy how are you?'
    },

    {
      user: 'Kewu',
      createdAt: 1554090756000,
      msg: 'Hey This is Kewu how are you?'
    },

    {
      user: 'Ola',
      createdAt: 1554090656000,
      msg: 'Hey This is Ola how are you?'
    }
  ];

  currentUsr = 'Aliy';
  newMsg = '';

  @ViewChild(IonContent) content: IonContent;

  constructor() { }

  sendMessage(){
    this.messages.push({
      user: 'Aliy',
      createdAt: new Date().getTime(),
      msg: this.newMsg
    });
    this.newMsg="";
    setTimeout(() =>{
      this.content.scrollToBottom(10);
    });
  }

  ngOnInit() {
  }

}
