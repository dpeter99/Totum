export class CategoryModel {
  categoryId?: number | undefined;
  categoryName: string;

  constructor(data: CategoryModel) {
    this.categoryId = data.categoryId;
    this.categoryName = data.categoryName;
  }

  // static toModel(u: User): UserModel {
  //
  //     return model;
  // }
}
