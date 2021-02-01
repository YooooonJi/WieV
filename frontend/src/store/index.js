import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// import axios from 'axios'

export default new Vuex.Store({
  state: {
    // 로그인 정보
    isLogin: false,
    isManager: false,
    userEmail: '',

    //관리자가 선택한 현재 공고 : 
    selectRecruitTrigger : false,
    selectedRecruitNo: -1,


    //그냥 인담자, 면접관, 지원자 로그인 상황 한 변수로 통일하는 게 낫다.
    whoLogin: 'viewer', //Manager, viewer, viewee

    comData: {
      comSeq:'1',
      comName:'버즈글로벌',
      comLogo:'asdf',
      comAddress:'서울특별시 강남구 테헤란로',
      comHomepage:'https://www.naver.com',
    },
    recruitList: [{
        reSeq: '1003',
        reYear: 2021,
        reFlag: "상반기",
        reStatus: "신입",
        reStartDate: "2021-08-07",
        reEndDate: "2021-08-08",
      },
      {
        reSeq: '1002',
        reYear: 2020,
        reFlag: "하반기",
        reStatus: "신입",
        reStartDate: "2020-11-07",
        reEndDate: "2020-11-10",
      },
      {
        reSeq: '1001',
        reYear: 2020,
        reFlag: "상반기",
        reStatus: "신입",
        reStartDate: "2020-08-22",
        reEndDate: "2020-08-24",
      }
    ]
  },
  getters: {
  },


  mutations: {

    // 공고 리스트 가져오는 요청
    // 필요한 데이터 : re_seq, re_year, re_flag, re_status, re_startdate, re_enddate
    GET_RECRUITS: function (state, res) {
      console.log(state, res)

      // this.$set(state, comData, res.'회사 정보')
      // this.$set(state, recruitList, res.'공고 리스트')

      // axios.post('공고요청하는URL', state.com_seq)
      //   .then(res => {
      //     const recruits = res.data
      //     for (const recruit of recruits) {
      //       state.recruit_list.push(recruit)
      //     }
      //   })
      //   .catch(err => {
      //     console.log(err)
      //   })
    },



    //############# Schedule.vue 에서 새로 추가한 공고 store에 넣는 작업 ###################################
    ADD_RECRUIT: function (state, recruitData) {
      console.log("state의 ADD_RECRUIT실행:", state, recruitData)
      state.recruit_list.push(recruitData)
      //필요하다면, recruitData 형식을 가공해서 넣어줘야 함 

    }





  },
  actions: {
    getRecruits: function({commit}, res){
      commit('GET_RECRUITS', res)
    },

    addRecruit: function({commit}, recruitData){
      commit('ADD_RECRUIT', recruitData )
    }
  }
})
