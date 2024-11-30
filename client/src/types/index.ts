import { ReactNode, SyntheticEvent } from 'react'

export type children = string | ReactNode | ReactNode[]

export interface LoadEvent<T = Element> extends SyntheticEvent<T> {
  target: EventTarget & T;
}
