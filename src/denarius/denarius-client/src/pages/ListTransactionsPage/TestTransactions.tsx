import { TransactionService } from "denarius-client-api";

interface Transactions {
  id: number;
  date: Date;
  shop: string;
  category: string;
  description: string;
  amount: number;
  user: string;
  isCommon: boolean;
  cardType: string;
}

export const categories = {
  Groceries: "Groceries",
  Food: "Food",
  FoodDelivery: "Food Delivery",
  Rent: "Rent",
  Travel: "Travel",
  Medicine: "Medicine",
  Electronics: "Electronics",
  Furniture: "Furniture",
  Vacation: "Vacation",
  Income: "Income",
  Banking: "Banking",
  Investment: "Investment",
  Other: "Other",
};

export const cardTypes = {
  MainDebit: "Main Debit Card",
  Szep: "SZÉP",
  Egeszseg: "Egészség",
  Revolut: "Revolut",
};

export const users = {
  Lau: "Lau",
  Peter: "Peter",
};

let trans = TransactionService.getApiV1Transaction({});

export const testTransactions: Transactions[] = [
  {
    id: 1,
    date: new Date("2023.10.31"),
    shop: "Papír írószer",
    category: categories.Other,
    description: "-",
    amount: -2630,
    user: users.Lau,
    isCommon: true,
    cardType: cardTypes.MainDebit,
  },
  {
    id: 2,
    date: new Date("2023.11.08"),
    shop: "rent",
    category: categories.Rent,
    description: "-",
    amount: -100000,
    user: users.Lau,
    isCommon: true,
    cardType: cardTypes.MainDebit,
  },
  {
    id: 3,
    date: new Date("2023.11.05"),
    shop: "Wolt",
    category: categories.FoodDelivery,
    description: "-",
    amount: -5864,
    user: users.Lau,
    isCommon: true,
    cardType: cardTypes.Szep,
  },
  {
    id: 4,
    date: new Date("2023.12.12"),
    shop: "Alle Gyógyszertár",
    category: categories.Medicine,
    description: "feketenadálytő krém",
    amount: -1129,
    user: users.Lau,
    isCommon: true,
    cardType: cardTypes.Egeszseg,
  },
  {
    id: 5,
    date: new Date("2023.10.28"),
    shop: "MvM Áram",
    category: categories.Rent,
    description: "-",
    amount: -6708,
    user: users.Peter,
    isCommon: true,
    cardType: cardTypes.MainDebit,
  },
  {
    id: 6,
    date: new Date("2023.12.22"),
    shop: "Clario Clinical Kft.",
    category: categories.Income,
    description: "Salary",
    amount: 630060,
    user: users.Lau,
    isCommon: false,
    cardType: cardTypes.MainDebit,
  },
  {
    id: 7,
    date: new Date("2023.11.08"),
    shop: "rent",
    category: categories.Rent,
    description: "-",
    amount: -100000,
    user: users.Lau,
    isCommon: true,
    cardType: cardTypes.MainDebit,
  },
  {
    id: 8,
    date: new Date("2023.10.31"),
    shop: "Lidl",
    category: categories.Groceries,
    description: "-",
    amount: -19897,
    user: users.Peter,
    isCommon: true,
    cardType: cardTypes.MainDebit,
  },
  {
    id: 9,
    date: new Date("2023.10.29"),
    shop: "Lidl",
    category: categories.Groceries,
    description: "-",
    amount: -17069,
    user: users.Peter,
    isCommon: true,
    cardType: cardTypes.MainDebit,
  },
  {
    id: 10,
    date: new Date("2023.12.15"),
    shop: "Green Papir",
    category: categories.Other,
    description: "Beer photo",
    amount: -2195,
    user: users.Lau,
    isCommon: true,
    cardType: cardTypes.MainDebit,
  },
  {
    id: 11,
    date: new Date("2024.01.05"),
    shop: "OTP Ertekszamla",
    category: categories.Investment,
    description: "recurring",
    amount: -50000,
    user: users.Lau,
    isCommon: false,
    cardType: cardTypes.MainDebit,
  },
  {
    id: 12,
    date: new Date("2024.01.25"),
    shop: "Spar",
    category: categories.Groceries,
    description: "-",
    amount: -21689,
    user: users.Lau,
    isCommon: true,
    cardType: cardTypes.MainDebit,
  },
  {
    id: 13,
    date: new Date("2023.12.30"),
    shop: "OTP",
    category: categories.Banking,
    description: "Kamatjovairas",
    amount: +75,
    user: users.Lau,
    isCommon: false,
    cardType: cardTypes.MainDebit,
  },
  {
    id: 14,
    date: new Date("2023.12.30"),
    shop: "OTP",
    category: categories.Banking,
    description: "Havi csomagdij",
    amount: -394,
    user: users.Lau,
    isCommon: false,
    cardType: cardTypes.MainDebit,
  },
];
