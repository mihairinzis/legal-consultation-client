import { createFeatureSelector, ActionReducerMap } from '@ngrx/store';

export interface State {
  core: CoreState;
}

// tslint:disable-next-line
export interface CoreState {}

export const reducers: ActionReducerMap<CoreState> = {};

export const getCoreState = createFeatureSelector<CoreState>('core');
