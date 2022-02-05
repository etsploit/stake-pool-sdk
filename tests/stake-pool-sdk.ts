import { Socean } from '../src';
import { strict as assert } from 'assert';

describe('test basic functionalities', () => {
  it('it initializes and gets stake pool account', async () => {
    const socean = new Socean();
    const res = await socean.getStakePoolAccount();
    console.log(res);
  });

  it('it initializes mainnet and gets stake pool account', async () => {
    const socean = new Socean('mainnet-beta');
    const res = await socean.getStakePoolAccount();
    console.log(res);
  });

//  it('it deposits sol', async () => {
//    const socean = new Socean();
//    const res = await socean.depositSol(new BN(1));
//    console.log(res);
//  });
});
