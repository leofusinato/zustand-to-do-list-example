import create from "zustand";
import produce from "immer";

type StoreProps = {
  states: {
    list: string[];
  };
  actions: {
    addItem: (item: string) => void;
    completeItem: (index: number) => void;
    clearList: () => void;
  };
};

const useList = create<StoreProps>((set, get) => {
  const setState = (fn: (a: StoreProps) => void) => set(produce(fn));

  const setList = (newList: string[]) => {
    setState(({ states }: StoreProps) => {
      states.list = newList;
    });
  };

  const getList = () => {
    return get().states.list;
  };

  return {
    states: {
      list: [],
    },
    actions: {
      addItem: (item: string) => {
        const newList = [...get().states.list, item];
        setList(newList);
      },
      completeItem: (indexToComplete: number) => {
        const newList = getList().filter(
          (_, index) => index !== indexToComplete
        );
        setList(newList);
      },
      clearList: () => {
        setList([]);
      },
    },
  };
});

export default useList;
