import { Injectable } from '@angular/core';
import { Category } from './category';

@Injectable()
export class CategoryDataService {

    lastid = 0;
    categories: Category[] = [{id:0,name:'ddd'}];

    constructor() { }

    addCategory(category: Category): CategoryDataService {
        if (!category.id) {
            category.id = ++this.lastid;
        }
        this.categories.push(category);
        return this;
    }

    deleteCategoryById(id: number): CategoryDataService {
        this.categories = this.categories.filter(category => category.id != id);
        return this;
    }
    getAllCategories():Category[]{
        return this.categories;
    }
    getCategoryById(id: number) {
        return this.categories.filter(category => category.id === id).pop();

    }
    updateCategoryById(id: number, values: object = {}): Category | any {
        const category = this.getCategoryById(id);
        if (!category)
            return category;
        Object.assign(category, values);
        return category;
    }
    

}