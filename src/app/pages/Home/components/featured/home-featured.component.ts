import { Component, OnInit } from '@angular/core';
import { HomeFeatureItem } from 'src/app/data/home-featured.model';

@Component({
  selector: 'app-home-featured',
  templateUrl: './home-featured.component.html',
  styleUrls: ['./home-featured.component.css']
})
export class HomeFeaturedComponent implements OnInit {

  dataList : HomeFeatureItem [] = [
    {
      id:1,
      title:`Aliquid perspiciatis maxime vero accusantium.`,
      article:`Distinctio neque autem illum exercitationem nemo fugit aspernatur ipsam! Doloremque nisi eum
      corporis eaque deserunt officiis, obcaecati iure similique quidem dignissimos ex sunt labore
      aperiam numquam necessitatibus nemo iusto quis. Asperiores saepe ipsum dolore quibusdam?
      Nesciunt reiciendis nihil nam quo quis iusto accusamus, iure accusantium voluptatum,
      sit molestias illo quidem labore doloremque nobis quisquam!.`,
      source:`nostrum.com`,
      dateCreated:new Date(),
      tags:['quisquam', 'adipisci', 'delectus', 'animi','impedit','molestiae'],
      img:`assets/images/small_01.jpg`
    },
    {
      id:2,
      title:`Quo fugit quasi temporibus.`,
      article:`Quis animi eius unde repellendus, voluptatem excepturi
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
      source:`numquam.com`,
      dateCreated:new Date(),
      tags:['adipisci','molestiae', 'delectus','animi','impedit'],
      img:`assets/images/small_01.jpg`
    },
    {
      id:3,
      title:`Voluptates sequi vero fugiat.`,
      article:`Autem, a magni vero consectetur voluptates voluptas eaque alias
      quod saepe tempora consequuntur ratione doloremque cumque reprehenderit quasi exercitationem
      quaerat velit nihil eum aliquam beatae. Nesciunt aperiam voluptatum harum tempora facere
      sit dolorum dolores culpa voluptatem, porro et suscipit rerum aut deleniti, asperiores,
      ratione possimus perspiciatis officiis. Incidunt ratione libero aspernatur fugit omnis
      iusto in provident nemo consequatur, veniam voluptatem blanditiis beatae?
      Doloribus dignissimos hic, itaque velit a cupiditate ab veritatis.
      Dolor amet magni, reprehenderit ut numquam eum voluptas aut ipsum hic adipisci
      officiis tenetur nihil iure assumenda harum sunt corporis accusamus libero velit.
      Iure eligendi consequatur deleniti eveniet placeat non soluta culpa.`,
      source:`numquam.com`,
      dateCreated:new Date(),
      tags:['delectus','ipsam', 'assumenda','nihil'],
      img:`assets/images/small_01.jpg`
    },
    {
      id:4,
      title:`Saepe velit iure cumque accusantium eligendi,
      fuga id temporibus possimus autem porro.`,
      article:`Laboriosam dicta ipsum, maxime, quibusdam blanditiis ratione alias labore
      modi molestias nisi perspiciatis? Sapiente accusantium suscipit veniam deleniti
       distinctio tenetur assumenda odit ullam asperiores inventore. Accusamus saepe
      dicta quidem repellendus reprehenderit, veniam assumenda beatae ducimus et voluptatibus
      a quas magni, aliquam fugit doloribus enim. Quae corrupti assumenda exercitationem,
      soluta suscipit quia excepturi error numquam ipsa aspernatur hic a illum neque ducimus s
      it velit qui veniam aliquam laborum iure fugiat voluptatem? Eius amet blanditiis illo
      asperiores vitae nihil obcaecati numquam corrupti, aspernatur consectetur velit,
      similique dolore adipisci officia accusantium repudiandae nostrum excepturi nisi quam,
      nam placeat..`,
      source:`similique.com`,
      dateCreated:new Date(),
      tags:['fuga','laborum', 'perspiciatis','cupiditate'],
      img:`assets/images/small_01.jpg`
    },
    {
      id:5,
      title:`Corporis iusto, hic tenetur, aspernatur impedit.`,
      article:`Asperiores dignissimos doloribus quo recusandae autem qui, officiis non eos, est
      fugiat corporis mollitia accusantium nam placeat et adipisci sunt tempora impedit
      obcaecati neque ut. Harum vero dolores quidem molestias, aliquid tempora delectus
      amet eius incidunt. Odit molestiae atque laboriosam voluptate assumenda incidunt,
      cumque tempore, quibusdam esse corrupti exercitationem maiores quis similique cum tenetur
      aliquid? Sequi aspernatur perspiciatis ut perferendis rem. Tempore quae illo quis
      quidem totam recusandae veniam consequatur harum hic consequuntur tenetur, natus quaerat,
      laudantium ratione. Magnam pariatur corporis adipisci enim vitae voluptas a quibusdam
      ducimus assumenda expedita vel laudantium eaque sunt doloribus dicta quae, vero beatae
      numquam eveniet esse? Autem, a magni vero consectetur voluptates voluptas eaque alias
      quod saepe tempora consequuntur ratione doloremque cumque reprehenderit quasi exercitationem
      quaerat velit nihil eum aliquam beatae. Nesciunt aperiam voluptatum harum tempora facere
      sit dolorum dolores culpa voluptatem, porro et suscipit rerum aut deleniti, asperiores,
      ratione possimus perspiciatis officiis. Incidunt ratione libero aspernatur fugit omnis
      iusto in provident nemo consequatur, veniam voluptatem blanditiis beatae?
      Doloribus dignissimos hic, itaque velit a cupiditate ab veritatis.
      Dolor amet magni, reprehenderit ut numquam eum voluptas aut ipsum hic adipisci
      officiis tenetur nihil iure assumenda harum sunt corporis accusamus libero velit.
      Iure eligendi consequatur deleniti eveniet placeat non soluta culpa laboriosam porro
      aliquid laudantium dignissimos iste eaque rerum excepturi, recusandae, vitae quos
      corrupti officiis quo. Ab cum, labore minima rem animi consectetur perferendis.
      Tempore, facilis enim doloremque et in voluptatem ducimus corporis aliquid consequatur
      quod amet nostrum ut sapiente explicabo minus.`,
      source:`veniam.com`,
      dateCreated:new Date(),
      tags:['enim','natus', 'nobis','officia'],
      img:`assets/images/small_01.jpg`
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

