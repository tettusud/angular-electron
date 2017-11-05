import {Routes} from '@angular/router';


import {AndroidHomeComponent} from './pages/android/android.component';
import {IosHomeComponent} from './pages/ios/ios.component';

export const rootRouterConfig: Routes = [
    { path: '', redirectTo: 'android', pathMatch: 'full' },
    { path: 'android', component: AndroidHomeComponent },
    { path: 'ios', component: IosHomeComponent }
]
 