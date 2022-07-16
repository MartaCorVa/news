

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

export const deleteNew =  (state, id) => {

    state.archivedNews = state.archivedNews.filter( t => t._id != id )

}

export const archiveNew =  (state, id) => {

    state.archivedNews = [ ...state.archivedNews, state.news.find( t => t._id == id ) ] 
    state.news = state.news.filter( t => t._id != id )

}

