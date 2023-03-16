import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticlesRoutingModule } from './articles-routing.module';
import { ArticlesComponent } from './articles.component';
import { ArticleListComponent } from './components/list/article-list.component';
import { ArticleDetailComponent } from './components/detail/article-detail.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { LayoutModule } from 'src/app/layout/layout.module';


@NgModule({
  declarations: [
    ArticlesComponent,
    ArticleListComponent,
    ArticleDetailComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    ArticlesRoutingModule,
    LayoutModule
  ]
})
export class ArticlesModule { }
