/*
Author: chankruze (chankruze@geekofia.in)
Created: Sat Oct 17 2020 14:23:02 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

const qualities = ["All", "720p", "1080p", "2160p", "3D"];

const genres = [
  "All",
  "Action",
  "Adventure",
  "Animation",
  "Biography",
  "Comedy",
  "Crime",
  "Documentary",
  "Drama",
  "Family",
  "Fantasy",
  "Film Noir",
  "History",
  "Horror",
  "Music",
  "Musical",
  "Mystery",
  "Romance",
  "Sci-Fi",
  "Short",
  "Sport",
  "Superhero",
  "Thriller",
  "War",
  "Western",
];

const sortBy = [
  "date_added",
  "title",
  "year",
  "rating",
  "peers",
  "seeds",
  "download_count",
  "like_count",
];

export let qualityOptions = [];
export let genreOptions = [];
export let minimumRatingOptions = [];
export let sortByOptions = [];
export const orderByOptions = [
  {
    label: "Descending",
    value: "desc",
  },
  {
    label: "Ascending",
    value: "asc",
  },
];

for (let i = 0; i < qualities.length; i++) {
  qualityOptions.push({
    label: qualities[i],
    value: qualities[i],
  });
}

for (let i = 0; i < genres.length; ++i) {
  genreOptions.push({
    label: genres[i],
    value: genres[i].replaceAll(" ", "-"),
  });
}

for (let i = 0; i < 10; ++i) {
  minimumRatingOptions.push({
    label: i + "+",
    value: i,
  });
}

for (let i = 0; i < sortBy.length; i++) {
  sortByOptions.push({
    label:
      sortBy[i].charAt(0).toUpperCase() +
      sortBy[i].slice(1).replaceAll("_", " "),
    value: sortBy[i],
  });
}

export const filters = [
  {
    label: "Quality",
    param: "quality",
    options: qualityOptions,
  },
  {
    label: "Genre",
    param: "genre",
    options: genreOptions,
  },
  {
    label: "Rating",
    param: "minimum_rating",
    options: minimumRatingOptions,
  },
  {
    label: "Sort By",
    param: "sort_by",
    options: sortByOptions,
  },
  {
    label: "Order By",
    param: "order_by",
    options: orderByOptions,
  },
];
