import { Component, OnInit } from '@angular/core';
import { GoalService } from '../goals/goal-service.service';
import { SecondPage } from '../modals/second/second.page';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-goals',
  templateUrl: 'goals.page.html',
  styleUrls: ['goals.page.scss']
})
export class GoalsPage implements OnInit {
  Data: any = [];

  constructor(private goalService: GoalService, private modalController: ModalController) { }

  ngOnInit() {
    const itens = this.goalService.listAll();
    console.log(itens)
    this.Data = itens;
  }

  ionViewWillEnter() {
    console.log("I'm alive!");
    this.ngOnInit();
  }

  deleteGoal(id) {
    console.log(id)
    this.goalService.deleteGoal(id);
    location.reload();
  }

  public creditValue(id) {
    // let modalPage = this.modalCtrl.create(ModalPage);
    // modalPage.onDidDismiss(data => {
    //   this.goalService.credit(data);
    //   // this.Data.push(data.name);
    // });
    // modalPage.present();
  }

  async openModalWithData(id, type) {
    const modal = await this.modalController.create({
      component: SecondPage,
      componentProps: {
        id: id,
        type: type
      }
    });
    modal.onWillDismiss().then(dataReturned => {
      // trigger when about to close the modal
      let modalData = dataReturned.data;
      console.log('Receive: ', modalData);
      location.reload();
    });
    return await modal.present().then(_ => {
      // triggered when opening the modal
      console.log('Sending: ', id);
    });
  }

}
