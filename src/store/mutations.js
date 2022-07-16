

export const setNews =  ( state, news ) => {

    state.news = []
    state.news = [ ...state.news, ...news ]

}

export const setArchivedNews =  ( state, news ) => {

    state.archivedNews = []
    state.archivedNews = [ ...state.archivedNews, ...news ]

}

export const setActualPage =  ( state, page ) => {

    state.actualPage = page

}

