// Create a file to hold your Zustand store, for example, store.js
import {create} from 'zustand';

const useOrderStore = create((set) => ({
  orderDetails: null,
  merchantMetadata: null,
  promoCode: '1',
  appliedPromo: false,
  total: 0,
  orderamount: 0,
  payment: "UPI",
  setOrderDetails: (orderDetails) => set({ orderDetails }),
  setMerchantMetadata: (merchantMetadata) => set({ merchantMetadata }),
  setPromoCode: (promoCode) => set({ promoCode }),
  setAppliedPromo: (appliedPromo) => set({ appliedPromo }),
  setTotal: (total) => set({ total }),
  setOrderAmount: (orderamount) => set({ orderamount }),
  setPayment: (payment) => set({payment})
  // Other actions you might need
}));

export default useOrderStore;
