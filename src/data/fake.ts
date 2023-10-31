import uniqid from 'uniqid';
import { faker } from '@faker-js/faker';

export class DummyUser {
  id: string;
  name: string;
  email: string;
  constructor(name: string, email: string) {
    this.id = uniqid();
    this.name = name;
    this.email = email;
  }
}
export class DummyPantry {
  id: string;
  constructor() {
    this.id = uniqid();
  }
}
export class DummyRecipe {
  id: string;
  constructor() {
    this.id = uniqid();
  }
}
export class DummyFoodItem {
  id: string;
  name: string;
  quantity: number;
  expiry: Date;
  constructor(name: string, quantity: number, expiry: Date) {
    this.id = uniqid();
    this.name = name;
    this.quantity = quantity;
    this.expiry = expiry;
  }
}

export function generateDummyUsers(quantity: number) {
  let result = [];
  for (let i = 0; i < quantity; i++) {
    result.push(
      new DummyUser(faker.person.firstName(), faker.internet.email())
    );
  }
  return result;
}

export function generateDummyPantries(quantity: number) {
  let result = [];
  for (let i = 0; i < quantity; i++) {
    result.push(new DummyPantry());
  }
  return result;
}

export function generateDummyRecipe(quantity: number) {
  let result = [];
  for (let i = 0; i < quantity; i++) {
    result.push(new DummyRecipe());
  }
  return result;
}
export function generateDummyFoodItem(quantity: number) {
  let result = [];
  for (let i = 0; i < quantity; i++) {
    result.push(
      new DummyFoodItem(
        faker.commerce.product(),
        faker.number.int(999),
        faker.date.soon()
      )
    );
  }
  return result;
}
