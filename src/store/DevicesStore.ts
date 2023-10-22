import { create } from "zustand";

const useDeviceStore = create<IDevicesStore>((set) => ({
  devices: [],
  setDevices: (devices) => set({ devices: devices }),
  updateDevice: (device) =>
    set(({ devices }) => {
      const index: number = devices.findIndex((d) => d.id == device.id);
      devices[index].status = device.status;
      return { devices };
    }),
}));

export default useDeviceStore;
