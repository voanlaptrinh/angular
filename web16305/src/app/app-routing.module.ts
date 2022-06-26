import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './screens/home/home.component';
import { LoginComponent } from './screens/login/login.component';
import { SubjectListComponent } from './screens/subject-list/subject-list.component';
import { QuizComponent } from './screens/quiz/quiz.component';
import { HomeLayoutComponent } from './layouts/home-layout/home-layout.component';
import { AdminMonHocComponent } from './admin/admin-mon-hoc/admin-mon-hoc.component';
import { AdminQuizComponent } from './admin/admin-quiz/admin-quiz.component';
import { HomeAdminComponent } from './admin/home-admin/home-admin.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { AuthGuard } from './helpers/auth-guard';
import { DiemComponent } from './screens/diem/diem.component';

const routes: Routes = [
  {
    path: "",
    component: HomeLayoutComponent,
    children: [
      {
        path: "",
        component: HomeComponent
      },
      {
        path: 'mon-hoc',
        component: SubjectListComponent,
        
      }, 
      {
        path: 'quiz/:idmonhoc',
        component: QuizComponent,
        canActivate: [AuthGuard],
      
       
      },
      
      {
        path:"Diem/:id",
        component: DiemComponent
      }
    ],
    // loadChildren
  },
  
  {
    path: "login",
    component: LoginComponent,
    
  },

  {
    path: "admin",
    component: HomeAdminComponent,
    children: [
      {
        path: "admin-mon",
        component: AdminMonHocComponent
      },
      {
        path:"admin-quiz/:id",
        component: AdminQuizComponent
      },
      {
        path: "adminLogin",
        component: AdminLoginComponent
      }
      
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
