import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CreatePage } from './createPage.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { BrMaskerModule } from 'br-mask';

import { CreatePageRoutingModule } from './createPage-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    CreatePageRoutingModule,
    BrMaskerModule
  ],
  declarations: [CreatePage]
})
export class CreatePageModule {}
