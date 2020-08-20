export interface ISharedState {
  loading: boolean;
  counter: number;
}

export const sharedInitState: ISharedState = {
  loading: true,
  counter: 0,
};
