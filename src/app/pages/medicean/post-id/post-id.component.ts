import { Component, OnInit ,ViewEncapsulation} from '@angular/core';
// import swiper 
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
// import BlogPostDTO ,BlogPost interface
import {BlogPostDTO ,BlogPost } from '../../../domain/medicean'



SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

@Component({
  selector: 'app-post-id',
  templateUrl: './post-id.component.html',
  styleUrls: ['./post-id.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class PostIdComponent  {


  MockedBlogPost: BlogPost = {
  slug: 'mocked_medicean_slug',  
  title: 'نام پزشک یا مشاور',
  medicean: 'تخصص مشاور یا پزشک',
  caption: 'دکتر حسین قهرمانی متخصص مغز و اعصاب (نورولوژی) هستند. مطب دکتر حسین قهرمانی در شهر کرج است. نوبت دهی اینترنتی، مشاوره اینترنتی و مشاوره تلفنی دکتر حسین قهرمانی در سامانه فعال است.'
      }




  SamplePost: BlogPostDTO = {
        title: 'عنوان پست',
        body: 'پزشکی یک دانش کاربردی است، هدف آن حفظ و ارتقاء تندرستی، درمان بیماری‌ها و بازتوانی آسیب‌دیدگان است. این منظور با شناخت بیماریها، تشخیص، درمان و جلوگیری از بروز آنها به انجام می‌رسد. دانش پزشکی بر روی طیف وسیعی از رشته‌ها شامل از فیزیک و زیست‌شناسی تا علوم اجتماعی، مهندسی و علوم انسانی بنا شده است. سلامت عبارت است از تامین رفاه کامل جسمی و روانی و اجتماعی انسان است.',
        likes: 301,
        views: 1256,
        created_at: new Date().getTime(),
        liked: false,
        medicean: {
            slug: '123456',
            name: 'دکتر محمدرضا سهیلی',
            proficiency: 'جراه و متخصص مغز و اعصاب',
            about: 'دکتر حسین قهرمانی متخصص مغز و اعصاب (نورولوژی) هستند. مطب دکتر حسین قهرمانی در شهر کرج است. نوبت دهی اینترنتی، مشاوره اینترنتی و مشاوره تلفنی دکتر حسین قهرمانی در سامانه فعال است ',
            badges: [
                {
                    title: 'مقالات',
                    value: '89',
                },
                {
                    title: 'دنبال کنندگان',
                    value: '13K'
                },
                {
                    title: 'رضایت مندی',
                    value: '4.89'
                }
            ]
        }
    }    




}
