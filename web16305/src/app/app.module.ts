import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WebPipe } from './web.pipe';

import { HomeComponent } from './screens/home/home.component';
import { LoginComponent } from './screens/login/login.component';
import { SubjectListComponent } from './screens/subject-list/subject-list.component';
import { QuizComponent } from './screens/quiz/quiz.component';
import { HomeLayoutComponent } from './layouts/home-layout/home-layout.component';
import { AdminMonHocComponent } from './admin/admin-mon-hoc/admin-mon-hoc.component';
import { AdminQuizComponent } from './admin/admin-quiz/admin-quiz.component';
import { HomeAdminComponent } from './admin/home-admin/home-admin.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { GoogleLoginProvider, SocialAuthServiceConfig, SocialLoginModule } from 'angularx-social-login';
import { environment } from 'src/environments/environment';
import { DiemComponent } from './screens/diem/diem.component';






@NgModule({
  declarations: [
    AppComponent,
    WebPipe,
    HomeComponent,
    LoginComponent,
    SubjectListComponent,
    QuizComponent,
    HomeLayoutComponent,
    AdminMonHocComponent,
    AdminQuizComponent,
    HomeAdminComponent,
    AdminLoginComponent,
   DiemComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    SocialLoginModule
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              environment.GOOGLE_CLIENT_ID
            )
          }
        ]
      } as SocialAuthServiceConfig,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
