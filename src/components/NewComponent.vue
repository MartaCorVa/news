<template>

    <h2 class="text-uppercase text-center mt-4" >{{ title }}</h2>
    <h3 class="text-end mt-2">{{ date }}</h3> 
    <h3 class="text-center mt-2">{{ description }}</h3>
  

    <p>{{ content }}</p>
    <h4 class="text-end mt-2 mb-4 fst-italic">{{ author }}</h4>
    <hr>

</template>

<script>

export default {

    props: {
        new: {
            type: Object,
            required: true
        }
    },

    computed: {
        title() {
            return this.new.title
        },
        date() {
            return this.new.date
        },
        description() {
            return this.new.description
        },
        content() {
            return this.new.content
        },
        author() {
            return this.new.author
        }
    }

}
</script>

<style lang="scss" scoped>

h2 {
    font-family: 'LibreBaskerville';
    font-size: 2.5vw;
    letter-spacing: 15px;
}

h3 {
    font-family: 'LibreBaskerville';
    font-size: 1.2vw;
}

h4 {
    font-family: 'LibreBaskerville';
    font-size: .8vw;  
}

p {
    font-family: 'LibreBaskerville';
    font-size: .8vw;  
}

hr {
    height: 5px;
}

</style>