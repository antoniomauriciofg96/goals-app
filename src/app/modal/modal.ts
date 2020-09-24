import { NavController, ModalController } from '@ionic/angular';

export class ModalPage {
    value: any;
    newItem: any;

    constructor(public navCtrl: NavController, public viewCtrl: ModalController) {

    }


    ionViewDidLoad() {
        console.log('ionViewDidLoad ModalPage');
    }
    public closeModal() {
        this.viewCtrl.dismiss();

    }
    //add() {
    //  let data = {"name": this.newItem};
    //  this.viewCtrl.dismiss(data.name)
    // }
    add() {
        let data = { "value": this.value };
        this.viewCtrl.dismiss(data)
    }

}