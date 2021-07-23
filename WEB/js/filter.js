$(document).ready(function() {

    var check = $('#check');
    var check1 = $('#check1');
    var check2 = $('#check2');
    var btn = $('.my-filters button');
    // var alc = $('#all').css('background-color');
    // var hc = $('#horror').css('background-color');
    // var tc = $('#thriller').css('background-color');
    // var mc = $('#mystery').css('background');
    // var dc = $('#drama').css('background');
    // var ac = $('#action').css('background');
    // var kc = $('#korea').css('background');
    // var fc = $('#foreign').css('background');


    // 버튼 색변경
    var btncolor = function(e) {
        if (e.currentTarget.id == 'all') {
            $('.filterable a').show();
            $(this).css({background:"rgb(43, 16, 85)"});
            $('#reverse, #summer, #disaster, #devil, #ghost, #occult, #zombie, #brutal, #thriller, #gore').css({background:"rgba(255,255,255,0.4)"})
        } else if (e.currentTarget.id == 'reverse') {
            $('#all').css({background:"rgba(255,255,255,0.4)"});
            $(this).css({background:"rgb(43, 16, 85)"});
        } else if (e.currentTarget.id == 'summer') {
            $(this).css({background:"rgb(43, 16, 85)"});
            $('#all').css({background:"rgba(255,255,255,0.4)"});
        } else if (e.currentTarget.id == 'disaster') {
            $(this).css({background:"rgb(43, 16, 85)"});
            $('#all').css({background:"rgba(255,255,255,0.4)"});
        } else if (e.currentTarget.id == 'devil') {
            $(this).css({background:"rgb(43, 16, 85)"});
            $('#all').css({background:"rgba(255,255,255,0.4)"});
        } else if (e.currentTarget.id == 'ghost') {
            $(this).css({background:"rgb(43, 16, 85)"});
            $('#all').css({background:"rgba(255,255,255,0.4)"});
        } else if (e.currentTarget.id == 'occult') {
            $(this).css({background:"rgb(43, 16, 85)"});
            $('#all').css({background:"rgba(255,255,255,0.4)"});
        } else if (e.currentTarget.id == 'zombie') {
            $(this).css({background:"rgb(43, 16, 85)"});
            $('#all').css({background:"rgba(255,255,255,0.4)"});
        } else if (e.currentTarget.id == 'brutal') {
            $(this).css({background:"rgb(43, 16, 85)"});
            $('#all').css({background:"rgba(255,255,255,0.4)"});
        } else if (e.currentTarget.id == 'thriller') {
            $(this).css({background:"rgb(43, 16, 85)"});
            $('#all').css({background:"rgba(255,255,255,0.4)"});
        } else if (e.currentTarget.id == 'gore') {
            $(this).css({background:"rgb(43, 16, 85)"});
            $('#all').css({background:"rgba(255,255,255,0.4)"});
        } else {

        }
    }


    // 영화 이미지 가져오기
    var btncheck = function() {
        // 버튼 한개
        // 반전
        if (($('#reverse').css('background-color') === "rgb(43, 16, 85)") 
        && ($('#summer, #disaster, #devil, #ghost, #occult, #zombie, #brutal, #thriller, #gore, #all').css('background-color') !== "rgb(43, 16, 85)")
        ){
            $('.filterable a').not('a.reverse').hide();
            $('a.reverse').show();
        } 
        // 여름
        else if (($('#summer').css('background-color') === "rgb(43, 16, 85)") 
        && ($('#reverse, #disaster, #devil, #ghost, #occult, #zombie, #brutal, #thriller, #gore, #all').css('background-color') !== "rgb(43, 16, 85)")
        ){
            $('.filterable a').not('a.summer').hide();
            $('a.summer').show();
        } 
        // 재난
        else if (($('#disaster').css('background-color') === "rgb(43, 16, 85)") 
        && ($('#reverse, #summer, #devil, #ghost, #occult, #zombie, #brutal, #thriller, #gore, #all').css('background-color') !== "rgb(43, 16, 85)")
        ){
            $('.filterable a').not('a.disaster').hide();
            $('a.disaster').show();
        }
        // 악마
        else if (($('#devil').css('background-color') === "rgb(43, 16, 85)") 
        && ($('#reverse, #summer, #disaster, #ghost, #occult, #zombie, #brutal, #thriller, #gore, #all').css('background-color') !== "rgb(43, 16, 85)")
        ){
            $('.filterable a').not('a.devil').hide();
            $('a.devil').show();
        }
        // 귀신
        else if (($('#ghost').css('background-color') === "rgb(43, 16, 85)") 
        && ($('#reverse, #summer, #disaster, #devil, #occult, #zombie, #brutal, #thriller, #gore, #all').css('background-color') !== "rgb(43, 16, 85)")
        ){
            $('.filterable a').not('a.ghost').hide();
            $('a.ghost').show();
        }
        // 오컬트
        else if (($('#occult').css('background-color') === "rgb(43, 16, 85)") 
        && ($('#reverse, #summer, #disaster, #devil, #ghost, #zombie, #brutal, #thriller, #gore, #all').css('background-color') !== "rgb(43, 16, 85)")
        ){
            $('.filterable a').not('a.occult').hide();
            $('a.occult').show();
        }
        // 좀비
        else if (($('#zombie').css('background-color') === "rgb(43, 16, 85)") 
        && ($('#reverse, #summer, #disaster, #devil, #ghost, #occult, #brutal, #thriller, #gore, #all').css('background-color') !== "rgb(43, 16, 85)")
        ){
            $('.filterable a').not('a.zombie').hide();
            $('a.zombie').show();
        }
        // 잔인
        else if (($('#brutal').css('background-color') === "rgb(43, 16, 85)") 
        && ($('#reverse, #summer, #disaster, #devil, #ghost, #occult, #zombie, #thriller, #gore, #all').css('background-color') !== "rgb(43, 16, 85)")
        ){
            $('.filterable a').not('a.brutal').hide();
            $('a.brutal').show();
        }
        // 스릴러
        else if (($('#thriller').css('background-color') === "rgb(43, 16, 85)") 
        && ($('#reverse, #summer, #disaster, #devil, #ghost, #occult, #zombie, #brutal, #gore, #all').css('background-color') !== "rgb(43, 16, 85)")
        ){
            $('.filterable a').not('a.thriller').hide();
            $('a.thriller').show();
        }
        // 고어
        else if (($('#gore').css('background-color') === "rgb(43, 16, 85)") 
        && ($('#reverse, #summer, #disaster, #devil, #ghost, #occult, #zombie, #brutal, #thriller, #all').css('background-color') !== "rgb(43, 16, 85)")
        ){
            $('.filterable a').not('a.gore').hide();
            $('a.gore').show();
        } else {
            $('.filterable a').show();
        }
    }

    var btncheck1 = function() {
        //반전,여름
        if($('#reverse').css('background-color') === "rgb(43, 16, 85)"
        && $('#summer').css('background-color') === "rgb(43, 16, 85)"
        && $('#disaster, #devil, #ghost, #occult, #zombie, #brutal, #thriller, #gore, #all').css('background-color') === "rgba(255, 255, 255, 0.4)"
        ) {
            $('.filterable a').not('a.rs').hide();
            $('a.rs').show();
        }
        //반전,재난 
        else if ($('#reverse').css('background-color') === "rgb(43, 16, 85)"
        && $('#disaster').css('background-color') === "rgb(43, 16, 85)"
        && $('#summer, #devil, #ghost, #occult, #zombie, #brutal, #thriller, #gore, #all').css('background-color') === "rgba(255, 255, 255, 0.4)"
        ){
            $('.filterable a').not('a.rd').hide();
            $('a.rd').show();
        }//반전, 악마 
        else if ($('#reverse').css('background-color') === "rgb(43, 16, 85)"
        && $('#devil').css('background-color') === "rgb(43, 16, 85)"
        && $('#summer, #disaster, #ghost, #occult, #zombie, #brutal, #thriller, #gore, #all').css('background-color') === "rgba(255, 255, 255, 0.4)"
        ){
            $('.filterable a').not('a.rde').hide();
            $('a.rde').show();
        }//반전, 귀신 
        else if ($('#reverse').css('background-color') === "rgb(43, 16, 85)"
        && $('#ghost').css('background-color') === "rgb(43, 16, 85)"
        && $('#summer, #disaster, #devil, #occult, #zombie, #brutal, #thriller, #gore, #all').css('background-color') === "rgba(255, 255, 255, 0.4)"
        ){
            $('.filterable a').not('a.rg').hide();
            $('a.rg').show();
        }//반전, 오컬트 
        else if ($('#reverse').css('background-color') === "rgb(43, 16, 85)"
        && $('#occult').css('background-color') === "rgb(43, 16, 85)"
        && $('#summer, #disaster, #devil, #ghost, #zombie, #brutal, #thriller, #gore, #all').css('background-color') === "rgba(255, 255, 255, 0.4)"
        ){
            $('.filterable a').not('a.ro').hide();
            $('a.ro').show();
        }//반전, 좀비 
        else if ($('#reverse').css('background-color') === "rgb(43, 16, 85)"
        && $('#zombie').css('background-color') === "rgb(43, 16, 85)"
        && $('#summer, #disaster, #devil, #ghost, #occult, #brutal, #thriller, #gore, #all').css('background-color') === "rgba(255, 255, 255, 0.4)"
        ){
            $('.filterable a').not('a.rz').hide();
            $('a.rz').show();
        }//반전, 잔인 
        else if ($('#reverse').css('background-color') === "rgb(43, 16, 85)"
        && $('#brutal').css('background-color') === "rgb(43, 16, 85)"
        && $('#summer, #disaster, #devil, #ghost, #occult, #zombie, #thriller, #gore, #all').css('background-color') === "rgba(255, 255, 255, 0.4)"
        ){
            $('.filterable a').not('a.rb').hide();
            $('a.rb').show();
        }//반전, 스릴러 
        else if ($('#reverse').css('background-color') === "rgb(43, 16, 85)"
        && $('#thriller').css('background-color') === "rgb(43, 16, 85)"
        && $('#summer, #disaster, #devil, #ghost, #occult, #zombie, #brutal, #gore, #all').css('background-color') === "rgba(255, 255, 255, 0.4)"
        ){
            $('.filterable a').not('a.rt').hide();
            $('a.rt').show();
        }//여름, 재난 
        else if ($('#summer').css('background-color') === "rgb(43, 16, 85)"
        && $('#disaster').css('background-color') === "rgb(43, 16, 85)"
        && $('#reverse, #devil, #ghost, #occult, #zombie, #brutal, #thriller, #gore, #all').css('background-color') === "rgba(255, 255, 255, 0.4)"
        ){
            $('.filterable a').not('a.sd').hide();
            $('a.sd').show();
        }//여름, 악마 
        else if ($('#summer').css('background-color') === "rgb(43, 16, 85)"
        && $('#devil').css('background-color') === "rgb(43, 16, 85)"
        && $('#reverse, #disaster, #ghost, #occult, #zombie, #brutal, #thriller, #gore, #all').css('background-color') === "rgba(255, 255, 255, 0.4)"
        ){
            $('.filterable a').not('a.sde').hide();
            $('a.sde').show();
        }//여름, 귀신 
        else if ($('#summer').css('background-color') === "rgb(43, 16, 85)"
        && $('#ghost').css('background-color') === "rgb(43, 16, 85)"
        && $('#reverse, #disaster, #devil, #occult, #zombie, #brutal, #thriller, #gore, #all').css('background-color') === "rgba(255, 255, 255, 0.4)"
        ){
            $('.filterable a').not('a.sg').hide();
            $('a.sg').show();
        }//여름,잔인 
        else if ($('#summer').css('background-color') === "rgb(43, 16, 85)"
        && $('#brutal').css('background-color') === "rgb(43, 16, 85)"
        && $('#reverse, #disaster, #devil, #ghost, #occult, #zombie, #thriller, #gore, #all').css('background-color') === "rgba(255, 255, 255, 0.4)"
        ){
            $('.filterable a').not('a.sb').hide();
            $('a.sb').show();
        }//여름, 스릴러 
        else if ($('#summer').css('background-color') === "rgb(43, 16, 85)"
        && $('#thriller').css('background-color') === "rgb(43, 16, 85)"
        && $('#reverse, #disaster, #devil, #ghost, #occult, #zombie, #brutal, #gore, #all').css('background-color') === "rgba(255, 255, 255, 0.4)"
        ){
            $('.filterable a').not('a.st').hide();
            $('a.st').show();
        }// 재난,스릴러 
        else if ($('#disaster').css('background-color') === "rgb(43, 16, 85)"
        && $('#thriller').css('background-color') === "rgb(43, 16, 85)"
        && $('#reverse, #summer, #devil, #ghost, #occult, #zombie, #brutal, #gore, #all').css('background-color') === "rgba(255, 255, 255, 0.4)"
        ){
            $('.filterable a').not('a.dt').hide();
            $('a.dt').show();
        }// 악마,귀신 
        else if ($('#devil').css('background-color') === "rgb(43, 16, 85)"
        && $('#ghost').css('background-color') === "rgb(43, 16, 85)"
        && $('#reverse, #summer, #disaster, #occult, #zombie, #brutal, #thriller, #gore, #all').css('background-color') === "rgba(255, 255, 255, 0.4)"
        ){
            $('.filterable a').not('a.deg').hide();
            $('a.deg').show();
        }// 악마,오컬트 
        else if ($('#devil').css('background-color') === "rgb(43, 16, 85)"
        && $('#occult').css('background-color') === "rgb(43, 16, 85)"
        && $('#reverse, #summer, #disaster, #devil, #zombie, #brutal, #thriller, #gore, #all').css('background-color') === "rgba(255, 255, 255, 0.4)"
        ){
            $('.filterable a').not('a.deo').hide();
            $('a.deo').show();
        }//악마, 좀비 
        else if ($('#devil').css('background-color') === "rgb(43, 16, 85)"
        && $('#zombie').css('background-color') === "rgb(43, 16, 85)"
        && $('#reverse, #summer, #disaster, #ghost, #occult, #brutal, #thriller, #gore, #all').css('background-color') === "rgba(255, 255, 255, 0.4)"
        ){
            $('.filterable a').not('a.dez').hide();
            $('a.dez').show();
        }//악마, 잔인 
        else if ($('#devil').css('background-color') === "rgb(43, 16, 85)"
        && $('#brutal').css('background-color') === "rgb(43, 16, 85)"
        && $('#reverse, #summer, #disaster, #ghost, #occult, #zombie, #thriller, #gore, #all').css('background-color') === "rgba(255, 255, 255, 0.4)"
        ){
            $('.filterable a').not('a.deb').hide();
            $('a.deb').show();
        }//귀신,오컬트 
        else if ($('#ghost').css('background-color') === "rgb(43, 16, 85)"
        && $('#occult').css('background-color') === "rgb(43, 16, 85)"
        && $('#reverse, #summer, #disaster, #devil, #zombie, #brutal, #thriller, #gore, #all').css('background-color') === "rgba(255, 255, 255, 0.4)"
        ){
            $('.filterable a').not('a.go').hide();
            $('a.go').show();
        }// 귀신,좀비 
        else if ($('#ghost').css('background-color') === "rgb(43, 16, 85)"
        && $('#zombie').css('background-color') === "rgb(43, 16, 85)"
        && $('#reverse, #summer, #disaster, #devil, #occult, #brutal, #thriller, #gore, #all').css('background-color') === "rgba(255, 255, 255, 0.4)"
        ){
            $('.filterable a').not('a.gz').hide();
            $('a.gz').show();
        }// 귀신, 잔인 
        else if ($('#ghost').css('background-color') === "rgb(43, 16, 85)"
        && $('#brutal').css('background-color') === "rgb(43, 16, 85)"
        && $('#reverse, #summer, #disaster, #devil, #occult, #zombie, #thriller, #gore, #all').css('background-color') === "rgba(255, 255, 255, 0.4)"
        ){
            $('.filterable a').not('a.gb').hide();
            $('a.gb').show();
        }// 귀신,스릴러 
        else if ($('#ghost').css('background-color') === "rgb(43, 16, 85)"
        && $('#thriller').css('background-color') === "rgb(43, 16, 85)"
        && $('#reverse, #summer, #disaster, #devil, #occult, #zombie, #brutal, #gore, #all').css('background-color') === "rgba(255, 255, 255, 0.4)"
        ){
            $('.filterable a').not('a.gt').hide();
            $('a.gt').show();
        }//귀신, 고어 
        else if ($('#ghost').css('background-color') === "rgb(43, 16, 85)"
        && $('#gore').css('background-color') === "rgb(43, 16, 85)"
        && $('#reverse, #summer, #disaster, #devil, #occult, #zombie, #brutal, #thriller, #all').css('background-color') === "rgba(255, 255, 255, 0.4)"
        ){
            $('.filterable a').not('a.ggo').hide();
            $('a.ggo').show();
        } // 오컬트,잔인 
        else if ($('#occult').css('background-color') === "rgb(43, 16, 85)"
        && $('#brutal').css('background-color') === "rgb(43, 16, 85)"
        && $('#reverse, #summer, #disaster, #devil, #ghost, #zombie, #thriller, #gore, #all').css('background-color') === "rgba(255, 255, 255, 0.4)"
        ){
            $('.filterable a').not('a.ob').hide();
            $('a.ob').show();
        }//오컬트, 스릴러 
        else if ($('#occult').css('background-color') === "rgb(43, 16, 85)"
        && $('#thriller').css('background-color') === "rgb(43, 16, 85)"
        && $('#reverse, #summer, #disaster, #devil, #ghost, #zombie, #brutal, #gore, #all').css('background-color') === "rgba(255, 255, 255, 0.4)"
        ){
            $('.filterable a').not('a.ot').hide();
            $('a.ot').show();
        }// 오컬트,고어 
        else if ($('#occult').css('background-color') === "rgb(43, 16, 85)"
        && $('#gore').css('background-color') === "rgb(43, 16, 85)"
        && $('#reverse, #summer, #disaster, #devil, #ghost, #zombie, #brutal, #thriller, #all').css('background-color') === "rgba(255, 255, 255, 0.4)"
        ){
            $('.filterable a').not('a.ogo').hide();
            $('a.ogo').show();
        }// 좀비, 잔인 
        else if ($('#zombie').css('background-color') === "rgb(43, 16, 85)"
        && $('#brutal').css('background-color') === "rgb(43, 16, 85)"
        && $('#reverse, #summer, #disaster, #devil, #ghost, #occult, #thriller, #gore, #all').css('background-color') === "rgba(255, 255, 255, 0.4)"
        ){
            $('.filterable a').not('a.zb').hide();
            $('a.zb').show();
        }// 좀비, 고어 
        else if ($('#zombie').css('background-color') === "rgb(43, 16, 85)"
        && $('#gore').css('background-color') === "rgb(43, 16, 85)"
        && $('#reverse, #summer, #disaster, #devil, #ghost, #occult, #brutal, #thriller, #all').css('background-color') === "rgba(255, 255, 255, 0.4)"
        ){
            $('.filterable a').not('a.zgo').hide();
            $('a.zgo').show();
        }// 잔인, 스릴러 
        else if ($('#brutal').css('background-color') === "rgb(43, 16, 85)"
        && $('#thriller').css('background-color') === "rgb(43, 16, 85)"
        && $('#reverse, #summer, #disaster, #devil, #ghost, #occult, #zombie, #gore, #all').css('background-color') === "rgba(255, 255, 255, 0.4)"
        ){
            $('.filterable a').not('a.bt').hide();
            $('a.bt').show();
        }//잔인, 고어 
        else if ($('#brutal').css('background-color') === "rgb(43, 16, 85)"
        && $('#gore').css('background-color') === "rgb(43, 16, 85)"
        && $('#reverse, #summer, #disaster, #devil, #ghost, #occult, #zombie, #thriller, #all').css('background-color') === "rgba(255, 255, 255, 0.4)"
        ){
            $('.filterable a').not('a.bgo').hide();
            $('a.bgo').show();
        } // 나머지 
        else {
            $('.filterable a').hide();
        }
    }

    var btncheck2 = function() {
        // 반전 여름 재난
        if ($('#reverse').css('background-color') === "rgb(43, 16, 85)"
        && $('#summer').css('background-color') === "rgb(43, 16, 85)"
        && $('#disaster').css('background-color') === "rgb(43, 16, 85)"
        && $('#devil, #ghost, #occult, #zombie, #brutal, #thriller, #gore, #all').css('background-color') === "rgba(255, 255, 255, 0.4)"
        ) 
        {
            $('.filterable a').not('a.rsd').hide();
            $('a.rsd').show();
        } 
        // 반전 여름 귀신
        else if ($('#reverse').css('background-color') === "rgb(43, 16, 85)"
        && $('#summer').css('background-color') === "rgb(43, 16, 85)"
        && $('#ghost').css('background-color') === "rgb(43, 16, 85)"
        && $('#disaster, #devil, #occult, #zombie, #brutal, #thriller, #gore, #all').css('background-color') === "rgba(255, 255, 255, 0.4)"
        ) {
            $('.filterable a').not('a.rsg').hide();
            $('a.rsg').show();
        }
        //반전 악마 귀신
        else if ($('#reverse').css('background-color') === "rgb(43, 16, 85)"
        && $('#devil').css('background-color') === "rgb(43, 16, 85)"
        && $('#ghost').css('background-color') === "rgb(43, 16, 85)"
        && $('#summer, #disaster, #occult, #zombie, #brutal, #thriller, #gore, #all').css('background-color') === "rgba(255, 255, 255, 0.4)"
        ) {
            $('.filterable a').not('a.rdeg').hide();
            $('a.rdeg').show();
        }
        //반전 악마 오컬트
        else if ($('#reverse').css('background-color') === "rgb(43, 16, 85)"
        && $('#devil').css('background-color') === "rgb(43, 16, 85)"
        && $('#occult').css('background-color') === "rgb(43, 16, 85)"
        && $('#summer, #disaster, #ghost, #zombie, #brutal, #thriller, #gore, #all').css('background-color') === "rgba(255, 255, 255, 0.4)"
        ) {
            $('.filterable a').not('a.rdeo').hide();
            $('a.rdeo').show();
        }
        //반전 귀신 좀비
        else if ($('#reverse').css('background-color') === "rgb(43, 16, 85)"
        && $('#ghost').css('background-color') === "rgb(43, 16, 85)"
        && $('#zombie').css('background-color') === "rgb(43, 16, 85)"
        && $('#summer, #disaster, #devil, #occult, #brutal, #thriller, #gore, #all').css('background-color') === "rgba(255, 255, 255, 0.4)"
        ) {
            $('.filterable a').not('a.rgz').hide();
            $('a.rgz').show();
        }
        //반전 귀신 스릴러
        else if ($('#reverse').css('background-color') === "rgb(43, 16, 85)"
        && $('#ghost').css('background-color') === "rgb(43, 16, 85)"
        && $('#thriller').css('background-color') === "rgb(43, 16, 85)"
        && $('#summer, #disaster, #devil, #occult, #zombie, #brutal, #gore, #all').css('background-color') === "rgba(255, 255, 255, 0.4)"
        ) {
            $('.filterable a').not('a.rgt').hide();
            $('a.rgt').show();
        }
        //반전 좀비 잔인
        else if ($('#reverse').css('background-color') === "rgb(43, 16, 85)"
        && $('#zombie').css('background-color') === "rgb(43, 16, 85)"
        && $('#brutal').css('background-color') === "rgb(43, 16, 85)"
        && $('#summer, #disaster, #devil, #ghost, #occult, #brutal, #thriller, #gore, #all').css('background-color') === "rgba(255, 255, 255, 0.4)"
        ) {
            $('.filterable a').not('a.rzb').hide();
            $('a.rzb').show();
        }
        //반전 잔인 스릴러
        else if ($('#reverse').css('background-color') === "rgb(43, 16, 85)"
        && $('#brutal').css('background-color') === "rgb(43, 16, 85)"
        && $('#thriller').css('background-color') === "rgb(43, 16, 85)"
        && $('#summer, #disaster, #devil, #ghost, #occult, #zombie, #gore, #all').css('background-color') === "rgba(255, 255, 255, 0.4)"
        ) {
            $('.filterable a').not('a.rbt').hide();
            $('a.rbt').show();
        }
        //반전 오컬트 스릴러
        else if ($('#reverse').css('background-color') === "rgb(43, 16, 85)"
        && $('#occult').css('background-color') === "rgb(43, 16, 85)"
        && $('#thriller').css('background-color') === "rgb(43, 16, 85)"
        && $('#summer, #disaster, #devil, #ghost, #zombie, #brutal, #gore, #all').css('background-color') === "rgba(255, 255, 255, 0.4)"
        ) {
            $('.filterable a').not('a.rot').hide();
            $('a.rot').show();
        }
        //여름 재난 스릴러
        else if ($('#summer').css('background-color') === "rgb(43, 16, 85)"
        && $('#disaster').css('background-color') === "rgb(43, 16, 85)"
        && $('#thriller').css('background-color') === "rgb(43, 16, 85)"
        && $('#reverse, #devil, #ghost, #occult, #zombie, #brutal, #gore, #all').css('background-color') === "rgba(255, 255, 255, 0.4)"
        ) {
            $('.filterable a').not('a.sdt').hide();
            $('a.sdt').show();
        }
        //여름 악마 귀신
        else if ($('#summer').css('background-color') === "rgb(43, 16, 85)"
        && $('#devil').css('background-color') === "rgb(43, 16, 85)"
        && $('#ghost').css('background-color') === "rgb(43, 16, 85)"
        && $('#reverse, #disaster, #occult, #zombie, #brutal, #thriller, #gore, #all').css('background-color') === "rgba(255, 255, 255, 0.4)"
        ) {
            $('.filterable a').not('a.sdeg').hide();
            $('a.sdeg').show();
        }
        //여름 귀신 잔인
        else if ($('#summer').css('background-color') === "rgb(43, 16, 85)"
        && $('#ghost').css('background-color') === "rgb(43, 16, 85)"
        && $('#brutal').css('background-color') === "rgb(43, 16, 85)"
        && $('#reverse, #disaster, #devil, #occult, #zombie, #thriller, #gore, #all').css('background-color') === "rgba(255, 255, 255, 0.4)"
        ) {
            $('.filterable a').not('a.sgb').hide();
            $('a.sgb').show();
        }
        //여름 귀신 스릴러
        else if ($('#summer').css('background-color') === "rgb(43, 16, 85)"
        && $('#ghost').css('background-color') === "rgb(43, 16, 85)"
        && $('#thriller').css('background-color') === "rgb(43, 16, 85)"
        && $('#reverse, #disaster, #devil, #occult, #zombie, #brutal, #gore, #all').css('background-color') === "rgba(255, 255, 255, 0.4)"
        ) {
            $('.filterable a').not('a.sgt').hide();
            $('a.sgt').show();
        }
        //여름 잔인 스릴러
        else if ($('#summer').css('background-color') === "rgb(43, 16, 85)"
        && $('#brutal').css('background-color') === "rgb(43, 16, 85)"
        && $('#thriller').css('background-color') === "rgb(43, 16, 85)"
        && $('#reverse, #disaster, #devil, #ghost, #occult, #zombie, #gore, #all').css('background-color') === "rgba(255, 255, 255, 0.4)"
        ) {
            $('.filterable a').not('a.sbt').hide();
            $('a.sbt').show();
        }
        //악마 귀신 오컬트
        else if ($('#devil').css('background-color') === "rgb(43, 16, 85)"
        && $('#ghost').css('background-color') === "rgb(43, 16, 85)"
        && $('#occult').css('background-color') === "rgb(43, 16, 85)"
        && $('#reverse, #summer, #disaster, #ghost, #zombie, #brutal, #thriller, #gore, #all').css('background-color') === "rgba(255, 255, 255, 0.4)"
        ) {
            $('.filterable a').not('a.dego').hide();
            $('a.dego').show();
        }
        //악마 귀신 좀비
        else if ($('#devil').css('background-color') === "rgb(43, 16, 85)"
        && $('#ghost').css('background-color') === "rgb(43, 16, 85)"
        && $('#zombie').css('background-color') === "rgb(43, 16, 85)"
        && $('#reverse, #summer, #disaster, #ghost, #occult, #brutal, #thriller, #gore, #all').css('background-color') === "rgba(255, 255, 255, 0.4)"
        ) {
            $('.filterable a').not('a.degz').hide();
            $('a.degz').show();
        }
        //악마 좀비 잔인
        else if ($('#devil').css('background-color') === "rgb(43, 16, 85)"
        && $('#zombie').css('background-color') === "rgb(43, 16, 85)"
        && $('#brutal').css('background-color') === "rgb(43, 16, 85)"
        && $('#reverse, #summer, #disaster, #ghost, #occult, #thriller, #gore, #all').css('background-color') === "rgba(255, 255, 255, 0.4)"
        ) {
            $('.filterable a').not('a.dezb').hide();
            $('a.dezb').show();
        }
        //귀신 잔인 스릴러
        else if ($('#ghost').css('background-color') === "rgb(43, 16, 85)"
        && $('#brutal').css('background-color') === "rgb(43, 16, 85)"
        && $('#thriller').css('background-color') === "rgb(43, 16, 85)"
        && $('#reverse, #summer, #disaster, #devil, #occult, #zombie, #gore, #all').css('background-color') === "rgba(255, 255, 255, 0.4)"
        ) {
            $('.filterable a').not('a.gbt').hide();
            $('a.gbt').show();
        }
        //귀신 잔인 고어
        else if ($('#ghost').css('background-color') === "rgb(43, 16, 85)"
        && $('#brutal').css('background-color') === "rgb(43, 16, 85)"
        && $('#gore').css('background-color') === "rgb(43, 16, 85)"
        && $('#reverse, #summer, #disaster, #devil, #occult, #zombie, #thriller, #all').css('background-color') === "rgba(255, 255, 255, 0.4)"
        ) {
            $('.filterable a').not('a.gbgo').hide();
            $('a.gbgo').show();
        }
        //오컬트 잔인 고어
        else if ($('#occult').css('background-color') === "rgb(43, 16, 85)"
        && $('#brutal').css('background-color') === "rgb(43, 16, 85)"
        && $('#gore').css('background-color') === "rgb(43, 16, 85)"
        && $('#reverse, #summer, #disaster, #devil, #ghost, #zombie, #thriller, #all').css('background-color') === "rgba(255, 255, 255, 0.4)"
        ) {
            $('.filterable a').not('a.obgo').hide();
            $('a.obgo').show();
        }
        //좀비 잔인 고어
        else if ($('#zombie').css('background-color') === "rgb(43, 16, 85)"
        && $('#brutal').css('background-color') === "rgb(43, 16, 85)"
        && $('#gore').css('background-color') === "rgb(43, 16, 85)"
        && $('#reverse, #summer, #disaster, #devil, #ghost, #occult, #thriller, #all').css('background-color') === "rgba(255, 255, 255, 0.4)"
        ) {
            $('.filterable a').not('a.zbgo').hide();
            $('a.zbgo').show();
        }
        else {
            $('.filterable a').hide();
        }
    }
    
        
    


    btn.on('click', btncolor);
    check.on('click', btncheck);
    check1.on('click', btncheck1);
    check2.on('click', btncheck2);

});