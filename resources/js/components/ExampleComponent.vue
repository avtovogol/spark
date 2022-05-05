<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">Example Component</div>

                    <div class="card-body">
                        I'm an example component.
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        mounted() {
            window.Echo.channel('my-channel')
                .listen('.my-event', (data) => {
                    alert(JSON.stringify(data));
                });
            console.log('Component mounted.')
        }
    }
</script>
