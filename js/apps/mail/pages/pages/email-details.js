


export default {
    props: ['currEmail'],
    template: `
        <section class="email-details">
            these are the email details
            {{email}}
        </section>
    `,

    data(){
        return {
            email:this.currEmail,
        }
    },
    watch: {
        
    }
}