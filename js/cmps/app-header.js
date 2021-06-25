export default {
  template: `
        <div class="app-header">
            <nav>
                <div class="home-wrap">
                    <img src="img/google-home.svg" alt="">
                    <router-link to='/'>Home</router-link>
                </div>
                <div class="apps-link">

                    <div class="email-wrap">
                        <img src="img/gmail.svg" alt="">
                        <router-link to='/mail'>Mail</router-link>
                    </div>
                    <div class="keep-wrap">
                        <img src="img/google-keep.svg" alt="">
                        <router-link to='/keep'>Keep</router-link>
                    </div>
                </div>
            </nav>
        </div>
    `,
};
