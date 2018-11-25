import { Component, OnInit } from '@angular/core';
import {Category} from '../model/category';
import {CategoryService} from '../services/category.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  private category: Category;

  constructor(private categoryService: CategoryService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
          console.log(+params['id']);

      this.categoryService.getCategoryById(+params['id'])
        .subscribe(
          resp => {
            this.category = resp;
          }
        );
        });
  }
}
