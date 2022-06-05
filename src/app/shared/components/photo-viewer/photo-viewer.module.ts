import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PhotoViewerComponent} from './photo-viewer/photo-viewer.component';



@NgModule({
  declarations: [PhotoViewerComponent],
  exports: [PhotoViewerComponent],
  imports: [
    CommonModule
  ]
})
export class PhotoViewerModule { }
