

import newsApi from '@/api/newsAPI'

export const loadOrderedNews = async ( { commit } ) => {

    const { data } = await newsApi.get( '/news' )

    if ( !data ) {
        commit( 'setNews', [] )
        return
    }

    const news = []
    for ( let id of Object.keys( data ) ) {
        news.push({
            id,
            ...data[ id ]
        })
    }

    commit( 'setNews', news )

}

