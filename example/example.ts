import { Client } from '../src/index';

const example = async () => {
    const client = new Client('https://api.hive-engine.com/rpc');
    const balance = await client.tokens.getAccountBalances('aggroed', ['SWAP.HIVE', 'BEE']);
    console.log(balance);
};

example();
