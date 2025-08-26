import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Layout } from './layout/layout';
import { Login } from './pages/login/login';
import { SignIn } from './pages/sign-in/sign-in';

export const routes: Routes = [
    {
    path: '',
    component: Layout,
    children: [
      { path: '', component: Home },
      { path: 'login', component: Login },
      { path: 'signin', component: SignIn },
    ]
  }
];
