import {food} from './app/shared/models/food';
import { Tag } from './app/shared/models/Tag';

export const sample_foods: food[] = [
 {
  id:'1',
  name: 'Pizza',
  cookTime:'15-25',
  price: 10,
  favourite: false,
  origins:['italy'],
  stars: 4.5,
  imageUrl:'assets/food-2.jpg',
  tags:['FastFood','Pizza', 'Lunch',],

 },
 {
  id:'2',
  name: 'Burger',
  cookTime:'10-25',
  price: 10,
  favourite: true,
  origins:['italy','us'],
  stars: 3.0,
  imageUrl:'asset/food-4.jpg',
  tags:['FastFood','Burger'],


 },
]

export const sample_tags:Tag[] = [
  {name:'All', count:2},
  {name:'FastFood', count:2},
  {name:'Pizza', count:1},
  {name:'Burger', count:1},
]
