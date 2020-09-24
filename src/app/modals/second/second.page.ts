import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { GoalService } from '../../goals/goal-service.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.page.html',
  styleUrls: ['./second.page.scss'],
})
export class SecondPage implements OnInit {

  constructor(private modalController: ModalController, private  goalService:  GoalService) {}

  @Input() public id: number;
  @Input() public type: number;
  public data = {
    id: 0,
    value: ``
  };

  ngOnInit() {
    this.data.id = this.id;
  }

  async closeModal() {
    await this.modalController.dismiss(this.data);
  }

  saveModal(form) {
    console.log(form.value)
    if(this.type==1){ 
      this.goalService.credit(form.value);
    }
    else if (this.type==0){ 
      this.goalService.debit(form.value);
    }
    this.closeModal();
  }

}
