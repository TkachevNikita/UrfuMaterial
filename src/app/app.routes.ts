import { Routes } from '@angular/router';
import {ButtonPageComponent} from "./pages/button-page/button-page.component";
import {TabsPageComponent} from "./pages/tabs/tabs-page.component";
import {IconsPageComponent} from "./pages/icons-page/icons-page.component";

export const routes: Routes = [
    {
        path: 'button',
        component: ButtonPageComponent
    },
    {
        path: 'tabs',
        component: TabsPageComponent
    },
    {
        path: 'icons',
        component: IconsPageComponent
    }
];
