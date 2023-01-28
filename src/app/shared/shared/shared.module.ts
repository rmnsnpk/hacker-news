import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DomainExtractorPipe } from './pipes/domain.pipe';
import { TimeAgoPipe } from './pipes/time-ago.pipe';

@NgModule({
  declarations: [DomainExtractorPipe, TimeAgoPipe],
  imports: [CommonModule],
  exports: [DomainExtractorPipe, TimeAgoPipe],
})
export class SharedModule {}
