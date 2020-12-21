<template>
    <div class="add-game-container">
        <button class="btn btn-secondary mb-2" data-toggle="modal" data-target="#add-game-modal">Add game</button>
        <div class="modal fade" id="add-game-modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Add game</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div v-if="errors.length" class="alert alert-danger">
                        <p class="m-0" v-for="(error, index) in errors" v-bind:key="index">{{ error }}</p>
                    </div>
                    <form>
                        <div class="form-group row">
                            <label for="title" class="col-sm-3 col-form-label">Title</label>
                            <div class="col-sm-9">
                                <input class="form-control" id="title" autocomplete="off" v-model="title">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="slug" class="col-sm-3 col-form-label">Slug</label>
                            <div class="col-sm-9">
                                <input class="form-control" id="slug" autocomplete="off" v-model="slug">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="releaseDate" class="col-sm-3 col-form-label">Release date</label>
                            <div class="col-sm-9">
                                <input type="date" class="form-control" id="releaseDate" v-model="releaseDate">
                            </div>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" ref="closeModal" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary" @click="saveGame">Add game</button>
                </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AddGame',
    data: function() {
        return {
            title: '',
            slug: '',
            releaseDate: '',
            errors: []
        }
    },
    methods: {
        saveGame() {
            this.errors = []

            if (this.title == '' || this.slug == '' || this.releaseDate == '') {
                this.errors.push('※ Every field is required.')

                return;
            }

            let game = {
                title: this.title,
                slug: this.slug,
                releaseDate: this.releaseDate,
            } 

            this.$emit('save-game', game)
            
            this.$refs.closeModal.click()
            this.title = ''
            this.slug = ''
            this.releaseDate = ''

        }
    }
}
</script>
