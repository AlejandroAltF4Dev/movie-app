import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {Capacitor} from '@capacitor/core';
import {capShowOptions, capShowResult, Image, PhotoViewer, ViewerOptions} from '@capacitor-community/photoviewer';
import { Toast } from '@capacitor/toast';
import {IonModal} from '@ionic/angular';

@Component({
  selector: 'app-photo-viewer',
  templateUrl: './photo-viewer.component.html',
  styleUrls: ['./photo-viewer.component.scss'],
})
export class PhotoViewerComponent implements OnInit, AfterViewInit  {
  modal: IonModal;
  platform: string;
  imageList: Image[];
  mode = 'one';
  options: ViewerOptions = {} as ViewerOptions;
  startFrom = 0;
  constructor() {
    this.platform = Capacitor.getPlatform();

  }
  @Input()
  set data(data){
    this.imageList = [...data.posters];
    this.startFrom = data.index;
  }


  ngOnInit() {
  }
  async ngAfterViewInit() {
    const show = async (imageList: Image[], mode: string,
                        startFrom: number, options?: ViewerOptions
    ): Promise<capShowResult> => {
      const opt: capShowOptions = {} as capShowOptions;
      opt.images = imageList;
      opt.mode = mode;
      if( mode === 'one' || mode === 'slider') {
        opt.startFrom = startFrom;
      }
      if(options) {
        opt.options = options;
      }
      try {
        const ret = await PhotoViewer.show(opt);
        if(ret.result) {
          await this.modal.dismiss();
          return Promise.resolve(ret);
        } else {
          await this.modal.dismiss();
          return Promise.reject(ret.message);
        }
      } catch (err) {
        const ret: capShowResult = {} as capShowResult;
        ret.result = false;
        ret.message = err.message;
        await this.modal.dismiss();
        return Promise.reject(err.message);
      }
    };
    const showToast = async (message: string) => {
      await Toast.show({
        text: message,
        position: 'center',
      });
    };
    try {
      this.mode = 'slider';
       this.options.title = true;
       this.options.share = true;
       this.options.transformer = 'depth';
       this.options.spancount = 2;
      this.options.maxzoomscale = 3;
      this.options.compressionquality = 0.8;
      this.options.movieoptions = {mode: 'landscape', imagetime: 3};
      const result = await show(this.imageList, this.mode,
        this.startFrom,this.options);
      await this.modal.dismiss();

      if(!result.result) {
        await showToast(JSON.stringify(result));
      }
      if(result.result && Object.keys(result).includes('message')) {
        await showToast(JSON.stringify(result));
      }
    } catch (err) {
      await this.modal.dismiss();
      await showToast(err);
      if(this.platform === 'web' || this.platform === 'electron') {
        window.location.reload();
      }
    }

  }

}
