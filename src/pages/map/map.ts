import { Component } from '@angular/core';
import { NavController, ToastController, LoadingController } from 'ionic-angular';

import { BeerService } from '../../providers/beer.service';
import { DetailPage } from '../detail/detail';

const defaultPosition = {
  coords: {
    latitude: 49,
    longitude: 6
  }
};

@Component({
  templateUrl: 'map.html'
})
export class MapPage {

  public bars: any;

  constructor(
    public navCtrl: NavController,
    public beerService: BeerService,
    public toastCtrl: ToastController,
    public loadingCtrl: LoadingController) {

  }

  loadBeers(position, loader){
    this.beerService.getLocalBeer(position).subscribe(
          data => {
            let barData = JSON.parse(data);
            this.bars = barData.data;
            console.log(barData);
            if (loader){
              loader.dismiss();
            }
          },
          err => {
            console.error(err);
            if (loader){
              loader.dismiss();
            }

            this.toastCtrl.create({
              message: 'Could not fetch bars',
              duration: 2000
            }).present();

          }
    );
  }

  ionViewDidEnter() {
    let loader = this.loadingCtrl.create({
      content: 'Fetching bars near you...'
    });
    loader.present().then(() => {
      navigator.geolocation.getCurrentPosition((position) => {
        this.loadBeers(position, loader);
      },()=>{
        //error
        loader.dismiss().then(() => {
          this.toastCtrl.create({
            message: 'Geolocation not activated; will use a default place',
            duration: 2000
          }).present();
          this.loadBeers(defaultPosition, loader);
        });
    });
    })
    
    ;
  }

  openDetail(bar) {
    this.navCtrl.push(DetailPage, { beer: bar })
  }
}
