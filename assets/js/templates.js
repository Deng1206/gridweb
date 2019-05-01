let count = 0;
export const newsTemplate = news =>`
    <div class="item--${(count++)%6+1}">
    <img src="${news.urlToImage}" alt="newsImage">
    </div>
`;