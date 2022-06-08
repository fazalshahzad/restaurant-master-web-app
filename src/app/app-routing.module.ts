import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BlogSingleComponent } from './blog-single/blog-single.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { ReserveComponent } from './reserve/reserve.component';

const routes: Routes = [
{path:'',component:HomeComponent},
{path:'home',component:HomeComponent},
{path:'about',component:AboutComponent},
{path:'blog',component:BlogComponent},
{path:'single',component:BlogSingleComponent},
{path:'menu',component:MenuComponent},
{path:'contact',component:ContactComponent},
{path:'reserve',component:ReserveComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
