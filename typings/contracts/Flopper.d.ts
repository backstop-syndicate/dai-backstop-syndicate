/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractTransaction, EventFilter, Signer } from "ethers";
import { Listener, Provider } from "ethers/providers";
import { Arrayish, BigNumber, BigNumberish, Interface } from "ethers/utils";
import {
  TransactionOverrides,
  TypedEventDescription,
  TypedFunctionDescription
} from ".";

interface FlopperInterface extends Interface {
  functions: {
    beg: TypedFunctionDescription<{ encode([]: []): string }>;

    bids: TypedFunctionDescription<{ encode([]: [BigNumberish]): string }>;

    gem: TypedFunctionDescription<{ encode([]: []): string }>;

    kicks: TypedFunctionDescription<{ encode([]: []): string }>;

    live: TypedFunctionDescription<{ encode([]: []): string }>;

    pad: TypedFunctionDescription<{ encode([]: []): string }>;

    tau: TypedFunctionDescription<{ encode([]: []): string }>;

    ttl: TypedFunctionDescription<{ encode([]: []): string }>;

    vat: TypedFunctionDescription<{ encode([]: []): string }>;

    vow: TypedFunctionDescription<{ encode([]: []): string }>;

    wards: TypedFunctionDescription<{ encode([]: [string]): string }>;

    rely: TypedFunctionDescription<{ encode([usr]: [string]): string }>;

    deny: TypedFunctionDescription<{ encode([usr]: [string]): string }>;

    file: TypedFunctionDescription<{
      encode([what, data]: [Arrayish, BigNumberish]): string;
    }>;

    kick: TypedFunctionDescription<{
      encode([gal, lot, bid]: [string, BigNumberish, BigNumberish]): string;
    }>;

    tick: TypedFunctionDescription<{ encode([id]: [BigNumberish]): string }>;

    dent: TypedFunctionDescription<{
      encode([id, lot, bid]: [
        BigNumberish,
        BigNumberish,
        BigNumberish
      ]): string;
    }>;

    deal: TypedFunctionDescription<{ encode([id]: [BigNumberish]): string }>;

    cage: TypedFunctionDescription<{ encode([]: []): string }>;

    yank: TypedFunctionDescription<{ encode([id]: [BigNumberish]): string }>;
  };

  events: {
    Kick: TypedEventDescription<{
      encodeTopics([id, lot, bid, gal]: [
        null,
        null,
        null,
        string | null
      ]): string[];
    }>;

    LogNote: TypedEventDescription<{
      encodeTopics([sig, usr, arg1, arg2, data]: [
        Arrayish | null,
        string | null,
        Arrayish | null,
        null,
        null
      ]): string[];
    }>;
  };
}

export class Flopper extends Contract {
  connect(signerOrProvider: Signer | Provider | string): Flopper;
  attach(addressOrName: string): Flopper;
  deployed(): Promise<Flopper>;

  on(event: EventFilter | string, listener: Listener): Flopper;
  once(event: EventFilter | string, listener: Listener): Flopper;
  addListener(eventName: EventFilter | string, listener: Listener): Flopper;
  removeAllListeners(eventName: EventFilter | string): Flopper;
  removeListener(eventName: any, listener: Listener): Flopper;

  interface: FlopperInterface;

  functions: {
    beg(): Promise<BigNumber>;

    bids(
      arg0: BigNumberish
    ): Promise<{
      bid: BigNumber;
      lot: BigNumber;
      guy: string;
      tic: number;
      end: number;
      0: BigNumber;
      1: BigNumber;
      2: string;
      3: number;
      4: number;
    }>;

    gem(): Promise<string>;

    kicks(): Promise<BigNumber>;

    live(): Promise<BigNumber>;

    pad(): Promise<BigNumber>;

    tau(): Promise<number>;

    ttl(): Promise<number>;

    vat(): Promise<string>;

    vow(): Promise<string>;

    wards(arg0: string): Promise<BigNumber>;

    rely(
      usr: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    deny(
      usr: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    file(
      what: Arrayish,
      data: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    kick(
      gal: string,
      lot: BigNumberish,
      bid: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    tick(
      id: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    dent(
      id: BigNumberish,
      lot: BigNumberish,
      bid: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    deal(
      id: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    cage(overrides?: TransactionOverrides): Promise<ContractTransaction>;

    yank(
      id: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;
  };

  beg(): Promise<BigNumber>;

  bids(
    arg0: BigNumberish
  ): Promise<{
    bid: BigNumber;
    lot: BigNumber;
    guy: string;
    tic: number;
    end: number;
    0: BigNumber;
    1: BigNumber;
    2: string;
    3: number;
    4: number;
  }>;

  gem(): Promise<string>;

  kicks(): Promise<BigNumber>;

  live(): Promise<BigNumber>;

  pad(): Promise<BigNumber>;

  tau(): Promise<number>;

  ttl(): Promise<number>;

  vat(): Promise<string>;

  vow(): Promise<string>;

  wards(arg0: string): Promise<BigNumber>;

  rely(
    usr: string,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  deny(
    usr: string,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  file(
    what: Arrayish,
    data: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  kick(
    gal: string,
    lot: BigNumberish,
    bid: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  tick(
    id: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  dent(
    id: BigNumberish,
    lot: BigNumberish,
    bid: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  deal(
    id: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  cage(overrides?: TransactionOverrides): Promise<ContractTransaction>;

  yank(
    id: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  filters: {
    Kick(id: null, lot: null, bid: null, gal: string | null): EventFilter;

    LogNote(
      sig: Arrayish | null,
      usr: string | null,
      arg1: Arrayish | null,
      arg2: null,
      data: null
    ): EventFilter;
  };

  estimate: {
    beg(): Promise<BigNumber>;

    bids(arg0: BigNumberish): Promise<BigNumber>;

    gem(): Promise<BigNumber>;

    kicks(): Promise<BigNumber>;

    live(): Promise<BigNumber>;

    pad(): Promise<BigNumber>;

    tau(): Promise<BigNumber>;

    ttl(): Promise<BigNumber>;

    vat(): Promise<BigNumber>;

    vow(): Promise<BigNumber>;

    wards(arg0: string): Promise<BigNumber>;

    rely(usr: string): Promise<BigNumber>;

    deny(usr: string): Promise<BigNumber>;

    file(what: Arrayish, data: BigNumberish): Promise<BigNumber>;

    kick(gal: string, lot: BigNumberish, bid: BigNumberish): Promise<BigNumber>;

    tick(id: BigNumberish): Promise<BigNumber>;

    dent(
      id: BigNumberish,
      lot: BigNumberish,
      bid: BigNumberish
    ): Promise<BigNumber>;

    deal(id: BigNumberish): Promise<BigNumber>;

    cage(): Promise<BigNumber>;

    yank(id: BigNumberish): Promise<BigNumber>;
  };
}
