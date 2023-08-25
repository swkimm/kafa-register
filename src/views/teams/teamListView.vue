<template>
  <BannerItem></BannerItem>
  <div class="text-black py-20 w-full h-full flex flex-col items-center text-center">
    <div class="max-w-screen-md font-extrabold text-3xl mb-10">서울 협회 등록 팀</div>
    <div class="max-w-screen-xl grid grid-cols-1 md:grid-cols-2 gap-8 px-8 md:px-20">
      <div v-for="team in seoulTeams" :key="team.id">
        <TeamItem
          :teamName="team.teamName"
          :teamSubName="team.teamSubName"
          :teamAssociation="team.teamAssociation"
          :teamHistory="team.teamHistory"
          :teamImgUrl="team.imageUrl"
        />
      </div>
    </div>
    <div class="max-w-screen-md font-extrabold text-3xl mb-10 mt-20">경기강원 협회 등록 팀</div>
    <div class="max-w-screen-xl grid grid-cols-1 md:grid-cols-2 gap-8 px-8 md:px-20">
      <div v-for="team in ggTeams" :key="team.id">
        <TeamItem
          :teamName="team.teamName"
          :teamSubName="team.teamSubName"
          :teamAssociation="team.teamAssociation"
          :teamHistory="team.teamHistory"
          :teamImgUrl="team.imageUrl"
        />
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import BannerItem from '@/components/bannerItem.vue'
import TeamItem from '@/views/teams/teamItem.vue'
import { ref } from 'vue'

