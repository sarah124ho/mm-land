import { Component, OnInit ,ViewEncapsulation  } from '@angular/core';
/// defination interface BlogPost
interface BlogPost {
  slug: string;
  title: string;
  medicean: string;
  caption:string;
  
}
@Component({
  selector: 'app-content-box-item',
  templateUrl: './content-box-item.component.html',
  styleUrls: ['./content-box-item.component.css'],
  encapsulation: ViewEncapsulation.None
})



export class ContentBoxItemComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
////defination object
  MockedBlogPost: BlogPost = {
    slug: 'mocked_medicean_slug',  
    title: 'نام پزشک یا مشاور',
    medicean: 'تخصص مشاور یا پزشک',
    caption: 'دکتر حسین قهرمانی متخصص مغز و اعصاب (نورولوژی) هستند. مطب دکتر حسین قهرمانی در شهر کرج است. نوبت دهی اینترنتی، مشاوره اینترنتی و مشاوره تلفنی دکتر حسین قهرمانی در سامانه فعال است.'
        } 

}
