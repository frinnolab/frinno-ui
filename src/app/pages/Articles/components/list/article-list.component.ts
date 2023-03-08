import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/data/article.model';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {
  dataList:Article[] = [
    {
      id:1,
      title:`Aliquid perspiciatis maxime vero accusantium.`,
      longText:`Distinctio neque autem illum exercitationem nemo fugit aspernatur ipsam! Doloremque nisi eum
      corporis eaque deserunt officiis, obcaecati iure similique quidem dignissimos ex sunt labore
      aperiam numquam necessitatibus nemo iusto quis. Asperiores saepe ipsum dolore quibusdam?
      Nesciunt reiciendis nihil nam quo quis iusto accusamus, iure accusantium voluptatum,
      sit molestias illo quidem labore doloremque nobis quisquam!.`,
      author:{},
      datePublished:new Date(),
      tags:['quisquam', 'adipisci', 'delectus', 'animi','impedit','molestiae'],
      thumbnail:`assets/images/small_01.jpg`
    },
    {
      id:2,
      title:`Quo fugit quasi temporibus.`,
      longText:`Quis animi eius unde repellendus, voluptatem excepturi
      cumque nobis nam labore reprehenderit illo voluptatibus vitae ratione! Doloremque repudiandae
      quam consequatur cupiditate porro possimus ad architecto, quis reprehenderit repellendus
      repellat itaque dolores hic delectus fugit illo assumenda iure nesciunt eos eveniet.
      Quidem tenetur vel repudiandae placeat illo? Autem numquam, voluptatibus suscipit similique
      deleniti facere sed quo a itaque omnis explicabo non excepturi dolores vero maxime placeat
      mollitia minima officia tempore rerum molestiae quae. Vel praesentium aliquid exercitationem
      fugit asperiores sint, deserunt autem reiciendis laudantium quod laboriosam quasi dignissimos
      quis dolore numquam dolorum ullam possimus sit veniam corrupti quas totam deleniti magnam!
      Officiis similique expedita consequuntur veritatis reprehenderit provident tenetur deleniti
      voluptates odio enim incidunt amet, dolorum necessitatibus impedit eos reiciendis dignissimos,
      aliquid suscipit quisquam distinctio cumque voluptas, fugiat nisi. Laboriosam earum, ex
      voluptates vel veritatis magnam aut consequatur accusamus.`,
      author:{},
      datePublished:new Date(),
      tags:['adipisci','molestiae', 'delectus','animi','impedit'],
      thumbnail:`assets/images/small_01.jpg`
    },
    {
      id:3,
      title:`Voluptates sequi vero fugiat.`,
      longText:`Autem, a magni vero consectetur voluptates voluptas eaque alias
      quod saepe tempora consequuntur ratione doloremque cumque reprehenderit quasi exercitationem
      quaerat velit nihil eum aliquam beatae. Nesciunt aperiam voluptatum harum tempora facere
      sit dolorum dolores culpa voluptatem, porro et suscipit rerum aut deleniti, asperiores,
      ratione possimus perspiciatis officiis. Incidunt ratione libero aspernatur fugit omnis
      iusto in provident nemo consequatur, veniam voluptatem blanditiis beatae?
      Doloribus dignissimos hic, itaque velit a cupiditate ab veritatis.
      Dolor amet magni, reprehenderit ut numquam eum voluptas aut ipsum hic adipisci
      officiis tenetur nihil iure assumenda harum sunt corporis accusamus libero velit.
      Iure eligendi consequatur deleniti eveniet placeat non soluta culpa.`,
      author:{},
      datePublished:new Date(),
      tags:['delectus','ipsam', 'assumenda','nihil'],
      thumbnail:`assets/images/small_01.jpg`
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
