import { Component, NgModule } from '@angular/core';
import { Router } from  "@angular/router";
import { GoalService } from '../goals/goal-service.service';

@Component({
  selector: 'app-createPage',
  templateUrl: 'createPage.page.html',
  styleUrls: ['createPage.page.scss']
})
export class CreatePage {

  resultado : any = {
    name          : false,
    description   : false,
    goalValue     : false
  }
  goal : any = {}

  // constructor() {}

  constructor(private  goalService:  GoalService, private  router:  Router) {}

  create(form) {
    console.log(form.value)
    this.goalService.create(form.value);
    this.router.navigateByUrl('tabs/goals');
  }

}
