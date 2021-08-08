import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TwoComponent } from './components/two/two.component';

 const routes: Routes = [
    {path:'two', component:TwoComponent}
       
 ];

@NgModule({
  // imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
