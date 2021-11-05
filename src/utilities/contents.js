/*
  path: 라우팅될 경로
  imagePath: 카드에 표시될 이미지(또는 색상)(images/name.jpg)
  title: 카드 이름(제목)
  character: 특징(설명문)
  detail: 상세 페이지 들어가면 보여줄 내용(커스텀 요구)
*/
import dreamDepart from '../Images/dreamDepart.png'
import dontGoodbye from '../Images/dontGoodbye.png'
import almond from '../Images/almond.png'
import greenhouseEarthD from '../Images/greenhouseEarth_detail.jpg'
import greenhouseEarth from '../Images/greenhouseEarth.png'
import lifeIsPractice from '../Images/lifeIsPractice.png'
import littleLadies from '../Images/littleLadies.png'
import Moon from '../Images/Moon.png'
import redhairAnne from '../Images/redhairAnne.png'
import selltimeShop from '../Images/selltimeShop.png'
import uncomfortConveniD from '../Images/uncomfortConveni_detail.jpg'
import uncomfortConveni from '../Images/uncomfortConveni.png'

export const contents = [{
    path: "/dreamDepart",
    imagePath: dreamDepart,
    title: "달러구트 꿈 백화점",
    character: "이미예 장편소설",
    detail: "잠들어야만 입장 가능한 꿈 백화점에서 일어나는 비밀스럽고도 기묘하며 가슴 뭉클한 판타지 소설",
    subDetail: "여기는 잠들어야만 입장할 수 있는 ‘달러구트 꿈 백화점’입니다. 잠들어야만 입장할 수 있는 독특한 마을. 그곳에 들어온 잠든 손님들에게 가장 인기 있는 곳은, 온갖 꿈을 한데 모아 판매하는 ‘달러구트의 꿈 백화점’이다."
    +" 긴 잠을 자는 사람들은 물론이고, 짧은 낮잠을 자는 사람들과 동물들로 매일매일 대성황을 이룬다. 범상치 않은 혈통의 주인장 ‘달러구트’, 그리고 그의 최측근에서 일하게 된 신참 직원 ‘페니’, 꿈을 만드는 제작자 ‘아가넵 코코’, 그리고 베일에 둘러싸인 비고 마이어스…등이 등장한다."
    +" <달러구트 꿈 백화점>은 ‘무의식에서만 존재하는 꿈을 정말 사고 팔 수 있을까?’라는 기발한 질문에 답을 찾아가며, 꿈을 만드는 사람, 파는 사람, 사는 사람의 비밀스런 에피소드를 담고 있는 판타지 소설이다. 텀블벅 펀딩 1812% 달성, 전자책 출간 즉시 베스트셀러 1위를 3주간 기록하며 수많은 독자들의 요청으로 종이책으로 출간하게 되었다.",
    number: 0,
    video: <iframe width="560" height="315" src="https://www.youtube.com/embed/CkM21p0dPG8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
},{
    path: "/Moon",
    imagePath: Moon,
    title: "달가림",
    character: "이단비 장편소설",
    detail: "여름밤 달빛처럼 은은하게 젖어드는 동화 같은 사랑 이야기",
    subDetail: "살아갈 이유를 찾지 못하고 하루하루 시들어만 가던 효주는 어느 날 외할머니의 부고를 받고 도기마을로 향한다. 장례 마지막 날, 마을 사람들은 외할머니의"
    +" 뒷산 앞에서 기묘한 의식을 하며 효주에게 함부로 산에 들어가지 말 것을 당부한다. 하지만 효주는 삼 일간의 장례를 모두 마치고 짐을 정리하다 할머니의 뒷산에 무심코 발을 들인다."
    +" 그 순간 은빛으로 빛나는 그림자가 자신의 몸에서 빠져나가는 것을 목격하게 되고, 은빛 그림자를 쫓아 들어간 숲에서 무영이라는 신비한 남자를 만난다. 무영은 다섯 번째 밤, 달가림이 있기 전까지 잃어버린 그림자를 찾지 못하면 영원히 숲 속으로 사라지고 말 거라고 말한다. 그렇게 두 사람은 다섯 번의 달이 뜨는 동안"
    +" 사라진 그림자를 찾아가는 여정을 함께 하게 된다. 그림자가 사라지는 환상적인 숲을 배경으로 효주와 무영의 동화 같은 이야기가 신비롭고도 아름답게 펼쳐진다.",
    number: 0,
    video: <iframe width="560" height="315" src="https://www.youtube.com/embed/KnxSx_HGvy4" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

},{
    path: "/almond",
    imagePath: almond,
    title: "아몬드",
    character: "손원평 장편소설",
    detail: "괴물인 내가 또 다른 괴물을 만났다!",
    subDetail: "영화와도 같은 강렬한 사건과 매혹적인 문체로 시선을 사로잡는 한국형 영 어덜트 소설 <아몬드>. 타인의 감정에 무감각해진 공감 불능인 이 시대에 큰 울림을 주는 이 작품은 감정을 느끼지 못하는"
    +" 한 소년의 특별한 성장을 그리고 있다. 감정을 느끼는 데 어려움을 겪는 열여섯 살 소년 선윤재와 어두운 상처를 간직한 곤이, 그와 반대로 맑은 감성을 지닌 도라와 윤재를 돕고 싶어 하는 심 박사 사이에서"
    +" 펼쳐지는 이야기가 우리로 하여금 타인의 감정을 이해한다는 것이 얼마나 어려운 일인지, 그럼에도 그것이 얼마나 소중한 일인지 다시 한 번 생각해 볼 기회를 전한다."
    +" 감정 표현 불능증을 앓고 있는 열여섯 살 소년 선윤재. ‘아몬드’라 불리는 편도체가 작아 분노도 공포도 잘 느끼지 못하는 그는 타고난 침착성, 엄마와 할머니의 지극한 사랑 덕에 별 탈 없이 지냈지만"
    +" 크리스마스이브이던 열여섯 번째 생일날 벌어진 비극적인 사고로 가족을 잃는다. 그렇게 세상에 홀로 남겨진 윤재 앞에 ‘곤이’가 나타난다. 놀이동산에서 엄마의 손을 잠깐 놓은 사이 사라진 후 13년 만에 가족의 품으로 돌아오게 된 곤이는 분노로 가득 찬 아이다. 곤이는 윤재를 괴롭히고 윤재에게 화를 쏟아 내지만,"
    +" 감정의 동요가 없는 윤재 앞에서 오히려 쩔쩔매고 만다. 그 후 두 소년은 남들이 이해할 수 없는 특별한 우정을 쌓아가고, 윤재는 조금씩 내면의 변화를 겪는데...",
    number: 0,
    video: <iframe width="560" height="315" src="https://www.youtube.com/embed/ICk6yblPh-w" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
},{
    path: "/redhairAnne",
    imagePath: redhairAnne,
    title: "빨강 머리 앤",
    character: "루시 모드 몽고메리 지음",
    detail: "TV 애니메이션 에피소드를 넘어서 꼭 읽어봐야 할 고전!",
    subDetail: "초록 지붕 집에 실수로 입양된 고아 앤 셜 리가 엉뚱한 상상력과 긍정의 에너지로 어려움들을 돌파해 가는, 명랑하고 엉뚱하고 유쾌한 성장소설이다."
    +" 루시 M. 몽고메리의 자전적 삶이 녹아 있어서 등장인물 묘사가 생생하고, 특히 서정적인 자연을 서술한 문장들이 탁월하다. 캐나다 프린스에드워드 섬의 시골 마을 에이번리,"
    +" 거기서도 가장 외딴 농장에 사는 매슈와 마릴라 커스버트 남매에게 중대한 시련이 닥친다. 농장 일을 도울 남자아이를 입양하려고 했는데, 삐쩍 마른 빨강 머리 여자아이가 나타난 것이다."
    +" 아이는 이름이 ‘끝에 e가 붙는 앤’이지만 ‘코딜리어’라고 불러달라거나, ‘흰 사과꽃이 만발하고 개울 웃음소리가 들리는 초록 지붕 집’에서 살게 해주면 착한 아이가 되겠다는 엉뚱한 애원으로 마릴라의 혼을 쏙 빼놓는다."
    +" 하지만 “빨강 머리! 홍당무!” 소리에 발끈해서 린드 부인과 싸우는가 하면, 자수정 브로치를 훔쳤다는 의심까지 받게 되는데... 가여운 앤이 초록 지붕 집에서 행복해질 수 있을까? 동명의 TV 애니메이션 원화를 만화책처럼 구성해 삽화로 담아 긴 분량의 완역본이지만 순식간에 읽을 수 있도록 했다.",
    number: 0,
    video: <iframe width="560" height="315" src="https://www.youtube.com/embed/A9FeTb_qY9o" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
},{
    path: "/littleLadies",
    imagePath: littleLadies,
    title: "작은 아씨들",
    character: "루이자 메이 올컷 지음",
    detail: "사랑스러운 네 자매의 따뜻한 이야기!",
    subDetail: "허영심이 있지만 책임감이 강한 첫째 메그, 열정적인 성격에 작가를 꿈꾸는 둘째 조, 얌전하고 속 깊은 셋째 베스, 사고뭉치 귀여운 막내 에이미가 풀어가는 크고 작은 사건들은 읽는 내내 미소를 머금게 한다."
    +" 네 자매의 평온한 일상, 메그의 아름다운 첫 무도회, 활달한 조와 이웃집 소년 로리와의 우정, 네 자매가 함께 떠난 소풍, 철없는 막내 에이미 때문에 얼음판에서 벌어진 사건까지!"
    +" 각기 다른 성격의 네 자매가 만들어가는 이야기를 통해 우리는 추억 속의 나를 만나는 경험을 하게 된다. 작은 일에도 함께 기뻐하고, 자신이 가지고 있는 것에 감사하는 마음, 친구들과 함께 나눴던 순수한 우정까지."
    +" 어린 시절의 나를 잊고 있었던 나에게, 오랜 친구에게 선물하기 좋은 책으로 지난날의 아름다운 추억을 영원히 기억하고 싶은 모든 이들에게 최고의 선물이 되어줄 것이다.",
    number: 0,
    video: <iframe width="560" height="315" src="https://www.youtube.com/embed/CIyHxwqSPtU" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
},{
    path: "/selltimeShop",
    imagePath: selltimeShop,
    title: "시간을 파는 상점",
    character: "김선영 장편소설",
    detail: "시간의 흐름 속에 숨겨진 마법 같은 비밀!",
    subDetail: "제1회 자음과모음 청소년문학상을 수상한 김선영의 작품 <시간을 파는 상점>. 심사위원들의 만장일치로 선정된 당선작으로, 흐르는 시간이라는 소재를 다루고 있다."
    +" 소방대원으로 더불어 사는 삶을 실천하다 일찍 세상을 떠난 아빠의 뜻을 이어받은 주인공 온조. 인터넷 카페에 ‘크로노스’라는 닉네임으로 ‘시간을 파는 상점’을 오픈해 손님들의 어려운 일을 대신 해주면서"
    +" 자신의 시간을 판다. 범인으로 지목된 아이가 학교 옥상에서 떨어져 죽은 PMP3 도난 사건에 대한 의뢰, 할아버지와 맛있게 식사를 해달라는 엉뚱한 의뢰, 천국의 우편 배달부가 되어 달라는 의뢰 등 여러 가지 의뢰가 이어진다."
    +" 그러던 중 PMP3 분실 사건으로 죽음에 이를 뻔한 친구가 밝혀지고 온조와 친구들에게 예상치 못한 위기가 찾아오는데...",
    number: 0,
    video: <iframe width="560" height="315" src="https://www.youtube.com/embed/3-BA2CtnleM" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
},{
    path: "/dontGoodbye",
    imagePath: dontGoodbye,
    title: "작별하지 않는다",
    character: "한강 장편소설",
    detail: "이곳에 살았던 이들로부터, 이곳에 살아 있는 이들로부터 꿈처럼 스며오는 지극한 사랑의 기억",
    subDetail: "2016년 <채식주의자>로 인터내셔널 부커상을 수상하고 2018년 <흰>으로 같은 상 최종 후보에 오른 한강 작가의 5년 만의 신작 장편소설 <작별하지 않는다>가 출간되었다. 2019년 겨울부터 이듬해 봄까지"
    +" 계간 <문학동네>에 전반부를 연재하면서부터 큰 관심을 모았고, 그뒤 일 년여에 걸쳐 후반부를 집필하고 또 전체를 공들여 다듬는 지난한 과정을 거쳐 완성되었다. 본래 <눈 한 송이가 녹는 동안>(2015년 황순원문학상 수상작),"
    +" <작별>(2018년 김유정문학상 수상작)을 잇는 ‘눈’ 3부작의 마지막 작품으로 구상되었으나 그 자체 완결된 작품의 형태로 엮이게 된바, 한강 작가의 문학적 궤적에서 <작별하지 않는다>가 지니는 각별한 의미를 짚어볼 수 있다."
    +" 이로써 <소년이 온다>(2014), <흰>(2016), ‘눈’ 연작(2015, 2017) 등 근작들을 통해 어둠 속에서도 한줄기 빛을 향해 나아가는 인간의 고투와 존엄을 그려온 한강 문학이 다다른 눈부신 현재를 또렷한 모습으로 확인할 수 있게 되었다."
    +" 오래지 않은 비극적 역사의 기억으로부터 길어올린, 그럼에도 인간을 끝내 인간이게 하는 간절하고 지극한 사랑의 이야기가 눈이 시리도록 선연한 이미지와 유려하고 시적인 문장에 실려 압도적인 아름다움으로 다가온다."
    +" 한강은 출간 기념 간담회에서 말했다. 죽은 사람의 얼굴 위에 내려앉은 눈송이는 녹지 않는다는 걸 알게 된 1948년의 소녀가 그 이후에도 긴 삶을 살아냈다는 걸 우리는 어떻게 받아들여야 할까. 한강이 쓴 1948년 4월 3일 제주에서 벌어진 일에"
    +" 관한 이야기, 혹은 우리를 살게하는 지극한 사랑에 관한 이야기. 작가 스스로를 구한 이 소설이, 독자에게도 가닿길 바란다.",
    number: 0,
    video: <iframe width="560" height="315" src="https://www.youtube.com/embed/MO6FtAPZU1A" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
},{
    path: "/lifeIsPractice",
    imagePath: lifeIsPractice,
    title: "인생은 실전이다",
    character: "신영준, 주언규 지음",
    detail: "혼돈의 시대에 살아남는 데 필요한 이야기를 담은 생존 에세이",
    subDetail: "신영준과 주언규 두 저자는 소셜 미디어를 통해, 유튜브를 통해, 강연을 통해, 저서를 통해 많은 사람과 교류해왔다. 성공한 사람들을 인터뷰하고, 하루하루 열심히 살아가는 보통 사람의 이야기도 들었으며, 지금도 메일함에 수천 명의 사람들이 보내온 고민을"
    +" 소중하게 보관하고 있다. 그 많은 소통의 결과 망하지 않고 살아남는 것이 중요하다는 결론에 이르렀고, 그 철학을 한 권의 책에 담아냈다. 온몸으로 겪어내야 할 진짜 현실을 이야기하다. 안타깝지만, 인생에 예행연습은 없다. 졸업도, 취업도, 결혼도, 육아도 그 무엇 하나"
    +" 연습해 볼 수 없다. 그래서 실전이 중요하다. 뜬구름 잡는 소리가 아니라, 온몸으로 겪어내야 할 진짜 현실을 이야기해야 한다. <인생은 실전이다>는 입시, 유학, 취업, 이직, 직장생활, 재테크, 인간관계, 자기관리 등 지금 고민에 빠진 사람들에게 실질적으로 필요한 정보와 지혜를 담았다."
    +" 우정, 사랑, 존중, 자존감 등 행복을 위한 생각도 놓치지 않았다. 포스트 코로나와 4차 산업혁명으로 불리는 혼돈의 시대에 우리가 행복하게 살아남을 방법을 찾을 수 있을 것이다.",
    number: 0,
    video: <iframe width="560" height="315" src="https://www.youtube.com/embed/ixs9dbwtexU" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
},{
    path: "/greenhouseEarth",
    imagePath: greenhouseEarth,
    title: "지구 끝의 온실",
    character: "김초엽 장편소설",
    detail: "'당신이 이 세계를 아직 사랑하고 있다면'",
    subDetail: "이미 폭넓은 독자층을 형성하며 열렬한 사랑을 받고 있는 김초엽 작가는 더스트로 멸망한 이후의 세계를 첫 장편소설의 무대로 삼았다. 그는 지난해 말 플랫폼 연재를 통해 발표한 이야기를 반년이 훌쩍 넘는 시간 동안 수정하면서 한층 더 무르익도록 만들었다."
    +" 그리하여 장 구성부터 세부적인 장면은 물론 문장들까지 완전히 새롭게 탄생한 <지구 끝의 온실>이 2021년 8월 드디어 독자들을 만난다. <지구 끝의 온실>은 자이언트북스의 네 번째 도서이다. 김중혁의 첫 시리즈 소설 <내일은 초인간>, 배명훈 장편소설 <빙글빙글 우주군>,"
    +" 그리고 한국문학의 빛나는 일곱 명의 작가가 ‘즐거움’을 키워드로 쓴 단편소설을 묶은 앤솔로지 <놀이터는 24시>까지, 작가들의 자유로운 상상력을 응원하며 가장 그다운 작품을 선보일 수 있도록 해온 자이언트북스는 이번 주인공으로 김초엽의 <지구 끝의 온실>을 출간하였다.",
    number: 1,
    img: <img src={greenhouseEarthD} alt="지구 끝의 온실 상세" width="830px"/>
},{
    path: "/uncomfortConveni",
    imagePath: uncomfortConveni,
    title: "불편한 편의점",
    character: "김호연 장편소설",
    detail: "원 플러스 원의 기쁨, 삼각김밥 모양의 슬픔, 만 원에 네 번의 폭소가 터지는 곳! 힘겨운 시대를 살아가는 우리들에게 다가온 조금 특별한 편의점 이야기",
    subDetail: "<망원동 브라더스>의 작가 김호연의 '동네이야기' 시즌 2. 청파동 골목 모퉁이에 자리 잡은 작은 편의점을 무대로 힘겨운 시대를 살아가는 우리 이웃들의 삶의 속내와"
    +" 희로애락을 따뜻하고 유머러스하게 담아냈다. <망원동 브라더스>에서 망원동이라는 공간의 체험적 지리지를 잘 활용해 유쾌한 재미와 공감을 이끌어냈듯 이번에는 서울의 오래된"
    +" 동네 청파동에 대한 공감각을 생생하게 포착해 또 하나의 흥미진진한 ‘동네 이야기’를 탄생시켰다. 서울역에서 노숙인 생활을 하던 독고라는 남자가 어느 날 70대 여성의 지갑을 주워준"
    +" 인연으로 그녀가 운영하는 편의점에서 야간 알바를 하면서 이야기가 시작된다. 덩치가 곰 같은 이 사내는 알코올성 치매로 과거를 기억하지 못하는 데다 말도 어눌하고 행동도 굼떠 과연 손님을"
    +" 제대로 상대할 수 있을까 의구심을 갖게 하는데 웬걸, 의외로 그는 일을 꽤 잘해낼 뿐 아니라 주변 사람들을 묘하게 사로잡으면서 편의점의 밤을 지키는 든든한 일꾼이 되어간다.",
    number: 1,
    img: <img src={uncomfortConveniD} alt="불편한 편의점 상세" width="830px"/>
}]
