import { create } from "zustand";

type Status = {
  id: number;
  status: string;
};

interface IStatusStore {
  statusList: Status[];
  setStatusList: (id: number, status: string) => void;
}

const useStatusStore = create<IStatusStore>((set) => ({
  statusList: [],
  setStatusList: (id, status) =>
    set(({ statusList }) => {
      const index: number = statusList.findIndex((d) => d.id == id);
      if (index < 0) {
        statusList.push({ id, status });
      } else {
        statusList[index].status = status;
      }
      return { statusList };
    }),
}));

export default useStatusStore;
