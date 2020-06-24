import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DreamHouselInterceptorService } from './interceptors/dream-housel-interceptor.service';

@NgModule({
  imports: [CommonModule],
  providers: [DreamHouselInterceptorService],
  declarations: []
})
export class SharedModule {}
