import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CustomAuthModule } from './custom-auth.module';
import { HomeComponent } from './home/home.component';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';

@NgModule({
    declarations: [AppComponent, HomeComponent, UnauthorizedComponent],
    imports: [
        BrowserModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'forbidden', component: UnauthorizedComponent },
            { path: 'unauthorized', component: UnauthorizedComponent },
        ]),
        CustomAuthModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
