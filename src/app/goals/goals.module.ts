import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GoalsPage } from './goals.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { SecondPage } from '../modals/second/second.page';

import { GoalsPageRoutingModule } from './goals-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    GoalsPageRoutingModule
  ],
  declarations: [GoalsPage, SecondPage],
  entryComponents: [SecondPage]
})
export class GoalsPageModule {}
