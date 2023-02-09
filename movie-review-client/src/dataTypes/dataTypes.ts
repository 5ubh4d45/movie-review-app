
export type Id = {
    timestamp: number;
    date: string;
};

export type ReviewData = {
    id: Id;
    body: string;
}

export type MovieData = {
    id: Id;
    imdbId: string;
    title: string;
    releaseDate: string;
    trailerLink: string;
    poster: string;
    backdrops: string[];
    genres: string[];
    reviewIds: ReviewData[]
}

