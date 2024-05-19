import { FILMS } from "../widget/FilmCards/data";
import { ENUMSortBtn } from "../widget/MainBody";

export const sortByParams = (variant: ENUMSortBtn) => {
  FILMS.sort((a, b) => {
    switch (variant) {
      case ENUMSortBtn.lettersUp:
        return b.title.toLowerCase() > a.title.toLowerCase();
        break;
      case ENUMSortBtn.lettersDown:
        return a.title.toLowerCase() > b.title.toLowerCase();
        break;
      case ENUMSortBtn.yearUp:
        return b.year - a.year;
        break;
      case ENUMSortBtn.yearDown:
        return a.year - b.year;
        break;
      case ENUMSortBtn.ratingUp:
        return b.rate - a.rate;
        break;
      case ENUMSortBtn.ratingDown:
        console.log(ENUMSortBtn.ratingDown);
        return a.rate - b.rate;
        break;

      default:
        break;
    }
  });
};

export const filterByParams = () =>
  FILMS.filter(({ favorite }) => favorite === true);

