<template>

    <h2 class="text-uppercase text-center mt-4" >{{ title }}</h2>
    <h3 class="text-end mt-2">{{ date }}</h3> 
    <h3 class="text-center mt-2">{{ description }}</h3>
  

    <p>{{ content }}</p>
    <h4 class="text-end mt-2 mb-4 fst-italic">{{ author }}</h4>
    <h4 v-if="archiveDate" class="text-end mt-2 mb-4 fst-italic">Archived at {{ archiveDate }}</h4>
    <button>
        <i v-if="archiveDate" 
            class="fa fa-trash"
            @click="removeNew"
            >
                <span class="ms-2">Remove</span>
        </i>
        <i v-else 
            class="fa fa-box-archive"
            @click="archiveNewSelected"
            >
                <span class="ms-2">Archive</span>
        </i>
    </button>
    <hr>

</template>

<script>
import Swal from 'sweetalert2'
import { mapActions } from 'vuex'

export default {

    data() {
        return {
            page: true
        }
    },

    props: {
        new: {
            type: Object,
            required: true
        }
    },

    computed: {

        _id() {
            return this.new._id
        },
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
        },
        archiveDate() {
            return this.new.archiveDate
        }

    },

    methods: {
        ...mapActions( 'newsModule', [ 'deleteNew',
                                       'archiveNew' ] ),

        async removeNew() {
            const { isConfirmed } = await Swal.fire({
                title: 'Are you sure?',
                text: 'Once deleted, it cannot be recovered',
                showDenyButton: true,
                confirmButtonText: "Yes, I'm sure" 
            })

            if ( isConfirmed ) {
                new Swal({
                    title: 'Please wait',
                    allowOutsideClick: false
                })
                Swal.showLoading()
                await this.deleteNew( this._id )

                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'The news has been successfully removed.',
                    showConfirmButton: false,
                    timer: 1500
                })
            }
        },

        async archiveNewSelected() {
            new Swal( {
                title: 'Please wait',
                allowOutsideClick: false
            } )

            Swal.showLoading()
            
            await this.archiveNew( this._id )
           
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'The news has been successfully archived.',
                showConfirmButton: false,
                timer: 1500
            })
            
        },

    }

}
</script>

<style lang="scss" scoped>

h2 {
    font-family: 'LibreBaskerville';
    font-size: 2.5vw;
    letter-spacing: 10px;
}

h3 {
    font-family: 'LibreBaskerville';
    font-size: 1.2vw;
}

h4, span {
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

button {
    border-width: 0;
    background-color: rgba(0, 0, 0, 0);
}

</style>