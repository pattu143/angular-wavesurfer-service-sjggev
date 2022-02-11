import { Component } from '@angular/core';
import { AngularWavesurferServiceOptions } from 'angular-wavesurfer-service';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  wavesurferOptions4: AngularWavesurferServiceOptions;
  wavesurferOptions5: AngularWavesurferServiceOptions;

  constructor() {
    this.wavesurferOptions4 = {
      backgroundColor: '#000000',
      cursorColor: '#fbff00',
      progressColor: '#555',
      waveColor: '#fbff00',
      barGap: 12,
      barHeight: 1,
      barMinHeight: 1,
      barRadius: 6,
      barWidth: 12,
      normalize: true,
      splitChannels: true,
      splitChannelsOptions: {
        overlay: true,
        relativeNormalization: true
      }
    };

    this.wavesurferOptions5 = {
      backgroundColor: '#ffffff',
      cursorColor: '#000fff',
      progressColor: '#555',
      waveColor: '#0011ff',
      barGap: 4,
      barHeight: 1,
      barMinHeight: 1,
      barWidth: 6,
      normalize: true,
      splitChannels: true,
      splitChannelsOptions: {
        overlay: true,
        relativeNormalization: true
      },
      cursorWidth: 6
    };
  }
}
