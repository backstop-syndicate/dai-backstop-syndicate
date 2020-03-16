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

interface DSNoteInterface extends Interface {
  functions: {};

  events: {};
}

export class DSNote extends Contract {
  connect(signerOrProvider: Signer | Provider | string): DSNote;
  attach(addressOrName: string): DSNote;
  deployed(): Promise<DSNote>;

  on(event: EventFilter | string, listener: Listener): DSNote;
  once(event: EventFilter | string, listener: Listener): DSNote;
  addListener(eventName: EventFilter | string, listener: Listener): DSNote;
  removeAllListeners(eventName: EventFilter | string): DSNote;
  removeListener(eventName: any, listener: Listener): DSNote;

  interface: DSNoteInterface;

  functions: {};

  filters: {};

  estimate: {};
}
