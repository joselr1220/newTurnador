import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import {DragDropModule} from '@angular/cdk/drag-drop';

import { Tab2PageRoutingModule } from './tab2-routing.module';
import { Globals } from '../Globals/globals';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab2PageRoutingModule,
    DragDropModule
  ],
  declarations: [Tab2Page],
  providers: [Globals]
})
export class Tab2PageModule {}
