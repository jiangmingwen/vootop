import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConnectionRoutingModule } from './connection-routing.module';
import { ConnectionComponent } from './connection/connection.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { RepasswordComponent } from './repassword/repassword.component';
import {MatButtonModule, MatCardModule, MatCheckboxModule, MatIconModule, MatInputModule} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ErroComponent } from './erro/erro.component';
import { NofoundComponent } from './nofound/nofound.component';
import { VerifokComponent } from './verifok/verifok.component';
import { VerifnoComponent } from './verifno/verifno.component';
import {MaterialModule} from '../shared/material/material.module';

@NgModule({
  imports: [
    CommonModule,
    ConnectionRoutingModule,
    MaterialModule
  ],
  declarations: [ConnectionComponent,
    InscriptionComponent,
    RepasswordComponent,
    ErroComponent,
    NofoundComponent,
    VerifokComponent,
    VerifnoComponent,
  ]
})
export class ConnectionModule { }
