import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController,App } from 'ionic-angular';

/**
 * Generated class for the MyTreatPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my-treat',
  templateUrl: 'my-treat.html',
})
export class MyTreatPage {

  cardInfor:Array<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl:ViewController,public app:App) {

    this.cardInfor = [
      {
        img:'assets/img/home/businessImg.png',
        name:'Barbershop董小姐理发馆库',
        price:'896',
        address:'上海市徐汇区乌鲁木齐中路170号',
      },
      {
        img:'assets/img/pang_cur.png',
        name:'Barbershop董小姐理发馆库Barbershop董小姐理发馆库Barbershop董小姐理发馆库',
        price:'296',
        address:'上海市黄浦区浙江中路229号百米上海市黄浦区浙江中路229号百米上海市黄浦区浙江中路229号百米',
      },
      {
        img:'assets/img/pang_cur.png',
        name:'Barbershop董小姐理发馆库',
        price:'596',
        address:'上海市徐汇区乌鲁木齐中路170号',
      },
      {
        img:'assets/img/pang_cur.png',
        name:'Barbershop董小姐理发馆库',
        price:'896',
        address:'上海市徐汇区乌鲁木齐中路170号',
      }
    ]
  }

  ionViewDidLoad() {
    this.viewCtrl.setBackButtonText('返回');
  }

  selectCard(){
    // for(var i in this.cardInfor){
    //   this.cardInfor[i].currentCard = false;
    // };
    // item.currentCard = true;
    this.app.getRootNav().push('StandTreatPage');
  }

}
