interface BlogItemInterface {
    title: string;
    date: string;
    imgUrl: string;
    categories: {
        slug: string;
        title: string;
    }[];
}