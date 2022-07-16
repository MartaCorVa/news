<template>
    <div class="background">
 
        <div class="container p-5">
            <div class="text-end">
                <span class="name">2022 Marta Córcoles Valle</span>
            </div>
            <hr>
            <h1 id="title" class="fw-bold text-center text-uppercase">{{ title }}</h1>
            <hr>
            <nav class="navbar bg-dark text-light fw-bold">
                <div class="container-fluid row">
                    <div class="col-6">
                        <span>Spain, {{ date || '' }}</span>
                    </div>
                    <div class="col">
                        <button class="float-end bg-dark text-light fw-bold custom-button"
                            @click="goToNews"
                        >
                            News
                        </button>
                        <button class="float-end bg-dark text-light fw-bold custom-button"
                            @click="goToArchiveNews"
                        >
                            Archive
                        </button>
                    </div>
                </div>
            </nav>

            <div class="container">
                    <NewComponent 
                        v-for="newElement in orderedNews"
                        :key="newElement._id"
                        :new="newElement"
                    />
            </div>

            <h3 class="text-end">News Project</h3>

        </div>
    </div>
</template>
 
<script>
import { defineAsyncComponent } from 'vue'
import { mapActions, mapGetters, mapMutations} from 'vuex'

export default {

    data() {
        return {
            title: 'news'
        }
    },

    components: {
        NewComponent: defineAsyncComponent( () => import( '@/components/NewComponent.vue' ) )
    },
 
    computed: {
        ...mapGetters( 'newsModule', [ 'getNews',
                                       'getArchivedNews',
                                       'getActualPage' ] ),

        date() {
            const monthNames = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July',
            'August', 'September', 'October', 'November', 'December' ]
            const dayNames = [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday',
            'Saturday' ]

            const todayDate = new Date()

            return `${ dayNames[ todayDate.getDay() ] }, ${ monthNames[ todayDate.getMonth() ] }
            ${ todayDate.getDate() }, ${ todayDate.getFullYear() }`
        },

        orderedNews() {

            if ( this.getActualPage == 'news' ) return this.getNews
            return this.getArchivedNews

        },

    },

    methods: {
        ...mapActions( 'newsModule', [ 'loadOrderedNews',
                                        'loadArchivedNews',
                                        'countNews' ] ),

        ...mapMutations( 'newsModule', [ 'setActualPage' ] ),

        goToNews() {
            this.title = 'news'
            this.setActualPage( 'news' )
            this.loadOrderedNews()
        },

        goToArchiveNews() {
            this.title = 'archived news'
            this.setActualPage( 'archivedNews' )
            this.loadArchivedNews()
        },

        async countNewsDB() {

            let count = await this.countNews()
            const actualNews = this.orderedNews
            if ( count != actualNews.lenght ) this.goToNews()

        }

    },

    created() {
        this.goToNews()
    },

    mounted() {

        setInterval( () => {

            this.countNewsDB()

        }  , 30000)
        
    }
    
}

</script>
 
<style lang="scss" scoped>
@font-face {
      font-family: 'LibreBaskerville';
      src: local('LibreBaskerville'), url('../assets/fonts/LibreBaskerville-Regular.ttf')  format('truetype'),
}
 
h1 {
    font-family: 'LibreBaskerville';
    font-size: 5vw;
    letter-spacing: 20px;
}

h3 {
    font-family: 'consolas';
    font-size: 1.2vw;
}

span {
    font-family: 'consolas';
    font-size: .8vw;  
}
 
.background {
    padding: 3%;
    background-color: rgba(57, 48, 48, 0.074);
}
 
.container {
    background-color: #ffffff;
}
 
hr {
    height: 5px;
}
 
.name {
    font-size: 1.2vw;
}

.custom-button {
    border-width: 0;
    font-size: .8vw;
    text-transform: uppercase; 

    &:hover { 
        letter-spacing: 4px;
    }
}

</style>

