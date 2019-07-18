export default interface Action<M, P> {
    type: string;
    meta?: M;
    payload?: P;
}