import { create } from "zustand";
import { initialItems } from "../lib/constants";
import { persist } from "zustand/middleware";

export const useItemsStore = create(persist((set) => ({
    items: initialItems,

    addItem: (newItemText) => {
        set((state) => {
                const newItems = [...state.items, newItemText];
                return {items: newItems};
        })
    },

    deleteItem: (id) => {
        set((state) => {
            const newItems = state.items.filter((item) => item.id !== id);
            return {items: newItems};
        
        })
    },

    toggleItem: (id) => {
        set((state) => {
            const newItems = state.items.map((item) => {
                if (item.id === id) {
                    return {
                        ...item,
                        packed: !item.packed,
                    };
                }
                return item;
            });
            return {items: newItems};
        })
    },

    removeAllItems: () => {
        set(() => ({items: []}));
    },

    resetToInitial: () => {
        set(() => ({items: initialItems}));
    },

    markAllAsComplete: () => {
        set(state => {
            const newItems = state.items.map((item) => {
                return {
                  ...item,
                  packed: true,
                };
              });
          
              return {items: newItems};
        })
    },

    markAllAsIncomplete: () => {
        set(state => {
            const newItems = state.items.map((item) => {
                return {
                    ...item,
                    packed: false,
                };
                });
            
                return {items: newItems};
            });
    },
}),
    {
        name: "items",
    }
));