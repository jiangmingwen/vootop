export interface Menu {
  id?: string;
  name: string;
  desc: string;
  noTaxPrice: number;
  taxRatio: number;
  unitPrice: number;
  onSelfDate: Date;
  categoryId: string;
  categoryName: string;
  subCategoryId: string;
  subCategoryName: string;
}
