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

interface DSAuthInterface extends Interface {
  functions: {
    authority: TypedFunctionDescription<{ encode([]: []): string }>;

    owner: TypedFunctionDescription<{ encode([]: []): string }>;

    setOwner: TypedFunctionDescription<{ encode([owner_]: [string]): string }>;

    setAuthority: TypedFunctionDescription<{
      encode([authority_]: [string]): string;
    }>;
  };

  events: {
    LogSetAuthority: TypedEventDescription<{
      encodeTopics([authority]: [string | null]): string[];
    }>;

    LogSetOwner: TypedEventDescription<{
      encodeTopics([owner]: [string | null]): string[];
    }>;
  };
}

export class DSAuth extends Contract {
  connect(signerOrProvider: Signer | Provider | string): DSAuth;
  attach(addressOrName: string): DSAuth;
  deployed(): Promise<DSAuth>;

  on(event: EventFilter | string, listener: Listener): DSAuth;
  once(event: EventFilter | string, listener: Listener): DSAuth;
  addListener(eventName: EventFilter | string, listener: Listener): DSAuth;
  removeAllListeners(eventName: EventFilter | string): DSAuth;
  removeListener(eventName: any, listener: Listener): DSAuth;

  interface: DSAuthInterface;

  functions: {
    authority(): Promise<string>;

    owner(): Promise<string>;

    setOwner(
      owner_: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    setAuthority(
      authority_: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;
  };

  authority(): Promise<string>;

  owner(): Promise<string>;

  setOwner(
    owner_: string,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  setAuthority(
    authority_: string,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  filters: {
    LogSetAuthority(authority: string | null): EventFilter;

    LogSetOwner(owner: string | null): EventFilter;
  };

  estimate: {
    authority(): Promise<BigNumber>;

    owner(): Promise<BigNumber>;

    setOwner(owner_: string): Promise<BigNumber>;

    setAuthority(authority_: string): Promise<BigNumber>;
  };
}
