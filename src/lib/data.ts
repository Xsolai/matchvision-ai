export type MatchEvent={id:string;time:string;type:string;team:'Harbor'|'Riverside';player:string;detail:string;color:'cyan'|'amber'|'mint'};
export type Player={id:string;number:number;name:string;pos:string;distance:number;speed:number;xg:number;rating:number;team:'Harbor'|'Riverside'};
export type Clip={id:string;time:string;event:string;team:string;player:string;phase:string;duration:string;status:'New'|'Reviewed'};
export type PricingPlan={id:string;name:string;monthly:number;annual:number;description:string;features:string[];popular?:boolean};
export const events:MatchEvent[]=[
 {id:'goal',time:'68:10',type:'GOAL',team:'Harbor',player:'19 Amara Jallow',detail:'Assist: 11 Owusu',color:'cyan'},
 {id:'shot',time:'64:52',type:'SHOT ON TARGET',team:'Harbor',player:'7 Mateo Reyes',detail:'Right foot · Inside box',color:'cyan'},
 {id:'turnover',time:'63:31',type:'TURNOVER',team:'Riverside',player:'8 Diego Torres',detail:'Lost possession',color:'amber'},
 {id:'press',time:'62:14',type:'HIGH PRESSURE',team:'Harbor',player:'6 Minjun Park',detail:'Forced turnover',color:'mint'},
 {id:'off',time:'59:47',type:'SHOT OFF TARGET',team:'Riverside',player:'17 Nqoma',detail:'Left foot · Outside box',color:'amber'},
 {id:'pass',time:'57:03',type:'KEY PASS',team:'Harbor',player:'23 Emil Larsen',detail:'Through ball',color:'cyan'},
 {id:'foul',time:'54:21',type:'FOUL',team:'Riverside',player:'4 Hayes',detail:'Tactical foul',color:'amber'},
];
export const players:Player[]=[
 {id:'owusu',number:11,name:'Kwame Owusu',pos:'AM',distance:9.87,speed:31.2,xg:.62,rating:8.2,team:'Harbor'},
 {id:'jallow',number:19,name:'Amara Jallow',pos:'RW',distance:8.74,speed:33.6,xg:.71,rating:8,team:'Harbor'},
 {id:'park',number:6,name:'Minjun Park',pos:'DM',distance:10.92,speed:29.1,xg:.18,rating:7.6,team:'Harbor'},
 {id:'reyes',number:7,name:'Mateo Reyes',pos:'LW',distance:9.56,speed:32.4,xg:.44,rating:7.5,team:'Harbor'},
 {id:'larsen',number:23,name:'Emil Larsen',pos:'RCB',distance:9.13,speed:28.7,xg:.07,rating:7.2,team:'Harbor'},
 {id:'torres',number:8,name:'Diego Torres',pos:'CM',distance:10.2,speed:30.8,xg:.21,rating:7,team:'Riverside'},
];
export const clips:Clip[]=events.slice(0,5).map((e,i)=>({id:e.id,time:e.time,event:e.type,team:e.team==='Harbor'?'Harbor City FC':'Riverside United',player:e.player,phase:i<2?'In possession':'Out of possession',duration:`00:${[18,12,10,11,9][i]}`,status:i%2?'Reviewed':'New'}));
export const momentum=[{m:0,h:2,r:1},{m:10,h:4,r:2},{m:20,h:3,r:5},{m:30,h:7,r:4},{m:40,h:6,r:3},{m:50,h:8,r:4},{m:60,h:7,r:6},{m:68,h:10,r:5}];
export const playerMap=[{x:12,y:56,z:7},{x:24,y:41,z:6},{x:34,y:63,z:8},{x:46,y:47,z:11},{x:58,y:36,z:19},{x:69,y:57,z:23},{x:77,y:42,z:9},{x:84,y:67,z:17}];
export const plans:PricingPlan[]=[
 {id:'analyst',name:'Analyst',monthly:59,annual:47,description:'For individual performance analysts.',features:['5 matches / month','Event timeline and clips','Player performance reports','CSV export']},
 {id:'club',name:'Club',monthly:149,annual:119,description:'For coaching and analysis teams.',features:['25 matches / month','Tactical phase analysis','Team collaboration','PDF report builder'],popular:true},
 {id:'academy',name:'Academy',monthly:299,annual:239,description:'For multi-squad development programs.',features:['100 matches / month','Multiple squads','Player benchmarking','Priority support']},
];
