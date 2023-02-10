import { LargeCategory } from '../enumeration/large-category';

export class Quiz {
  id: number;
  largeCategory: LargeCategory;
  question: string;
  answer: string;
  displayOrder: number;

  constructor(id: number, largeCategory: LargeCategory, question: string, answer: string, displayOrder: number){
    this.id = id;
    this.largeCategory = largeCategory;
    this.question = question;
    this.answer = answer;
    this.displayOrder = displayOrder;
  }
}
