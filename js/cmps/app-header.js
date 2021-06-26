export default {
  template: `
        <div class="app-header">
            <nav>
                <div class="logo-container">
                    <img  src="img/kiwi-bird.svg" alt="">
                    <span>Appsus</span>
                </div>
                <div class="apps-link">
                    <div class="home-wrap">
                        <router-link to='/'>
                            <img src="img/google-home.svg" alt="">
                            <span>Home</span>
                        </router-link>
                    </div>
                    <div class="email-wrap">
                        <router-link to='/mail'>
                            <img src="img/gmail.svg" alt="">
                            <span>Mail</span>
                        </router-link>
                    </div>
                    <div class="keep-wrap">
                        <router-link to='/keep'>                        
                            <img src="img/google-keep.svg" alt="">
                            <span>Keep</span>
                        </router-link>
                    </div>
                </div>
            </nav>
        </div>
    `,
};
