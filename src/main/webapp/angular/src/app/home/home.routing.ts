import {Routes} from "@angular/router";
import {HomeComponent} from "./home.component";

export const homeRoute:Routes=[
    {
        path:'',
        children:[
            {
                path:'home',
                component:HomeComponent
            }
        ]
    }
]
