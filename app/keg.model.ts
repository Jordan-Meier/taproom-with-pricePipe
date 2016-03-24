export class Keg {
  public pintsRemaining: number = 124;
  public pintPrice: number = 5;

  constructor(public brewery: string, public brewName: string, public id: number, public alcPercent: number){}
}
