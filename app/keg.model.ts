export class Keg {
  public pintsRemaining: number = 124;

  constructor(public pintPrice: number, public brewery: string, public brewName: string, public id: number, public alcPercent: number){}
}
