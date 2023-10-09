import { create } from 'zustand'

interface IDevicesStore {
  devicesStatus: string[],
  setDevicesStatus: (array: string[]) => void,
}

const useDeviceStore = create<IDevicesStore>((set) => ({
  devicesStatus: [],
  setDevicesStatus: (state) => set({ devicesStatus: state }),
}))

export default useDeviceStore;