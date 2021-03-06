import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule, Http } from '@angular/http';

import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { IonicStorageModule } from '@ionic/storage';
import { TranslateModule, TranslateLoader, TranslateStaticLoader } from '../module/ng2-translate';
export function createTranslateLoader(http: Http) {
  return new TranslateStaticLoader(http, './assets/i18n', '.json');
}

import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { OneSignal } from '@ionic-native/onesignal';
import { GooglePlus } from '@ionic-native/google-plus';
import { Facebook } from '@ionic-native/facebook';
import { Network } from '@ionic-native/network';
import { Config } from '../service/config.service';
import { Storage } from '@ionic/storage';
import { Toast } from '@ionic-native/toast';
import { SocialSharing } from '@ionic-native/social-sharing';
import { Camera } from '@ionic-native/camera';
import { Diagnostic } from '@ionic-native/diagnostic';
import { Geolocation } from '@ionic-native/geolocation';
import { LocationAccuracy } from '@ionic-native/location-accuracy';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ButtonCartComponent } from '../components/button-cart/button-cart';
import { FooterTabsComponent } from '../components/footer-tabs/footer-tabs';
import { HideShowComponent } from '../components/hide-show/hide-show';
import { ButtonQuantityComponent } from '../components/button-quantity/button-quantity';
import { AboutFooterComponent } from '../components/about-footer/about-footer';
import { LatestPage } from '../pages/latest/latest';
import { AccountPage } from '../pages/account/account';
import { SearchPage } from '../pages/search/search';
import { LoginPage } from '../pages/login/login';
import { CategoriesPage } from '../pages/categories/categories';
import { DetailCategoryPage } from '../pages/detail-category/detail-category';
import { SignupPage } from '../pages/signup/signup';
import { ProfilePage } from '../pages/profile/profile';
import { CommentsPage } from '../pages/comments/comments';
import { DetailPage } from '../pages/detail/detail';
import { RatingPage } from '../pages/rating/rating';
import { AddressPage } from '../pages/address/address';
import { CheckoutPage } from '../pages/checkout/checkout';
import { CartPage } from '../pages/cart/cart';
import { ThanksPage } from '../pages/thanks/thanks';
import { DetailOrderPage } from '../pages/detail-order/detail-order';
import { OrderPage } from '../pages/order/order';
import { FavoritePage } from '../pages/favorite/favorite';
import { AboutPage } from '../pages/about/about';
import { TermsPage } from '../pages/terms/terms';
import { PrivacyPage } from '../pages/privacy/privacy';
import { ContactPage } from '../pages/contact/contact';
//pipe
import { PricePipe } from '../pipes/price/price';
import { OderByPipe } from '../pipes/oder-by/oder-by';
import { ObjectToArrayPipe } from '../pipes/object-to-array/object-to-array';
import { FilterPipe } from '../pipes/filter/filter';
import { ArrayjoinPipe } from '../pipes/arrayjoin/arrayjoin';
import { StaticPipe } from '../pipes/static/static';
import { ViewmorePipe } from '../pipes/viewmore/viewmore';
import { RangePipe } from '../pipes/range/range';
import { TimeagoPipe } from '../pipes/timeago/timeago';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ButtonCartComponent,
    FooterTabsComponent,
    HideShowComponent,
    ButtonQuantityComponent,
    AboutFooterComponent,
    LatestPage,
    AccountPage,
    SearchPage,
    CategoriesPage,
    LoginPage,
    SignupPage,
    PricePipe,
    ViewmorePipe,
    OderByPipe,
    ObjectToArrayPipe,
    FilterPipe,
    ArrayjoinPipe,
    RangePipe,
    TimeagoPipe,
    StaticPipe,
    ProfilePage,
    CommentsPage,
    DetailPage,
    RatingPage,
    AddressPage,
    CheckoutPage,
    CartPage,
    ThanksPage,
    DetailOrderPage,
    FavoritePage,
    AboutPage,
    TermsPage,
    PrivacyPage,
    ContactPage,
    DetailCategoryPage,
    OrderPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      backButtonText: '',
      backButtonIcon: 'md-arrow-back',
      mode: 'ios',
      pageTransition: 'md-transition',
      platforms: {
          ios: {
            scrollAssist: false,
            autoFocusAssist: false
          }
      }
    }),
    HttpModule,
    TranslateModule.forRoot({
      provide: TranslateLoader,
      useFactory: (createTranslateLoader),
      deps: [Http]
    }),
    IonicStorageModule.forRoot({ 
      name: 'woocommerce_application', 
      driverOrder: ['sqlite', 'websql', 'indexeddb'] 
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LatestPage,
    AccountPage,
    SearchPage,
    CategoriesPage,
    LoginPage,
    SignupPage,
    ProfilePage,
    CommentsPage,
    DetailPage,
    RatingPage,
    AddressPage,
    CheckoutPage,
    CartPage,
    ThanksPage,
    DetailOrderPage,
    FavoritePage,
    AboutPage,
    TermsPage,
    PrivacyPage,
    ContactPage,
    DetailCategoryPage,
    OrderPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    InAppBrowser,
    Config,
    Network,
    OneSignal,
    Toast,
    Camera,
    Diagnostic,
    Geolocation,
    LocationAccuracy,
    SocialSharing,
    GooglePlus,
    Facebook,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
