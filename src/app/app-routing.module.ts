import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Step1Component } from './step1/step1.component';
import {Step2Component} from "./step2/step2.component";
import {Step0Component} from "./step0/step0.component";
import {FinalComponent} from "./final/final.component";
import {Step10Component} from "./step10/step10.component";
import {Step9Component} from "./step9/step9.component";
import {Step8Component} from "./step8/step8.component";
import {Step6Component} from "./step6/step6.component";
import {Step5Component} from "./step5/step5.component";
import {Step7Component} from "./step7/step7.component";
import {Step4Component} from "./step4/step4.component";
import {Step3Component} from "./step3/step3.component";


const routes: Routes = [
 { path: 'step/1', component: Step1Component },
 { path: 'step/2', component: Step2Component },
 { path: 'step/3', component: Step3Component },
 { path: 'step/4', component: Step4Component },
 { path: 'step/5', component: Step5Component },
 { path: 'step/6', component: Step6Component },
 { path: 'step/7', component: Step7Component },
 { path: 'step/8', component: Step8Component },
 { path: 'step/9', component: Step9Component },
 { path: 'step/10', component: Step10Component },
 { path: 'step/final', component: FinalComponent },
 { path: '', component: Step0Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
