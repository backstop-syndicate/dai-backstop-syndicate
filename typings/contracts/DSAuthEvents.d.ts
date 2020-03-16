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

interface DSAuthEventsInterface extends Interface {
  functions: {};

  events: {
    LogSetAuthority: TypedEventDescription<{
      encodeTopics([authority]: [string | null]): string[];
    }>;

    LogSetOwner: TypedEventDescription<{
      encodeTopics([owner]: [string | null]): string[];
    }>;
  };
}

export class DSAuthEvents extends Contract {
  connect(signerOrProvider: Signer | Provider | string): DSAuthEvents;
  attach(addressOrName: string): DSAuthEvents;
  deployed(): Promise<DSAuthEvents>;

  on(event: EventFilter | string, listener: Listener): DSAuthEvents;
  once(event: EventFilter | string, listener: Listener): DSAuthEvents;
  addListener(
    eventName: EventFilter | string,
    listener: Listener
  ): DSAuthEvents;
  removeAllListeners(eventName: EventFilter | string): DSAuthEvents;
  removeListener(eventName: any, listener: Listener): DSAuthEvents;

  interface: DSAuthEventsInterface;

  functions: {};

  filters: {
    LogSetAuthority(authority: string | null): EventFilter;

    LogSetOwner(owner: string | null): EventFilter;
  };

  estimate: {};
}
