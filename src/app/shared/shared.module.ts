import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DomainExtractorPipe } from './pipes/domain.pipe';
import { TimeAgoPipe } from './pipes/time-ago.pipe';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';

@NgModule({
  declarations: [DomainExtractorPipe, TimeAgoPipe, NotFoundPageComponent],
  imports: [CommonModule],
  exports: [DomainExtractorPipe, TimeAgoPipe],
})
export class SharedModule {}
