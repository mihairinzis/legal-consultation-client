import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import * as fromComponents from './components';
import * as fromContainer from './containers';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
  ],
  declarations: [
    ...fromContainer.components,
    ...fromComponents.components,
  ],
  providers: [],
  exports: [
    ...fromContainer.components,
    ...fromComponents.components,
  ]
})
export class CommentsModule {
}
