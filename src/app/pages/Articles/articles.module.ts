import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticlesRoutingModule } from './articles-routing.module';
import { ArticlesComponent } from './articles.component';
import { ArticleListComponent } from './components/list/article-list.component';
import { ArticleDetailComponent } from './components/detail/article-detail.component';


@NgModule({
  declarations: [
    ArticlesComponent,
    ArticleListComponent,
    ArticleDetailComponent
  ],
  imports: [
    CommonModule,
    ArticlesRoutingModule
  ]
})
export class ArticlesModule { }
