

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

export const loadArchivedNews = async ( { commit } ) => {

    const { data } = await newsApi.get( '/news/archived' )

    if ( !data ) {
        commit( 'setArchivedNews', [] )
        return
    }

    const news = []
    for ( let id of Object.keys( data ) ) {
        news.push({
            id,
            ...data[ id ]
        })
    }

    commit( 'setArchivedNews', news )

}

export const archiveNew = async ( { commit }, id ) => {  

    await newsApi.put( `/news/${ id }` )

    commit( 'archiveNew',  id )

}

export const deleteNew = async ( { commit }, id ) => {

    await newsApi.delete( `/news/${ id }` )

    commit( 'deleteNew', id )

    return id
}


export const countNews = async () => {

    const { data } = await newsApi.get( '/news/number' )

    if ( !data ) {
        return 0
    }

    return data

}