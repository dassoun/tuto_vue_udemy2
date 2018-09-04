<template>
    <div>
        <ul>
            <li v-for="user in data">
                <user-summary v-bind:usr="user" v-on:accept="registerUser(user)"></user-summary>
            </li>
        </ul>
    </div>
</template>

<script>
    import UserSummary from './UserSummary.vue';

    export default {
        name: 'user-list',
        components: {
            'user-summary': UserSummary
        },
        props: ['data', 'usersComing'],
        methods: {
            registerUser: function(user) {
                this.usersComing.push(user);
            }
        },
        data: function() {
            return {
                usersWhoWillCome: []
            }
        }
    }
</script>

<style>

</style>