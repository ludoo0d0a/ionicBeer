import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { MapPage } from '../pages/map/map';
import { FavoritePage } from '../pages/favorite/favorite';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { DetailPage } from '../pages/detail/detail';
import { BeerService } from '../providers/beer.service';
import { PopoverPage } from '../pages/popoverPage/popover-page';
import { Camera } from '../pages/camera/camera';
import { IonicStorageModule } from '@ionic/storage';

@NgModule({
  declarations: [
    MyApp,
    FavoritePage,
    HomePage,
    TabsPage,
    MapPage,
    DetailPage,
    PopoverPage,
    Camera
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    FavoritePage,
    HomePage,
    TabsPage,
    MapPage,
    DetailPage,
    PopoverPage,
    Camera
  ],
  providers: [BeerService, 
  {provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule { }

