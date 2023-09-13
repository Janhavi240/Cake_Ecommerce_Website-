import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule , HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { CategoryComponent } from './category/category.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { CakesComponent } from './cakes/cakes.component';
import { BlogComponent } from './blog/blog.component';
import { LoginComponent } from './login/login.component';
import { CustomerpanelComponent } from './customerpanel/customerpanel.component';
import { ListproductComponent } from './listproduct/listproduct.component';
import { AdminpanelComponent } from './adminpanel/adminpanel.component';
import { RouterModule } from '@angular/router';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { HttpInterceptorService } from './http-interceptor.service';
import { HomemainComponent } from './homemain/homemain.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { BlogdetailsComponent } from './blogdetails/blogdetails.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    NavbarComponent,
    FooterComponent,
    CakesComponent,
    BlogComponent,
    LoginComponent,
    CategoryComponent,
    CustomerpanelComponent,
    ListproductComponent,
    AdminpanelComponent,
    PagenotfoundComponent,
    SignupComponent,
    SigninComponent,
    HomemainComponent,
    UserloginComponent,
    BlogdetailsComponent,



  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,

    RouterModule.forRoot([

      {path:'home',component:HomeComponent},
      {path: 'navbar', component:NavbarComponent},
      {path:'about',component:AboutComponent},
      {path:'footer' ,component:FooterComponent},
      {path:'contact',component:ContactComponent},
      {path : 'cakes' ,component:CakesComponent},
      {path:'blog',component:BlogComponent},
      {path:'blogdetails',component:BlogdetailsComponent},
      {path:'login',component:LoginComponent},
      {path:'category',component :CategoryComponent},
      {path:'listproduct',component :ListproductComponent},
      {path : 'adminpanel',component:AdminpanelComponent},
      {path:'customerpanel',component:CustomerpanelComponent},
      { path: 'signin', component: SigninComponent },
      { path: 'userlogin', component: UserloginComponent },
      { path: 'signup', component: SignupComponent },
      { path: 'homemain', component: HomemainComponent },
      {path:'',component:HomemainComponent},
      {path:"**",component:PagenotfoundComponent},

    ])

  ],
  providers: [HttpClientModule,   {
    provide: HTTP_INTERCEPTORS,
    useClass: HttpInterceptorService,
    multi: true
}],
  bootstrap: [AppComponent]
})
export class AppModule { }
