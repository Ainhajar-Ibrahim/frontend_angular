import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComputersComponent } from './computers/computers.component';
import { PrintersComponent } from './printers/printers.component';
import { ProductsComponent } from './products/products.component';
import { SmartphonesComponent } from './smartphones/smartphones.component';

const routes: Routes = [{path:'products',component:ProductsComponent},
                        {path:'computers',component:ComputersComponent},
                        {path:'printers',component:SmartphonesComponent},
                        {path:'smartphones',component:PrintersComponent},  
                        {path:'',redirectTo:'products',pathMatch :'full'}
                       ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
