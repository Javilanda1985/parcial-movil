import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CalculatorComponent } from './pages/calculator/calculator.component';
import { ConversorComponent } from './pages/conversor/conversor.component';
import { HomeComponent } from './pages/home/home.component';
import { OperatorLogicComponent } from './pages/operator-logic/operator-logic.component';

const routes: Routes = [
  {
    path: 'operator',
    component:OperatorLogicComponent
  },
  {
    path:'calculator',
    component: CalculatorComponent
  },
  {
    path:'conversor',
    component: ConversorComponent
  },
  {
    path:'',
    component: HomeComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