const seoulTeams = ref([
  {
    id: 1,
    imageUrl: '/images/playprove.png',
    teamName: '건국대학교',
    teamSubName: 'RAGING BULLS',
    teamAssociation: '서울미식축구협회',
    teamHistory:
      '건국대학교 미식축구부는 2008년 1월 8일 임의 창단을 거쳐, 대한미식축구협회의 인가를 받아 2009년 5월 27일 정식으로 창단했으며, 2010년 춘계 프리웨이볼 개막전부터 정식으로 리그에 참가하기 시작했다.'
  },
  {
    id: 2,
    imageUrl: '/images/playprove.png',
    teamName: '고려대학교',
    teamSubName: 'TIGERS',
    teamAssociation: '서울미식축구협회',
    teamHistory:
      '1962년 창단된 고려대 미식축구부는 지금(2010년)까지 우승 24회, 준우승 20회로 수많은 대회에서 탁월한 성적을 유지해 온 미식축구 전통 명문팀입니다. 특유의 끈끈한 팀웍과 아마추어리즘에 입각한 성실한 팀플레이로 매 경기 최선을 다하고있습니다. 해외 교류경기, OB팀 활동등 항상 선구적인 모습을 보이고 있는 고려대 미식축구부는 자만하지 않고 항상 새로운 도전을 기다리고 있습니다.'
  },
  {
    id: 3,
    imageUrl: '/images/playprove.png',
    teamName: '국민대학교',
    teamSubName: 'RAZORBACKS',
    teamAssociation: '서울미식축구협회',
    teamHistory: '...'
  },
  {
    id: 4,
    imageUrl: '/images/playprove.png',
    teamName: '동국대학교(서울)',
    teamSubName: 'TUSKERS',
    teamAssociation: '서울미식축구협회',
    teamHistory: '...'
  },
  {
    id: 5,
    imageUrl: '/images/playprove.png',
    teamName: '서강대학교',
    teamSubName: 'ALBATROSS',
    teamAssociation: '서울미식축구협회',
    teamHistory:
      '2019년 창단한 서강대학교의 미식축구팀이다. 경북대 출신 감독님 및 코치진 아래에서 체계적이고 강도 높은 훈련을 진행하는 팀이다. 매경기 파이팅 넘치는 플레이를 보여주며 성장세가 뚜렷한 팀이다.'
  },
  {
    id: 6,
    imageUrl: '/images/playprove.png',
    teamName: '서울대학교',
    teamSubName: 'GREEN TERRORS',
    teamAssociation: '서울미식축구협회',
    teamHistory:
      '대한민국 지성의 전당인 서울대학교에서 미식축구를 한다는 것은 상당히 의미있는 일입니다. 고등학교때까지 공부벌레였던 학생들이 대학에서 농밀한 땀을 흘리면서 우승을 향해 전진한다는 것만큼 열정적이고 흥분되는 일이 없기 때문입니다. 비록 달리기도 늦고 운동신경도 둔하지만 체계적인 운동과 꾸준한 트레이닝을 통해 자신을 도야하고 팀을 강하게 만드는 것은 분명 서울대학교 미식축구부원만이 느낄 수 있는 강한 희열일 것입니다.'
  },
  {
    id: 7,
    imageUrl: '/images/playprove.png',
    teamName: '서울시립대학교',
    teamSubName: 'CITY HAWKS',
    teamAssociation: '서울미식축구협회',
    teamHistory:
      '배봉산의 정기를 받으면서 오늘도 열심히 운동하고 있는 저희 서울 시립대학교 미식축구부는 1985년 창단 이래 지금까지 꾸준히 발전해 왔습니다. 승리를 위해 꾸준히 노력하고, 항상 진지하게 경기에 임하며, 결과보다는 과정을 더 중요하게 여기는 정신은 창단 이래 지금까지 변함없이 이어져 오고 있습니다. 언제나 패기넘치고 정열적인 모습의 서울시립대 미식축구부가 되겠습니다.'
  },
  {
    id: 8,
    imageUrl: '/images/playprove.png',
    teamName: '성균관대학교',
    teamSubName: 'ROYALS',
    teamAssociation: '서울미식축구협회',
    teamHistory:
      '1957년 창단한 성균관대학교 미식축구부는 대한민국에 현존하는 최고령 팀으로서 한국 미식축구 역사에 숱한 족적을 남겨왔습니다.'
  },
  {
    id: 9,
    imageUrl: '/images/playprove.png',
    teamName: '숭실대학교',
    teamSubName: 'CRUSADERS',
    teamAssociation: '서울미식축구협회',
    teamHistory: '...'
  },
  {
    id: 10,
    imageUrl: '/images/playprove.png',
    teamName: '연세대학교',
    teamSubName: 'EAGLES',
    teamAssociation: '서울미식축구협회',
    teamHistory: '...'
  },
  {
    id: 11,
    imageUrl: '/images/playprove.png',
    teamName: '중앙대학교',
    teamSubName: 'BLUE DRAGONS',
    teamAssociation: '서울미식축구협회',
    teamHistory:
      '중앙대학교 블루드래곤즈는 1962년 창단되어 해체되었으나 1990년 재 창단된 팀으로 2000년대 한국 미식축구를 이끌어갈 신흥강호로써 어느팀에서도 찾아볼 수 없는 팀컬러로 돌풍을 일으키고 있습니다. 지금까지의 성적에 자만하지 않고 항상 새로운 것을 배운다는 마음가짐으로 매경기마다 최선을 다해 임하겠습니다. 여기 진정한 멋진 남자들이 우승 트로피를 향해 달려가고 있습니다. 여의주를 입에 물고 승천하는 청룡의 당찬 모습 기대하셔도 좋습니다. 중앙대학교 미식축구부 화이팅!!'
  },
  {
    id: 12,
    imageUrl: '/images/playprove.png',
    teamName: '한국외국어대학교',
    teamSubName: 'BLACK KNIGHTS',
    teamAssociation: '서울미식축구협회',
    teamHistory:
      '1992년 이른 봄 미식축구에 대한 열정만을 가지고 꽤 많은 사람들이 모였다. 우리에겐 아무것도 없었다. 가진 것은 오직 풋볼에 대한 갈망 그것 뿐이었다. 그해 겨울 처음으로 전국 동계 미식축구선수권대회에 참가한 이후 우리는 수많은 패배를 겪으면서 여러 번의 해체 위기를 넘기고 결국은 이렇게 우뚝 섰다. 1996년 우리는 서울 추계 선수권 대회에서 후발 신생팀으로서는 처음으로 4강에 진출했으며 1998년 서울 추계 선수권에서는 창단 이래 처음으로 결승전에 진출하였다. '
  },
  {
    id: 13,
    imageUrl: '/images/playprove.png',
    teamName: '한양대학교',
    teamSubName: 'LIONS',
    teamAssociation: '서울미식축구협회',
    teamHistory:
      '1962년 9월1일 故 조영팔교수, 故 박경황교수, 여종필교수 등의 체육과 교수들과 공대학생회의 지원을 받아 한양대학교 미식축구부를 창단하였으며, 1회 졸업생으로 임헌학 동문, 고병용 동문, 김종수 동문, 김성구 동문이 활약 1963년 첫 우승이래 꾸준하게 강팀으로 명성을 유지하여 왔으며, 1980년 추계대회를 시작으로 1963년까지 전국대회 3연패를 달성하고 2000년 서울시 추계대회에서 1부리그 우승을 차지하였음.'
  },
  {
    id: 14,
    imageUrl: '/images/playprove.png',
    teamName: '홍익대학교',
    teamSubName: 'COWBOYS',
    teamAssociation: '서울미식축구협회',
    teamHistory: '...'
  }
])

