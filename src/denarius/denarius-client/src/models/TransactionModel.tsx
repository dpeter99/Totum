import { Transaction } from "denarius-client-api";

export class TransactionModel {
  id?: number | undefined;
  date: Date;
  payee: string;
  category: string;
  description?: string | null;
  amount: number;
  user: string;
  isCommon: boolean;
  cardType: string;
  creationDate?: Date | null;

  constructor(data: TransactionModel) {
    this.id = data.id;
    this.date = data.date;
    this.payee = data.payee;
    this.category = data.category;
    this.description = data.description;
    this.amount = data.amount;
    this.user = data.user;
    this.isCommon = data.isCommon;
    this.cardType = data.cardType;
  }

  static toModel(t: Transaction): TransactionModel {
    let model = new TransactionModel({
      ...t,
      category: t.categoryId,
      user: t.userId,
      date: new Date(t.date),
      creationDate: new Date(t.creationDate!),
    });

    return model;
  }
}
