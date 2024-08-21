import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { persist, createJSONStorage } from "zustand/middleware";

const bookStore = (set, get) => ({
  books: [],
  noOfAvailable: 0,
  noOfIssued: 0,
  addBook: (book) => {
    set((state) => ({
      books: [...state.books, { ...book, status: "available" }],
      noOfAvailable: state.noOfAvailable + 1,
    }));
  },
  removeBook:(id) => {
    const books = get().books;
    const updatedBooks = books.filter(item => item.id !== id)
    set({
      books: updatedBooks,
    });
  },
  issueBook: (id) => {
    const books = get().books;
    const updatedBooks = books?.map((book) => {
      if (book.id === id) {
        return {
          ...book,
          status: "issued",
        };
      } else {
        return book;
      }
    });
    set((state) => ({
      books: updatedBooks,
      noOfAvailable: state.noOfAvailable - 1,
      noOfIssued: state.noOfIssued + 1,
    }));
  },
  returnBook: (id) => {
    const books = get().books;
    const updatedBooks = books?.map((book) => {
      if (book.id === id) {
        return {
          ...book,
          status: "available",
        };
      } else {
        return book;
      }
    });
    set((state) => ({
      books: updatedBooks,
      noOfAvailable: state.noOfAvailable + 1,
      noOfIssued: state.noOfIssued - 1,
    }));
  },
  reset: () => {
    set({
      books: [],
      noOfAvailable: 0,
      noOfIssued: 0,
    });
  },
});

//const useBookStore = create(bookStore);
//const useBookStore = create(devtools(bookStore));
const useBookStore = create(
    persist(bookStore, {
      name: "books",
      storage: createJSONStorage(() => sessionStorage),
    })
  );

export default useBookStore;