const ggTeams = ref([
  {
    id: 1,
    imageUrl: '/images/playprove.png',
    teamName: '강원대학교',
    teamSubName: 'CAPRA',
    teamAssociation: '경기강원미식축구협회',
    teamHistory: '...'
  },
  {
    id: 2,
    imageUrl: '/images/playprove.png',
    teamName: '단국대학교',
    teamSubName: 'KODIAK BEARS',
    teamAssociation: '경기강원미식축구협회',
    teamHistory: '...'
  },
  {
    id: 3,
    imageUrl: '/images/playprove.png',
    teamName: '용인대학교',
    teamSubName: 'WHITE TIGERS',
    teamAssociation: '경기강원미식축구협회',
    teamHistory:
      '용인대학교 미식추구부 화이트타이거스의 창단은 1992년의 일이었다. 초창기 열악한 환경에도 불구하고 미식축구에 대한 열정 하나 만으로 꾸준히 대회에 참가했다. 2000년도 서울지역 춘계리그에서 대망의 우승을 차지함으로써 미식축구 신흥강호로 군림하고 있다. 앞으로도 항상 멋진 승부를 위해 최선을 다하는 용인대학교 미식축구부가 될 것이다.'
  },
  {
    id: 4,
    imageUrl: '/images/playprove.png',
    teamName: '인하대학교',
    teamSubName: 'TEAL DRAGONS',
    teamAssociation: '경기강원미식축구협회',
    teamHistory: '...'
  },
  {
    id: 5,
    imageUrl: '/images/playprove.png',
    teamName: '한림대학교',
    teamSubName: 'PHOENIX',
    teamAssociation: '경기강원미식축구협회',
    teamHistory:
      '저희 한림대학교 미식축구부는 1993년 개척 희생 협동의 3대 정신을 기본으로하여 창단 하였습니다. 어느팀이나 마찬가지이듯 90년대 초반에는 많은 어려움이 있었으나 지금은 명실상부한 강팀의 면모를 지니고 있으며 2000 서울 추계 미식축구 대회에서는 우승을 하는 결실을 거두었습니다. 저희는 "우리는 강하다!" 라는 자심감으로 매 경기 최선을 다하며 우리의 목표인 전국제패가 이루어 질때까지는 우리의 땀과 노력이 계속 될것입니다. 지켜 봐 주시기 바랍니다.'
  },
  {
    id: 6,
    imageUrl: '/images/playprove.png',
    teamName: '한신대학교',
    teamSubName: 'KILLER WHALES',
    teamAssociation: '경기강원미식축구협회',
    teamHistory: '...'
  }
])
</script>
