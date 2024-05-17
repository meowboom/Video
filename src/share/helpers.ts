import { FILMS } from "../widget/FilmCards/data";
import { SortBtn } from "../widget/MainBody/MainBody";

// Доработать сортировку

export const sortByParams = (variant: SortBtn) => {
  FILMS.sort((a, b) => {
    switch (variant) {
      //   case variant === SortBtn.lettersUp:
      //     return b.title - a.title;
      //     break;
      //   case variant === SortBtn.lettersDown:
      //     return a.title - b.title;
      //     break;
      case SortBtn.yearUp:
        return b.year - a.year;
        break;
      case SortBtn.yearDown:
        return a.year - b.year;
        break;
      case SortBtn.ratingUp:
        return b.rate - a.rate;
        break;
      case SortBtn.ratingDown:
        return a.rate - b.rate;
        break;
      //   case variant === SortBtn.favorite:
      //     return b.favorite - a.favorite;
      //     break;
      default:
        break;
    }
  });
};
