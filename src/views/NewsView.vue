<template>
    <div class="background">
 
        <div class="container p-5">
            <div class="text-end">
                <span class="name">2022 Marta Córcoles Valle</span>
            </div>
            <hr>
            <h1 class="fw-bold text-center">NEWS</h1>
            <hr>
            <nav class="navbar bg-dark text-light fw-bold">
                <div class="container-fluid row">
                    <div class="col-6">
                        <span>Spain, {{ date || '' }}</span>
                    </div>
                    <div class="col">
                        <button class="float-end bg-dark text-light fw-bold custom-button">News</button>
                        <button class="float-end bg-dark text-light fw-bold custom-button">Archive</button>
                    </div>
                </div>
            </nav>

            <div class="container">
                    <NewComponent 
                        v-for="newElement in orderedNews"
                        :key="newElement.id"
                        :new="newElement"
                    />
            </div>

            <h3 class="text-end">News Project</h3>

        </div>
    </div>
</template>
 
<script>
import { defineAsyncComponent } from 'vue'
import { mapActions, mapGetters} from 'vuex'

export default {

    components: {
        NewComponent: defineAsyncComponent( () => import( '@/components/NewComponent.vue' ) )
    },
 
    computed: {
        ...mapGetters( 'newsModule', [ 'getNews' ] ),

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
            return this.getNews
        }

    },

    methods: {
        ...mapActions( 'newsModule', [ 'loadOrderedNews' ] ),

        loadNews() {
            this.loadOrderedNews()
        }

    },

    created() {
        this.loadNews()
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
    font-size: 7.5vw;
    letter-spacing: 30px;
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
}

</style>

