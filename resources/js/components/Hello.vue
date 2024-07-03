<template>
    <v-card>
        <v-card-title style="background-color:#FFCC80">Hello</v-card-title>
        <v-card-text>
            <p>some transcations & logics here....</p>
        </v-card-text>
    </v-card>
</template>

<script>
export default {
        created(){
            axios.get('api/employees')
            .then(res=>{
                console.log(res.data);
            }).catch(({response})=>{
                console.log(response)
            }

            )
        }
}   
</script>