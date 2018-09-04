<template>
    <div>
        <h2>Détails de l'utilisateur {{this.$route.params.id}}</h2>
        <p>
            <!--id: {{usr.id}}, nom: {{usr.name}}, username: {{usr.username}}, email: {{usr.email}}, rue: {{usr.address.street}}, suite: {{usr.address.suite}}, ville: {{usr.address.city}}, code postal: {{usr.address.zipcode}}, latitude: {{usr.geo.lat}}, longitude: {{usr.geo.lng}}, téléphone: {{usr.phone}}, site web: {{usr.website}}, société: {{usr.company.name}}, slogan: {{usr.company.catchPhrase}}, bs: {{usr.company.bs}} <br>
            <button v-on:click="acceptInvitation">accept. invit.</button>-->
        </p>
        <p><router-link to="/users">Retour</router-link></p>
    </div>
</template>

<script>
    export default {
        name: 'user-details',
        props: ['usr'],
        methods: {
            acceptInvitation: function() {
                this.$emit('accept');
            }
        },
        data () {
            return {
                usersUrl: 'https://jsonplaceholder.typicode.com/users/',
                user: null,
                usersWhoWillCome: []
            }
        }
    }
</script>

<style>

</style>