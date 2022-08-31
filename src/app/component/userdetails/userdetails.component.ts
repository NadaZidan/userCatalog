import { Component, OnInit } from '@angular/core';
import * as Leaflet from 'leaflet';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { UserService } from 'src/app/service/user.service';
import{Users} from 'src/app/model/userInterface'
import { Coordinate } from 'src/app/model/coordinate.interface';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {
  user:Users
  mode:'edit'|'locked'='locked'
  buttonText:'Save Change'|'Edit'='Edit'
  marker = new Leaflet.Icon({
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-icon.png',
    iconSize: [32, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    shadowSize: [41, 41]
  });
  constructor(private activatedRouter:ActivatedRoute,private userService:UserService) { }

  ngOnInit(): void {
    this.getUserDetails();
    this.loadMap(this.user.coordinate)
  }
  getUserDetails(){
    this.user=(<Users>(this.activatedRouter.snapshot.data['resolveResponse'].results[0]))
   //this.activatedRouter.paramMap.subscribe((param:ParamMap)=>{
   // console.log('User Id',param.get('uuid')!)

   // this.userService.getUserDetails(param.get('uuid')!).subscribe((response)=>{
    //  this.user=response;
    // console.log(response)
   // })
   //})
  }
  changeButtonMode(mode?:'edit'|'locked'):void{
    console.log(this.mode)
    this.mode=this.mode=='locked'?'edit':'locked';
    this.buttonText=this.buttonText=='Edit'?'Save Change':'Edit';
    if(this.mode=='edit'){
      console.log('Updting in back end')
    }

  }
 private loadMap(cordinate:Coordinate):void{
    const map=Leaflet.map('map',{
      center:[cordinate.latitude,cordinate.longitude],
      zoom:8
    })
    const maiLayer=Leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
      tileSize:512,
      zoomOffset:-1,
      minZoom:1,
      maxZoom:30,
      crossOrigin:true,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    })
    maiLayer.addTo(map);
    const marker=Leaflet.marker([cordinate.latitude,cordinate.longitude],{icon:this.marker});
    marker.addTo(map).bindPopup(`${this.user.firstName}'s location`).openPopup()

  }
}
