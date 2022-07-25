
Vue.component("header-el", {
    data : () => {
        return {
            menuItem : [
                "animal", 
                "history", 
                "environment", 
                "science", 
                "travel",
            ]
        }
    },
    template : `
        <header>
            <div class="logo">
                <router-link to="/">
                    <img src="./img/toplogo.png" alt="로고">
                </router-link>
            </div>
            <div class="menu">
                <ul>
                    <li v-for="list in menuItem">
                        <router-link :to="'/'+list">
                            {{list}}
                        </router-link>
                    </li>
                </ul>
            </div>
            <div class="mypage">
                <ul>
                    <li>
                        <a href=""></a>
                    </li>
                    <li>
                        <a href=""></a>
                    </li>
                </ul>
            </div>
            <div class="resBtn">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </header>
    `
});

const pageMain = {
    data : () => {
        return {
            movieItem : [
                [
                    "animal.mp4",
                    "animal",
                ],
                [
                    "environment.mp4",
                    "environment",
                ],
                [
                    "history.mp4",
                    "history",
                ],
                [
                    "science.mp4",
                    "science",
                ],
                [
                    "travel.mp4",
                    "travel",
                ],
            ],
            randomIndex : Math.floor(Math.random() * 5)
        }
    },
    template : `
        <section id="main">
            <video :src="'./video/' + movieItem[randomIndex][0]" autoplay loop muted playsinline></video>
            <div class="video_dark"></div>
            <div class="wrap">
                <div class="main_cont">
                    <div class="content">
                        <img src="./img/yellowFrame.png" alt="">
                        <h2>{{movieItem[randomIndex][1]}}</h2>
                    </div>
                </div>
            </div>
        </section>
    `,
    created() {
        // 초기 화면상에 던질 수 있는 데이터를 처리하는 곳
    },
    mounted() {
        // created() 보다는 늦지만 초기 함수 구문으로 정의 할 수 있는 곳 /  제이쿼리 구문도 정의하여 적용 가능한 위치
    },
}

// data 패턴(2차 배열) = [이미지, 타이틀]
const pageAnimal = {
    data : () => {
        return {
            item : [
                [
                    "animal_news_1.jpg",
                    "animal_news_1"
                ],
                [
                    "animal_news_2.jpg",
                    "animal_news_2"
                ],
                [
                    "animal_news_3.jpg",
                    "animal_news_3"
                ],
                [
                    "animal_news_4.jpg",
                    "animal_news_4"
                ],
                [
                    "animal_news_5.jpg",
                    "animal_news_5"
                ],
                [
                    "animal_news_6.jpg",
                    "animal_news_7"
                ],
                [
                    "animal_news_7.jpg",
                    "animal_news_7"
                ],
                [
                    "animal_news_8.jpg",
                    "animal_news_8"
                ],
                [
                    "animal_news_9.jpg",
                    "animal_news_9"
                ],
                [
                    "animal_news_10.jpg",
                    "animal_news_10"
                ],
                [
                    "animal_news_11.jpg",
                    "animal_news_10"
                ],
                [
                    "animal_news_12.jpg",
                    "animal_news_11"
                ],
            ]
        }
    },
    template : `
        <section id="sub_item">
            <div class="wrap">
                <h2>animal</h2>
                <div class="content">
                    <div class="box" v-for="list in item">
                        <div class="bg_img" :style="'background-image:url(./img/animals/'+list[0]+')'"></div>
                        <div class="info">
                            <h3>{{list[1]}}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `,
}


const pageHistory = {
    data : () => {
        return {
            item : [
                [
                    "history_news_1.jpg",
                    "history_news_1"
                ],
                [
                    "history_news_2.jpg",
                    "history_news_2"
                ],
                [
                    "history_news_3.jpg",
                    "history_news_3"
                ],
                [
                    "history_news_4.jpg",
                    "history_news_4"
                ],
                [
                    "history_news_5.jpg",
                    "history_news_5"
                ],
                [
                    "history_news_6.jpg",
                    "history_news_7"
                ],
                [
                    "history_news_7.jpg",
                    "history_news_7"
                ],
                [
                    "history_news_8.jpg",
                    "history_news_8"
                ],
                [
                    "history_news_9.jpg",
                    "history_news_9"
                ],
                [
                    "history_news_10.jpg",
                    "history_news_10"
                ],
                [
                    "history_news_11.jpg",
                    "history_news_10"
                ],
                [
                    "history_news_12.jpg",
                    "history_news_11"
                ],
            ]
        }
    },
    template : `
        <section id="sub_item">
            <div class="wrap">
                <h2>history</h2>
                <div class="content">
                    <div class="box" v-for="list in item">
                        <div class="bg_img" :style="'background-image:url(./img/history/'+list[0]+')'"></div>
                        <div class="info">
                            <h3>{{list[1]}}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `,
}

const reRoutes = [
    {
        path : "/",
        component : pageMain,
    },
    {
        path : "/animal",
        component : pageAnimal,
    },
    {
        path : "/history",
        component : pageHistory,
    }
];

const router1 = new VueRouter({
    routes : reRoutes
})


const footer = {
    template : `
        <footer>
            <p>CopyRights & compy; National Gepgraphis</p>
        </footer>
    `
}

new Vue ({
    el : "#app",
    router : router1,
    components : {
        "footer-el" : footer,
    },
});



const $body = document.querySelector("body");
const $menu = document.querySelector("header .menu");
const $resBtn = document.querySelector("header .resBtn");

// 반응형 메뉴 리스트 클릭시

const menuList = () => {
    const $menuList = document.querySelectorAll("header .menu.active li");
    for(const v of $menuList) {
        console.log(v);
        v.addEventListener("click", () => {
            $body.classList.remove("showMenu");
            $menu.classList.remove("active");
            $resBtn.classList.remove("active");
        })
    }
    const $logo = document.querySelector("body.showMenu .logo");
    $logo.addEventListener("click", () =>{
        $body.classList.remove("showMenu");
        $menu.classList.remove("active");
        $resBtn.classList.remove("active");
    })
}

// 반응형 메뉴 햄버거 아이콘 클릭시

$resBtn.addEventListener("click", function(){
    const $active_resBtn = $resBtn.classList.contains("active");
    if(!$active_resBtn){
        $body.classList.add("showMenu");
        $menu.classList.add("active");
        $resBtn.classList.add("active");
        menuList();
    } else {
        $body.classList.remove("showMenu");
        $menu.classList.remove("active");
        $resBtn.classList.remove("active");
    }
});