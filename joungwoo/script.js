function rand(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

var rand_ = rand(0, 6)
var tmi_list = ['제가 제일 좋아하는책은 "은하수를여행하는 히치하이커를 위한 안내서"이에요!', '책은재밌죠', '제가 제일좋아하는 음악은 lose yourself이에요!', 'c++어케함;', 'js는 재밌죠', '저는 코딩할때가 행복합니다:)']
document.write(`<p class="txt2">${tmi_list[rand_]}</p>`)