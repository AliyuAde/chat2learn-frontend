import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudentPage } from './student.page';

const routes: Routes = [
  {
    path: '',
    component: StudentPage
  },
  {
    path: 'tabs',
    component: StudentPage,
    children: [
      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: '/student/student.module#StudentPageModule'
          }
        ]
      },
      {
        path: 'teachers',
        children: [
          {
            path: '',
            loadChildren: '/teachers-list/teachers-list.module#TeachersListPageModule'
          }
        ]
      },
      {
        path: 'chat-list',
        children: [
          {
            path: '',
            loadChildren: './chat-list/chat-list.module#ChatListPageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/student/tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: 'teachers-list',
    loadChildren: () => import('./teachers-list/teachers-list.module').then( m => m.TeachersListPageModule)
  },
  {
    path: '',
    redirectTo: '/student/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentPageRoutingModule {}
