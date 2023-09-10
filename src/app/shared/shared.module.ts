import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderActionComponent } from './components/header/header-action/header-action.component';
import { FaconLgRegularComponent } from './widgets/facons/facon-lg-regular/facon-lg-regular.component';
import { FaconMdRegularComponent } from './widgets/facons/facon-md-regular/facon-md-regular.component';
import { FaconSmRegularComponent } from './widgets/facons/facon-sm-regular/facon-sm-regular.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogModule } from '@angular/cdk/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';





@NgModule({
  declarations: [
    NavigationComponent,
    HeaderComponent,
    FooterComponent,
    HeaderActionComponent,
    FaconLgRegularComponent,
    FaconMdRegularComponent,
    FaconSmRegularComponent,
  ],
  exports:[
    NavigationComponent,
    HeaderComponent,
    FooterComponent,
    FaconLgRegularComponent,
    FaconMdRegularComponent,
    FaconSmRegularComponent,
    FormsModule,
    ReactiveFormsModule,
    DialogModule,
    MatFormFieldModule,
    MatSelectModule
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DialogModule,
    MatFormFieldModule,
    MatSelectModule
  ]
})
export class SharedModule { }
