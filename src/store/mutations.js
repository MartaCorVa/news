

export const setNews =  ( state, news ) => {

    state.news = []
    state.news = [ ...state.news, ...news ]

}

